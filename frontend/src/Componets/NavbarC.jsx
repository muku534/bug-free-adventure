import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useAlert } from 'react-alert';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert';
// import { UserLogout, } from '../redux/Action/userAction'

// import store from '../validation/store'
import { MDBIcon } from 'mdb-react-ui-kit';
export default function NavbarC() {

    const alert = useAlert();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const { user, loading } = useSelector(state => state.auth)

    const [keyword, setKeyword] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:5000/getProducts', {
                params: {
                    keyword,
                    category: 'Laptop',
                    'price[gte]': minPrice,
                    'price[lte]': maxPrice,
                    page: 1
                }
            });
            console.log(response.data); // do something with the response data
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:5000/logout');
            console.log(response.data); // do something with the response data
            // dispatch(UserLogout());
            alert.success('Logout successfully');
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            {['sm'].map((expand) => (
                <Navbar key={expand} bg='dark' variant='dark' expand={expand} >
                    <Container fluid>
                        <Navbar.Brand href="#">SCS</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}  >
                                    SCS
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    {/* <Nav.Link href="/">Link</Nav.Link> */}
                                    {/* <Nav.Link href="/About">About</Nav.Link> */}
                                    <Nav.Link href="/ContactUs">Contact</Nav.Link>
                                    {/* <NavDropdown
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
                                    </NavDropdown> */}
                                    <NavDropdown
                                        title="AboutMe"
                                        id={`offcanvasNavbarDropdown-expand-OnSelect-${expand}`}
                                    >
                                        <NavDropdown.Item href="/Profile">My Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="/Orders">
                                            My Orders
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/Cart">
                                            My Cart
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Settings
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5" onClick={handleLogout}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                {/* <MDBIcon fas icon="shopping-cart" /> */}
                                <Form className="d-flex" >
                                    {/* <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"

                                    />
                                    <Button variant="outline-success" onClick={handleSearch}>Search</Button> */}


                                    <Link to={"/Signin"}>
                                        <Button variant="outline-success" className="ml-2" >Signin</Button>
                                    </Link>
                                    {/* <Link to={"/Signup"}>
                                        <Button variant="outline-success" className="ml-2">Signup</Button>
                                    </Link> */}

                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div >
    )
}
