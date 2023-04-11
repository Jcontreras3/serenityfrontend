import { Col, Container, Row } from "react-bootstrap";
import "./ResourcesStyles.css";
import NavbarComponent from "../Navbar/NavbarComponent";

export default function ResourcesComponent() {
  return (
    <>
      <NavbarComponent />
      <Container fluid className="resCont">
        <Row className="mapBx">
          <Col className="innerText">
            <p className="topTxt">
              I’m sorry you’re feeling this way, here are some local resources
              you can use and that can help you, please don’t be afraid to reach
              out.
            </p>
            <p className="topTxt">
              Here are some numbers you can call if you need someone to talk to,
              these are available 24 hours.
            </p>
            <ul>
              <li>
                <p className="bulletTxt">
                  National Suicide and Crisis Lifeline - 988
                </p>
              </li>
              <li>
                <p className="bulletTxt">
                  National Sexual Assault Hotline - (800) 656-4673
                </p>
              </li>
              <li>
                <p className="bulletTxt">
                  National Domestic Violence Hotline - (800) 799-7233
                </p>
              </li>
              <li>
                <p className="bulletTxt">
                  Childhelp National Child Abuse Hotline - (800) 422-4453
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
