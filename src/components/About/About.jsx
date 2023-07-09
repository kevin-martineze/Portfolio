import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

    function About() {
    return (
        <Container fluid className="about-section">
        <Particle />
        <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
                md={7}
                style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "",
                }}
            >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                ...<strong className="purple">...</strong>
                </h1>
            </Col>
            </Row>
        </Container>
        </Container>
    );
    }

export default About;
