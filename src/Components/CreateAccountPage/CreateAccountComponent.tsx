import { Container, Row, Col, Alert, Modal, Button } from "react-bootstrap";
import "./createAccountStyles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CreatedPicture,
  GetLoggedInUserData,
  createAccount,
} from "../../Service/DataService";
// import derpCat from '../../Assets/derpCat.jpg';

// Create a function that takes in the first password
// Create if statement comparing the password and the verify password input

export default function CreateAccountComponent() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [passWord, setPassWord] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [DOB, setDOB] = useState(0);
  const [verifyPass, setVerifyPass] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadMessage, setLoadMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // let getDataBack:any;

  let createAccountNavigate = useNavigate();
  const handleVerification = () => {
    if (verifyPass === passWord) {
      // let UserIdPulled = sessionStorage.getItem('UserId');
      // let FileName = "DerpCat";
      // let FileContentType = ".jpg";
      // let ImageData = derpCat;

      // let pictureData = {
      //   UserIdPulled,
      //   FileName,
      //   FileContentType,
      //   ImageData
      // }

      handleCreateSubmit();

      // handleGetData();
      // sessionStorage.setItem('UserId', getDataBack.userId);
      // CreatedPicture(pictureData);
      createAccountNavigate("/");

      setSuccessMessage("Account Successfully Created");
      setShowModal(true); // Show the modal
    } else {
      setErrorMessage("Password Does Not Match");
      setShowModal(true);
    }
  };

  // const handleGetData = () => {
  //   getDataBack = GetLoggedInUserData(email);

  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadMessage("Fill in all input fields to create an account!");
      setShowModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCreateSubmit = () => {
    let userCreatedData = {
      Id: 0,
      fullName,
      email,
      phoneNumber,
      passWord,
      verifyPass,
      DOB,
      zipCode,
    };
    createAccount(userCreatedData);
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal
  };

  let navigate = useNavigate();

  return (
    <Container fluid className="createAccountCont">
      <Row className="whiteBx2">
        <Col className="" md={12}>
          <IconButton onClick={() => navigate("/")} className="backBtn">
            <ArrowBackIcon className="icon" sx={{ fontSize: 60 }} />
          </IconButton>

          <h1 className="createAccountTitle">Create Account</h1>
          <div className="nameInputgroup">
            <label className="nameLabel">Full Name:</label>
            <input
              className="nameInputStyle"
              onChange={({ target: { value } }) => setFullName(value)}
              placeholder="Name"
            />
          </div>
          <div className="phoneNumInputgroup">
            <label className="phoneNumLabel">Phone Number:</label>
            <input
              className="phoneNumInputStyle"
              onChange={({ target: { value } }) => {
                const phoneNumber = value.replace(/[^\d]/g, "");

                if (value === "" || /^\d+$/.test(phoneNumber)) {
                  setPhoneNumber(parseInt(phoneNumber));
                } else {
                  setPhoneNumber(0); // Reset the phone number if it contains letters
                  alert("Please enter a valid phone number without letters.");
                }
              }}
              maxLength={10}
              placeholder="(123)456-7890"
            />
          </div>
          <div className="emailInputgroup">
            <label className="emailLabel">Email:</label>
            <input
              className="emailInputStyle"
              onChange={({ target: { value } }) => setEmail(value)}
              placeholder="Email"
            />
          </div>
          <Row className="passBirthInputgroup">
            <Col className="passGroup" sm={12} md={4}>
              <label className="passLabel">Password:</label>
              <input
                className="passInputStyle"
                type="password"
                onChange={({ target: { value } }) => setPassWord(value)}
                placeholder="Password"
              />
            </Col>

            <Col className="birthGroup" sm={12} md={4}>
              <label className="birthLabel">Date of Birth:</label>
              <input
                className="birthInputStyle"
                onChange={({ target: { value } }) => {
                  const dobVal = value.replace(/[^\d]/g, "");

                  if (value === "" || /^\d+$/.test(dobVal)) {
                    setDOB(parseInt(dobVal));
                  } else {
                    setPhoneNumber(0); // Reset the phone number if it contains letters
                    alert("Please only enter numbers no letters");
                  }
                }}
                maxLength={6}
                placeholder="Date of Birth"
              />
            </Col>
          </Row>
          <Row className="passBirthInputgroup">
            <Col className="passGroup" sm={12} md={4}>
              <label className="passLabel">Verify Password:</label>
              <input
                className="passInputStyle"
                type="password"
                onChange={({ target: { value } }) => setVerifyPass(value)}
                placeholder="Verify Password"
              />
            </Col>

            <Col className="birthGroup" sm={12} md={4}>
              <label className="birthLabel">ZipCode:</label>
              <input
                className="birthInputStyle"
                onChange={({ target: { value } }) => {
                  const zip = value.replace(/[^\d]/g, "");

                  if (value === "" || /^\d+$/.test(zip)) {
                    setZipCode(parseInt(zip, 10));
                  } else {
                    setZipCode(0); // Reset the phone number if it contains letters
                    alert("Please enter a valid phone number without letters.");
                  }
                }}
                maxLength={5}
                placeholder="ZipCode"
              />
            </Col>
          </Row>
          <div className="createBtnGroup">
            <button
              disabled={!zipCode}
              onClick={handleVerification}
              className="createBtn"
            >
              Create Account
            </button>
          </div>
        </Col>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header className="ModalStyles" closeButton>
            <Modal.Title>Good Evening</Modal.Title>
          </Modal.Header>
          <Modal.Body className="ModalStylesBod">
            {successMessage ? (
              <p className="modalTxt">{successMessage}</p>
            ) : loadMessage ? (
              <p className="modalTxt">{loadMessage}</p>
            ) : errorMessage ? (
              <p>{errorMessage}</p>
            ) : null}
          </Modal.Body>
          <Modal.Footer className="ModalStyles">
            <button className="modalBtn" onClick={handleCloseModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
}
