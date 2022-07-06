import { Form, Button } from "react-bootstrap";
import { useState, useRef } from 'react';
import axios from 'axios';
import crypto from 'crypto-js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WearableSend() {
    const BASE_URL = "http://203.247.240.226:8080/fhir"
    const BLOCK_CHAIN_URL = "http://203.247.240.226:22650/api"
    const [formData, setFormData] = useState({
        pid: "",
            assigner: "",
            currentheartrate:"",
            activity: {
                time:"",
                heartrate:"",
            },
            exercise: {
                time:"",
                heartrate:"",
                type:"",
            },
            sleep:{
                time:"",
            },
            totalsteps:"",
            totaldistances:"",
            totalstairs:"",
            createdAt: ""
    });

    const toastId  = useRef();
    const sendPHR = async () => {
        axios.put(`${BASE_URL}/Patient/${formData.pid}`, {
           "resourceType": "Patient",
           "id": formData.pid,
           "text": {
               "status": "generated",
               "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table class=\"hapiPropertyTable\"><tbody/></table></div>"
           },
           "identifier": [
               {
                   "use": "usual",
                   "assigner": {
                       "display": formData.assigner,
                   }
               }
           ],
           "name": [
               {
                   "text": formData.name
               }
           ],
           "age": formData.age,
           "address" : [
               {
                   "use": "home",
                   "text": formData.address
               }
           ],
           "telecom": [
               {
                   "system": "phone",
                   "value": formData.telecome.myPhone,
                   "use": "mobile"
               }
           ],
           "gender": formData.gender,
           "contact": [
               {
                   "relationship":[
                       {
                           "text":formData.contact.relationship
                       }
                   ],
                   "name": {
                       "text": formData.contact.name
                   },
                   "gender": formData.contact.gender,
                   "telecom": [
                       {
                           "system": "phone",
                           "value": formData.contact.phone,
                           "use": "mobile"
                       }
                   ],
                   "address": [
                       {
                           "use":"home",
                           "text": formData.contact.address
                       }
                   ]
               }
           ],
           "extension" : [
               {
                   "url": "symptom",
                   "valueString": formData.symptom
               },
               {
                   "url": "comment",
                   "valueString": formData.comment
               },
               {
                   "url": "doctor",
                   "valueString": formData.doctorName
               },
               {
                   "url": "assigner",
                   "valueString": formData.assigner
               },
               {
                   "url": "age",
                   "valueString": formData.age
               },
               {
                   "url": "createdAt",
                   "valueString": formData.createdAt
               }
           ],
           "generalPractitioner": {
               "reference": `Practitioner/${formData.doctorName}`
           },
           "managingOrganization":{
               "reference": `Organization/${formData.assigner}`
           }
        }).then((res) => {
           console.log("from server: ", res);
           postCondition(res);
       })
    }


    const postCondition = async (prevResult) => {

        if(prevResult !== undefined) {

            await axios.put(`${BASE_URL}/Condition/${formData.pid}`, {

                "resourceType": "Condition",

                "id": formData.pid,

                "extension": [
                    {
                        "url": "doctor",
                        "valueString": formData.doctorName
                    },
                    {
                        "url": "assigner",
                        "valueString": formData.assigner
                    },
                    {
                        "url": "createdAt",
                        "valueString": formData.createdAt
                    }
                ],
                "clinicalStatus": {
                    "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                        "code": "active"
                    }
                 ]
                },
                "verificationStatus": {
                    "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                        "code": "confirmed"
                    }
                 ]
                },
                "category": [
                    {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                            "code": "encounter-diagnosis",
                            "display": "Encounter Diagnosis"
                        }
                     ]
                    }
                ],
                "code": {
                    "text": formData.symptom
                },
                "subject": {
                    "reference": `Patient/${formData.pid}`
                }
            }).then((res) => {
                console.log(res);
            })
        }
    }

    const phrHash = (pid) => {
        const PHRhash = crypto.SHA256(pid, 'INLab').toString();
        return PHRhash
    }

    const postOnChain = async () => {
        const PHRhash = phrHash(formData.pid);
        console.log(formData);
        await axios.post(`${BLOCK_CHAIN_URL}/create`, {
                "EHRNumber" : formData.pid,
                "AccountID": formData.pid,
                "DateTime": formData.createdAt,
                "Organization": formData.assigner,
                "patientName": formData.name,
                "Function": "Create",
                "data": "Patient EHR",
                "PHRHash": PHRhash,
                "checkingBalance":10000000,
                "phonenumber" : formData.telecome.myPhone
     
        }).then(console.log);
    }

    const telChangeHandler = (e) => {
        setFormData({
            ...formData,
            telecome: {
                ...formData.telecome,
                [e.target.name]: e.target.value,
            }
        })
    }

    const conChangeHandler = (e) => {
        setFormData({
            ...formData,
            contact: {
                ...formData.contact,
                [e.target.name]: e.target.value,
            }
        })
    }

    const changeHandler = (e) => {
        const date = new Date().toLocaleString();
        setFormData({
            ...formData,
            createdAt: date,
            [e.target.name]: e.target.value,
        })
        console.log(formData);
    }

    const resetForm = () => {
        setFormData({
            pid: "",
            assigner: "",
            currentheartrate:"",
            activity: {
                time:"",
                heartrate:"",
            },
            exercise:{
                time:"",
                heartrate:"",
                type:"",
            },
            sleep:{
                time:"",
            },
            totalsteps:"",
            totaldistances:"",
            totalstairs:"",
            createdAt: ""
        })
    }

    const onClickSendHandler = async() => {
        toastId.current = toast("Wait.. Sending PHR", {autoClose: false});
        await sendPHR()
        await postOnChain().then(() => {
            toast.update(toastId.current, { render: 'Sending success', type: toast.TYPE.SUCCESS, position: toast.POSITION.TOP_RIGHT, autoClose: 5000});
            resetForm();
        })

    }

    return (
        <div className="hospital_send_phr">
            <ToastContainer />
            <Form>
                <div className="phr_top">
                    <div className="phr_top_left">
                        <div className="col_2">
                            <Form.Group className="mb-3" controlId="pid">
                                <Form.Label>PID</Form.Label>
                                <Form.Control type="text" placeholder="Enter PID" name="pid" value={formData.pid}
                                onChange={changeHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="currentheartrate">
                                <Form.Label>Current heart rate</Form.Label>
                                <Form.Control type="text" placeholder="Enter heart rate" name="currentheartrate" value={formData.currentheartrate}
                                onChange={changeHandler}/>
                            </Form.Group>
                        </div>
                    </div>
                        
                    <div className="phr_top_right">
                        <div className="col_2">
                            <Form.Group className="mb-3" controlId="activitytime">
                                <Form.Label>Total activity time</Form.Label>
                                <Form.Control type="text" placeholder="" name="activitytime" value={formData.activity.time}
                                onChange={changeHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="activityheart">
                                <Form.Label>The average heart rate of activity</Form.Label>
                                <Form.Control type="number" placeholder="" name="activityheart" value={formData.activity.heartrate}
                                onChange={changeHandler}/>
                            </Form.Group> 
                        </div>
                        <div className="col_2">
                            <Form.Group className="mb-3" controlId="excercisetime">
                                <Form.Label>Total exercise time</Form.Label>
                                <Form.Control type="text" placeholder="" name="excercisetime" value={formData.exercise.time}
                                onChange={changeHandler}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="excerciseheart">
                                <Form.Label>The average heart rate of exercise</Form.Label>
                                <Form.Control type="text" placeholder="" name="excerciseheart" value={formData.exercise.heartrate}
                                onChange={changeHandler}/>
                            </Form.Group> 
                        </div>
                        <div className="col_1">
                            <Form.Group className="mb-3" controlId="excercisetype">
                                <Form.Label>Types of Exercise</Form.Label>
                                <Form.Control type="text" placeholder="" name="excercisetype" value={formData.exercise.type}
                                onChange={changeHandler}/>
                            </Form.Group> 
                        </div>
                    </div>
                </div>
                        
                    <div className="phr_bottom">
                        <a style={{margin:"auto"}}className="my_btn" variant="success" onClick={onClickSendHandler}>Send</a>
                    </div>
            </Form>
        </div>
    )
}

export default WearableSend;