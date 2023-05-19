import { Container, Row, Col, Alert } from "react-bootstrap";
import "./createAccountStyles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createAccount } from "../../Service/DataService";

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

  let createAccountNavigate = useNavigate();
  const handleVerification = () => {
    if (verifyPass === passWord) {
      handleCreateSubmit();
      createAccountNavigate("/");

      alert("Account Successfully Created");
    } else {
      alert("Password does not match");
    }
  };

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

                if (value === '' || /^\d+$/.test(phoneNumber)) {
                  setPhoneNumber(parseInt(phoneNumber, 10));
                } else {
                  setPhoneNumber(0); // Reset the phone number if it contains letters
                  alert("Please enter a valid phone number without letters.");
                }
              }}
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
                onChange={({ target: { value } }) => setDOB(parseInt(value))}
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
                onChange={({ target: { value } }) =>
                  setZipCode(parseInt(value))
                }
                placeholder="ZipCode"
              />
            </Col>
          </Row>
          <div className="createBtnGroup">
            <button onClick={handleVerification} className="createBtn">
              Create Account
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
