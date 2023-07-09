import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
    AiFillProject,
    AiFillContacts,
    AiFillFileText,
    AiTwotoneHome,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import GitHubIcon from '@mui/icons-material/GitHub';

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
                                <AiTwotoneHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>
                        {/* ABOUT ME */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                                <BsFillPersonFill style={{ marginBottom: "2px" }} /> About me
                            </Nav.Link>
                        </Nav.Item>
                        {/* PROJECTS */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/projects" onClick={() => updateExpanded(false)}>
                                <AiFillProject style={{ marginBottom: "2px" }} /> Projects
                            </Nav.Link>
                        </Nav.Item>
                        {/* RESUME */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                                <AiFillFileText style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>
                        {/* BLOGS */}
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contactme" onClick={() => updateExpanded(false)}>
                                <AiFillContacts style={{ marginBottom: "2px" }} /> Contact me
                            </Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item style={{ marginTop: "10px"}}>
                        <Button href="https://github.com/kevin-martineze" target="_blank" className="fork-btn-inner"><GitHubIcon style={{ fontSize: "1.2em" }}/></Button>
                        </Nav.Item>                     
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default NavBar;