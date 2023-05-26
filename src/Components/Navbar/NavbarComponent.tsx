import React from "react";
import {  useNavigate } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Col } from "react-bootstrap";
import Butterfly from "../../Assets/butterfly2.png";
import Pfp from "../../Assets/Pfp.png";
import "../Navbar/Navbar.css";


type Props = {};



export default function NavbarComponent({ }: Props) {
  let navigate = useNavigate();
  return (
    <>


      <Navbar className="NavbarBg" expand="lg">

        <Container className="Navbar container">
          <div>
          <Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand>
                <img src={Butterfly} className="Butterfly" />
              </Navbar.Brand>

              <Nav.Link className="mob-home" onClick={() => navigate("/Home")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/Affirmations")}>Affirmations</Nav.Link>

              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => navigate("/Music")}>Music Playlist</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/Memes")}>Funny Memes</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/Resources")}> Hotlines</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link onClick={() => navigate("/Music")} className="Music">Music Playlists</Nav.Link> 
              <Nav.Link onClick={() => navigate("/Memes")} className="Memes">Funny Memes</Nav.Link>
              <Nav.Link onClick={() => navigate("/Resources")} className="Hotlines">Hotlines</Nav.Link>
              
              
          </Navbar.Collapse>
          </Col>
          </div>
          <div>
            
            <Navbar.Brand>
             <img onClick={() => navigate("/Profile")} src={Pfp} className="Pfp" />
            </Navbar.Brand>
          </div>
        </Container >

      </Navbar>

    </>
  );
}
