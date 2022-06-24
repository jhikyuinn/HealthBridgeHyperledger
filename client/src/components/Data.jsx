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
    
    
    <div className="content">
      <h1 className="data" >Check your health<br/> on mobile</h1>
      <h5 className="data_down" style={{marginTop:"70px"}}> Change your health  with doctor</h5>
      <h5 className="data_down"> Change your health  with doctor</h5>
      <h5 className="data_down"> Change your health  with doctor</h5>
      <h3 className="data_cont">Continue as</h3>
      <br></br>
      <table>
        <thead>
        <tr style={{ width: '700px' }}>
          <td><a href="#!" style={{marginLeft:"30px"}} onClick={() => setSigninModalOn(true)} className="my_btn">PHR owner</a></td>
          <td><a href="/doctor" className="my_btn">PHR researcher</a></td>
          <td><a href="/hospital" className="my_btn">PHR recorder</a></td>
        </tr>
        </thead>
      </table>

    </div>
    </>
  )
}

export default Data;
