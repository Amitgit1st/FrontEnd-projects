import React from "react";
import { Navbar, Container, Nav,Button } from "react-bootstrap";
const NavBar = () => {
    return (
        <>
            <Navbar expand="sm" bg='black' variant='dark'>
                <Container>
                    <Nav className="justify-content-center">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#store">STORE</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                    </Nav>
                    <Button  variant="outline-info" size="sm">Cart</Button>
                </Container>
            </Navbar>
            <Navbar expand="lg" className="bg-body-tertiary"></Navbar>
        </>
    )
}
export default NavBar;
