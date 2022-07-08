import React , { useState } from "react";
import { useNavigate } from 'react-router';
import { Modal, Form } from "react-bootstrap";
import SignupModal from "./SignupModal";
import axios from 'axios';


const SigninModal = ({ show, onHide }) => {
  const [signupModalOn, setSignupModalOn] = useState(false);
  const navigate = useNavigate();
  const [userlogin, setUserlogin] = useState({
    AccoutID: "",
    password: "",

});

const onChangeHandler = (e) => {
    setUserlogin({
        ...userlogin,
        [e.target.name]: e.target.value,
    })
}
const onClickBtn = async() => {
    if(userlogin.AccoutID ==="EHR1206") {
      navigate(`/patient/${userlogin.AccoutID}`, {id: userlogin.AccoutID});
    }
    else if(userlogin.AccoutID === "James") {
      navigate(`/doctor/${userlogin.AccoutID}`, {id: userlogin.AccoutID})
    }
    else if(userlogin.AccoutID === "INLab") {
      navigate(`/hospital/${userlogin.AccoutID}`, {id: userlogin.AccoutID});
  }
  else if(userlogin.AccoutID === "applewatch") {
    navigate(`/wearable/${userlogin.AccoutID}`, {id: userlogin.AccoutID});
}
    else if(userlogin.AccoutID !== undefined) {
      navigate(`/patient/${userlogin.AccoutID}`, {id: userlogin.AccoutID});
  }
}
  return (
    <>
    <SignupModal
    show={signupModalOn}
    onHide={() => setSignupModalOn(false)}
    />
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>AccoutID</Form.Label>
              <Form.Control type="text" placeholder="Enter AccoutID" name="AccoutID" value={userlogin.AccoutID} onChange={onChangeHandler} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={userlogin.password} onChange={onChangeHandler} />
            </Form.Group>
            <br></br>

            <a onClick={onClickBtn}className="my_btn">
              Login
            </a>

            <a onClick={() => setSignupModalOn(true)} className="my_btn">
              Signup
            </a>
            
          </Form>
        </Modal.Body>
    </Modal>

    </>

  );
};

export default SigninModal;