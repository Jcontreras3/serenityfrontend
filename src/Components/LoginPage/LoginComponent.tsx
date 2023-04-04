import { Container, Row, Col,Button } from "react-bootstrap";
import "./loginStyles.css";
// import BgImage from "../Assets/BgExport.png"


export default function LoginComponent() {
    // const containerStyle = {
    //     backgroundImage: ‘url(path/to/image.jpg)’,
    //     backgroundRepeat: ‘no-repeat’,
    //     backgroundPosition: ‘center center’,
    //     backgroundSize: ‘cover’,
    //   };

  return (
    <Container fluid className="loginCont">
        <Row className="whiteBx">
            <Col className="test" md={12}>
              <h1 className="loginTitle">Serenity</h1>
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