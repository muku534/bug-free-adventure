import React,{usesat} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function NavbarC() {
    return (
        <div>
            {['sm'].map((expand) => (
                <Navbar key={expand} bg="dark" variant="dark" expand={expand} fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/">Link</Nav.Link>
                                    <Nav.Link href="/About">About</Nav.Link>
                                    <Nav.Link href="/ContactUs">Contact</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-OnSelect-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    {/* <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                        <Button variant="outline-success">Search</Button> */}
                                    <Link to={"/Signin"}>
                                        <Button variant="outline-success" className="ml-2" >Signin</Button>
                                    </Link>
                                    <Link to={"/Signup"}>
                                        <Button variant="outline-success" className="ml-2">Signup</Button>
                                    </Link>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div >
    )
}
