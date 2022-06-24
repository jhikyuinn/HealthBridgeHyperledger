import React , { useState } from "react";
import { useNavigate } from 'react-router';
import { Modal, Form } from "react-bootstrap";
import SignupModal from "./SignupModal";

const SigninModal = ({ show, onHide }) => {
  const [signupModalOn, setSignupModalOn] = useState(false);

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  function  MenuLogin(){
    navigate('/patient',{state:
      {email:email},
    });
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
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </Form.Group>
            <br></br>

            <a onClick={() => MenuLogin()} className="my_btn">
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