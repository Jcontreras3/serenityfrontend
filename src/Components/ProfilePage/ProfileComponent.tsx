import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./profileStyles.css";
import NavbarComponent from "../Navbar/NavbarComponent";
import Pfp from "../../Assets/Pfp.png";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export default function ProfileComponent() {
  let navigate = useNavigate();
  return (
    <>
      {/* <NavbarComponent/> */}
      <Container fluid className="profileCont">
        <Row className="profileBx">
          <Col className="profileImgCol">
            <div className="profileGroup">
              <IconButton onClick={() => navigate("/Home")} className="backBtn">
                <ArrowBackIcon className="icon" sx={{ fontSize: 60 }} />
              </IconButton>
            </div>
            <div className="proFilePic">
              <img className="profileIcon" src={Pfp} />
            </div>

            <p className="personNameTxt">Person Name</p>
          </Col>
          <Col className="inputFieldCol" md={12}>
            <label className="emailLabelText">Email </label>
            <input className="inputFieldOne" placeholder="Email" />
          </Col>
          <Col className="inputFieldCol" md={12}>
            <label className="passwordLabelText">Password</label>
            <input className="inputFieldTwo" placeholder="Password" />
          </Col>
          <Col className="inputFieldCol" md={12}>
            <label className="dobLabelText">Date of birth</label>
            <input className="inputFieldThree" placeholder="Date of birth" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
