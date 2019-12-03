import React, { useState, useContext } from "react";
// import { useStoreContext } from "../../utils/GlobalState";

// import { Navbar, Nav, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom'
import { StoreContext } from "../../utils/GlobalState"
import { Router, Route } from 'react-router'

import { Navbar, Nav, Grid, Row, Col } from 'react-bootstrap';


function NavAfterLogin() {

  return (

<<<<<<< HEAD

    <div>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/mymedications">My Medications</Link></li>
        <li><Link to="/addmedications">Add Medications</Link></li>
        <li><Link to="/home">Logout</Link></li>
      </ul>
    </div>

    // <Navbar className="nav-color" expand="lg">
    //   <Navbar.Brand href="/dashboard"><img height="60px" width="120px" src="medbuddylogo.png" alt="logo" /></Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link className="text-light" href="/#dashboard">Dashboard</Nav.Link>
    //       <Nav.Link className="text-light" href="/#mymedications" >My Medications</Nav.Link>
    //       <Nav.Link className="text-light" href="/#addmedications">Add Medications</Nav.Link>
    //       <Nav.Link className="text-light" href="/#home">Logout</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
=======
    // <div>
    //   <ul>
    //     <li><Link to = "/dashboard">Dashboard</Link></li>
    //     <li><Link to = "/mymedications">My Medications</Link></li>
    //     <li><Link to = "/addmedications">Add Medications</Link></li>
    //     <li><Link to = "/home">Logout</Link></li>
    //   </ul>
    // </div>
    <Navbar  className="nav-color" expand="lg">
  <Navbar.Brand href="/dashboard" className="col"><img height="60px" width="120px" src="medbuddylogo.png" alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" id="nav-loging"> 
        <Link to = "/dashboard" className="text-light col">Dashboard</Link>   
        <Link to ="/mymedications" className="text-light col-md-auto">My Medications</Link>  
        <Link to = "/addmedications"className="text-light col-md-auto" >Add Medications</Link>               
    </Nav>
    <Link to = "/home" className="text-light" id="logout">Logout</Link> 
  </Navbar.Collapse> 
     
</Navbar>
    
>>>>>>> b496b0fcc6407af891e34cbdd19e13073dd98b9d
  )

}

export default NavAfterLogin;