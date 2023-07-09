import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME<span className="purple">INTRODUCE</span>MYSELF
            </h1>
            <p className="home-about-body">ADD DESCRIPTION</p>
            <br />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
