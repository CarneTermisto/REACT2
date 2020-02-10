import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';
import {
    Link
  } from "react-router-dom";




function Navigation(){
    return (

<div>

      <Navbar expand="lg">
      <Navbar.Brand href="#home"><img src = "https://static.wixstatic.com/media/c19c76_e1ee443d4c5e4e3197a25eec7a0a97e5.png/v1/fill/w_47,h_49,al_c,q_85,usm_0.66_1.00_0.01/c19c76_e1ee443d4c5e4e3197a25eec7a0a97e5.webp"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/NAVBAR">HOME</Nav.Link>
      <Nav.Link href="/SERVICES">SERVICES</Nav.Link>
      <Nav.Link href="/ABOUT">ABOUT</Nav.Link>
      <Nav.Link href="/PROJECTS">PROJECTS</Nav.Link>
      <Nav.Link href="/CONTACT">CONTACT</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
};

export default Navigation;

