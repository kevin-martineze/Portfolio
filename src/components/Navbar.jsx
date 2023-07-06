import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";



function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar expanded={expand} fixed="top" expand="md" classname={navColour ? "sticky" : "navbar"}>
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} alt="brand" className="img-fluid logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => { updateExpanded(expand ? false : "expanded") }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="{#home}">
                        {/* HOME */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <HomeIcon style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>
                        {/* ABOUT ME */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                                <PersonIcon style={{ marginBottom: "2px" }} /> About me
                            </Nav.Link>
                        </Nav.Item>
                        {/* PROJECTS */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                            </Nav.Link>
                        </Nav.Item>
                        {/* RESUME */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>
                        {/* BLOGS */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contactme" onClick={() => updateExpanded(false)}>
                                <ContactPageIcon style={{ marginBottom: "2px" }} /> Contact me
                            </Nav.Link>
                        </Nav.Item>
                            <Button href="https://github.com/kevin-martineze" target="_blank">
                            </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar;