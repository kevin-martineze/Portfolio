import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";


function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle/>
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">Hola!<span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h1>
                            <h1 className="heading-name">SOY<strong className="main-name"> KEVIN MARTINEZ</strong></h1>
                            <div style={{ padding: 50, textAlign: "left"}}><Type/></div>
                        </Col>
                        <Col md={5} style={{ paddingBottom: 20}}>
                            <img src={homeLogo} alt="" className="img-fluid" style={{ maxHeight: "450px"}}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}


export default Home;