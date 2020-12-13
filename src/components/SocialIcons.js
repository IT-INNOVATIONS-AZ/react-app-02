import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";

const SocialButtonsPage = ({ shortIcon, icon }) => {
  return (
    <MDBBtn size="lg" social={shortIcon}>
      <MDBIcon fab icon={icon} />
    </MDBBtn>
  );
};

export default SocialButtonsPage;
