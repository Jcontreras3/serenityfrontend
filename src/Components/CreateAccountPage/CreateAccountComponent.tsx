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
          <IconButton className="btn">
            <ArrowBackIcon className="icon" sx={{fontSize: 60}} />
          </IconButton>

          <h1 className="createAccountTitle">Create Account</h1>
          <div className="loginEmailInputgroup">
            <label className="emailLabel">Email:</label>
            <input className="loginInputStyle" placeholder="Email" />
          </div>
          <div className="passwordEmailInputgroup">
            <label className="passwordLabel">Password:</label>
            <input className="passwordInputStyle" placeholder="Password" />
          </div>
          <div className="createBtnGroup">
            <button className="createBtn">Create Account</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
