import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SigninModal from "./SigninModal";
import '../App.css';

function Data() {
  const [signinModalOn, setSigninModalOn] = useState(false);

  return (
    <>
    <SigninModal
    show={signinModalOn}
    onHide={() => setSigninModalOn(false)}
    />
    
    
    <div className="container-flui conten">
      <h1 className="dat">Check your health<br/> on mobile</h1>
      <h5 className="data_dow"> Change your health  with doctor</h5>
      <h5 className="data_dow"> Change your health  with doctor</h5>
      <h5 className="data_dow"> Change your health  with doctor</h5>
      <h3 className="data_con">Continue as</h3>
      <br></br>
      <table>
        <tr style={{ width: '700px' }}>
          <td><a varient= "primary" style={{marginLeft:"30px"}} onClick={() => setSigninModalOn(true)} className="my_btn">Patient</a></td>
          <td><a href="/doctor" className="my_btn">Doctor</a></td>
          <td><a href="/hospital" className="my_btn">Hospital</a></td>
        </tr>
      </table>

    </div>
    </>
  )
}

export default Data;
