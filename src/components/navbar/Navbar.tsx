import React from 'react'
import { Nav  } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'



const NavbarMenu: React.FC = () => {
    return (<> 
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Ariège MGA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer exact to="/">
                        <Nav.Link>Acceuil</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/localisation">
                        <Nav.Link>Localisation</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
               
            </Navbar.Collapse>
        </Navbar>
    </>);
}
 
export default NavbarMenu;