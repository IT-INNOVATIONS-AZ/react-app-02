import React, { useState } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import Input from "../components/input";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalStatus, setModalStatus] = useState(false);

  const toggle = () => {
    setModalStatus(!modalStatus);
  };

  return (
    <div className="container">
      <MDBModal isOpen={modalStatus} toggle={toggle}>
        <MDBModalHeader toggle={toggle}>Your value</MDBModalHeader>
        <MDBModalBody>
          <ul>
            <li>Name: {name}</li>
            <li>Email: {email}</li>
            <li>Message: {message}</li>
          </ul>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={toggle}>
            Close
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      <h1 className="h1 text-center mt-5">Contact us</h1>
      <Input
        name="Name"
        label="Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        name="Email"
        label="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="Message"
        label="Message"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="d-flex justify-content-center">
        <MDBBtn onClick={() => setModalStatus(true)}>Send</MDBBtn>
      </div>
    </div>
  );
}

export default Contact;
