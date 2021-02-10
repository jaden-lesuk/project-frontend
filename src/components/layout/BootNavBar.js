import React from 'react'
import {Link} from "react-router-dom";
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import Logo from './logo.png';
import {Twitter, HouseFill, CollectionFill} from 'react-bootstrap-icons';

const BootNavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="shadow" sticky="top"><Container>

            <Navbar.Brand as = {Link} to = "/" style = {{'fontSize': 25, 'fontWeight': 'bold'}}>
                <img alt="" src={Logo} width="35" height="35" className="d-inline-block align-top"/>
                {'  '}
                Juxtapose
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="ml-auto" >
                
                    <Nav.Link as={Link} to="/" style ={{'marginRight':'1vw'}} ><HouseFill/> Home</Nav.Link>
                    <Nav.Link as={Link} to="/predictions" style ={{'marginRight':'1vw'}}><CollectionFill /> Predictions</Nav.Link>
                    <Nav.Link as={Link} to="/tweets" style ={{'marginRight':'1vw'}}><Twitter/> Tweets</Nav.Link>
                    <Button variant = "outline-light" as={Link} to="/newprediction">Make a Prediction</Button>
                </Nav>
            </Navbar.Collapse>
        </Container></Navbar>  
    )
}

export default BootNavBar
