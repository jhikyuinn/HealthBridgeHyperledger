import Header from './Header';
import Menubar from './MenuBar';
import Menubar_nav from './Menubar_nav';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import "../css/PatientRecord.css"
import { useEffect } from 'react';


function Patient() {
    const {id} = useParams();
    console.log({id});
    const [state, setState] = useState(0);
    const [users, setUsers] = useState([]);

    async function getUsers() { 
      let temp = [];
      await axios.get(`http://203.247.240.226:22650/api/query/${id}`).then((res) => {
        console.log(res);
        temp.push(res.data);
        console.log(temp);
        setUsers(temp);
      });
      console.log(users);
    }

    useEffect(() => {
        getUsers();
      },[])

    return (
        <div className="hospital">
            <Header users={users}/>
            <div className='hospital_main'>
                <div className='hospital_content'>
                    <Menubar setState={setState}/>
                    <div style={{marginTop:"10px"}} className='right_content' >
                        <Menubar_nav state={state} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patient;