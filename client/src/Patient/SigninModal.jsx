import React , { useState } from "react";
import { useNavigate } from 'react-router';
import { Modal, Form } from "react-bootstrap";
import SignupModal from "./SignupModal";
import axios from 'axios';


const SigninModal = ({ show, onHide }) => {
  const [signupModalOn, setSignupModalOn] = useState(false);
  const navigate = useNavigate();
  const [userlogin, setUserlogin] = useState({
    email: "",
    password: "",

});

const onChangeHandler = (e) => {
    setUserlogin({
        ...userlogin,
        [e.target.name]: e.target.value,
    })
}
const onClickBtn = async() => {
    if(userlogin.email ==="jhikyuinn") {
      navigate(`/patient/${userlogin.email}`, {id: "jhikyuinn"});
    }
    else if(userlogin.email === "James") {
      navigate(`/doctor/${userlogin.email}`, {id: "James"})
    }
    else if(userlogin.email === "INLab") {
      navigate(`/hospital/${userlogin.email}`, {id: "INLab"});
  }
  else if(userlogin.email === "applewatch") {
    navigate(`/wearable/${userlogin.email}`, {id: "applewatch"});
}
    else if(userlogin.email !== undefined) {
      navigate(`/patient/${userlogin.email}`, {id: userlogin.email});
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
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={userlogin.email} onChange={onChangeHandler} />
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