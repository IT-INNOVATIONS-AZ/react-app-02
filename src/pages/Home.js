import React from "react";
import Slide from "../components/slide";
import Card from "../components/card";
import SocialIcons from "../components/SocialIcons";
import { MDBContainer } from "mdbreact";
function Home() {
  return (
    <MDBContainer fluid className="mt-5">
      <Slide />
      <div className="row mt-4">
        <div className="col-md-4">
          <Card
            title="Who we are?"
            content="Short message"
            btnText="new btn text"
            color="dark"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Our works"
            content="Lorem bla bla"
            btnText="Hello"
            color="warning"
          />
        </div>
        <div className="col-md-4">
          <Card content="Message" btnText="Contact" title="Contact Us" />
        </div>
      </div>
      <div className="row d-flex justify-content-center w-100 mt-5">
        <SocialIcons shortIcon="tw" icon="twitter" />
        <SocialIcons shortIcon="fb" icon="facebook-f" />
      </div>
    </MDBContainer>
  );
}

export default Home;
