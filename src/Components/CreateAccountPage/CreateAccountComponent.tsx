
import { Container, Row, Col,Button } from "react-bootstrap";
import "./createAccountStyles.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import BgImage from "../Assets/BgExport.png"


export default function CreateAccountComponent() {
   
  return (
    <Container fluid className="createAccountCont">
        <Row className="whiteBx2">
            <Col className="" md={12}>

              <h1 className="loginTitle">Create Account</h1>
              <div className="loginEmailInputgroup">
                <label className="emailLabel">Email:</label>
                <input className="loginInputStyle" placeholder="Email"/>
              </div>
              <div className="passwordEmailInputgroup">
                <label className="passwordLabel">Password:</label>
                <input className="passwordInputStyle" placeholder="Password"/>
              </div>
              <div className="loginBtnGroup">
                  <button className="loginBtn">Log in</button>
                  <Button className="createAccountBtn" variant="link">Create Account</Button>
              </div>
             
            </Col>
        </Row>
    </Container>
  )
}

