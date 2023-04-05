import { Container, Row, Col } from "react-bootstrap";
import "./createAccountStyles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
// import BgImage from "../Assets/BgExport.png"

export default function CreateAccountComponent() {
  return (
    <Container fluid className="createAccountCont">
      <Row className="whiteBx2">
        <Col className="" md={12}>
          <IconButton className="backBtn">
            <ArrowBackIcon className="icon" sx={{fontSize: 60}} />
          </IconButton>

          <h1 className="createAccountTitle">Create Account</h1>
          <div className="nameInputgroup">
            <label className="nameLabel">Full Name:</label>
            <input className="nameInputStyle" placeholder="Name" />
          </div>
          <div className="phoneNumInputgroup">
            <label className="phoneNumLabel">Phone Number:</label>
            <input className="phoneNumInputStyle"  placeholder="xxx-xxx-xxxx"/>
          </div>
          <div className="emailInputgroup">
            <label className="emailLabel">Email:</label>
            <input className="emailInputStyle"  placeholder="Email"/>
          </div>
          <div className="createBtnGroup">
            <button className="createBtn">Create Account</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
