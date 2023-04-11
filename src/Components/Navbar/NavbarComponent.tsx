import React from "react";
import {  BrowserRouter, Route, Link, Routes, useNavigate } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Butterfly from "../../Assets/Butterfly.png";
import Pfp from "../../Assets/Pfp.png";
import Bm from "../../Assets/Bookmark.png";
import "../Navbar/Navbar.css";


type Props = {};



export default function NavbarComponent({}: Props) {
  let navigate = useNavigate();
  return (
    <>
<<<<<<< HEAD
  
=======
    
>>>>>>> f47bd4b286bb55be4b580ce8ba8ce248ef10ef20
   
    <Navbar className="NavbarBg" expand="lg">
      
      <Container className="Navbar container">
        <div>
          <Navbar.Brand>
            <img src={Pfp} className="Pfp" />
          </Navbar.Brand>
          <Navbar.Brand>
            <img src={Bm} className="Bookmark" width={59} height={50} />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
<<<<<<< HEAD
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            {/* <Route path="/" element={<HomeComponent />} /> */}
           
            
            <Nav.Link as={Link} to="/Affirmations">Affirmations</Nav.Link>
=======
            <Nav.Link onClick={() => navigate("/HomeComponent")}>Home</Nav.Link>
           
           
            
            <Nav.Link onClick={() => navigate("/AffirmationsComponent")}>Affirmations</Nav.Link>
>>>>>>> f47bd4b286bb55be4b580ce8ba8ce248ef10ef20
            
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Music Playlist</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/ResourcesComponent")}>
                Hotlines
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Funny Memes</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#music" className="Music">Music Playlists</Nav.Link>
            <Nav.Link href="#hotlines" className="Hotlines">Hotlines</Nav.Link>
            <Nav.Link href="#memes" className="Memes">Funny Memes</Nav.Link>
            <Nav.Link href="#favorites" className="Favorites">Favorites</Nav.Link>
            <Navbar.Brand>
              <img src={Butterfly} className="Butterfly" />
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
<<<<<<< HEAD
   

    
=======
>>>>>>> f47bd4b286bb55be4b580ce8ba8ce248ef10ef20
    </>
  );
}
