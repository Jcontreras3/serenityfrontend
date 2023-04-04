import { Container, Row, Col } from "react-bootstrap";
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
            <Col>
              <p className="loginTitle">Serenity</p>
            </Col>
        </Row>
    </Container>
  )
}