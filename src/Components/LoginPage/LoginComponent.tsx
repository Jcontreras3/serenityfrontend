import React, { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./loginStyles.css";
import { useNavigate } from "react-router-dom";
import { GetLoggedInUserData, loginFetch } from "../../Service/DataService";
import DataContext from "../../Context/DataContext";
import useHooks from "../../Hooks/UseHooks";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUpdatedPublisherName, setUpdatedUserId } = useContext(DataContext);

  const handleSubmit = async () => {
    let userLoginData = {
      email,
      password,
    }; 
    console.log(userLoginData);
    let token = await loginFetch(userLoginData);
    if(token.token != null){
      localStorage.setItem("Token", token.token);
      const userData: any = await GetLoggedInUserData(email);
      console.log(userData);
      if (userData !== null) {
        setUpdatedPublisherName(userData.publisherName);
        setUpdatedUserId(userData.userId);
        console.log(userData.publisherName);
        console.log(userData.userId);
      }
      navigate("/Home");
    }
  }

  return (
    <Container fluid className="loginCont">
        <Row className="whiteBx">
            <Col md={12}>
              <h1 className="loginTitle">Serenity</h1>
              <div className="loginEmailInputgroup">
                <label className="emailLabel">Email:</label>
                <input type="email" className="loginInputStyle" placeholder="Email" onChange={({target: {value}}) => setUserEmail(value)}/>
              </div>
              <div className="passwordEmailInputgroup">
                <label className="passwordLabel">Password:</label>
                <input className="passwordInputStyle" type="password" placeholder="Password" onChange={({target: {value} }) => setPassword(value)}/>
              </div>
              <div className="loginBtnGroup">
                  <button className="loginBtn" onClick={handleSubmit}>Log in</button>
                  <Button className="createAccountBtn" onClick={() => navigate("/CreateAccount")} variant="link">Create Account</Button>
              </div>
             
            </Col>
        </Row>
    </Container>
  )
}