import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const Card = ({ title, content, btnText, color }) => {
  return (
    <MDBCol>
      <MDBCard>
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{content}</MDBCardText>
          {btnText && (
            <MDBBtn href="#" color={color}>
              {btnText}
            </MDBBtn>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Card;
