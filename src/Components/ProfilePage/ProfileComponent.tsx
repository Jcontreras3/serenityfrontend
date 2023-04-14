import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./profileStyles.css";
import NavbarComponent from "../Navbar/NavbarComponent";
import Pfp from "../../Assets/Pfp.png";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProfileComponent() {
  return (
    <>
      {/* <NavbarComponent/> */}
      <Container fluid className="profileCont">
        <Row className="profileBx">
          <Col>
            <div className="test">
              <IconButton className="backBtn">
                <ArrowBackIcon className="icon" sx={{ fontSize: 60 }} />
              </IconButton>
            </div>
            <div className="proFilePic">
              <img className="profileIcon" src={Pfp} />
            </div>
          </Col>

          <Col md={12}>
            <p>Person Name</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
