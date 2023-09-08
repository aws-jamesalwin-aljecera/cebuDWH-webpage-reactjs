import React from "react";
import { Col, Container, ModalTitle, Row } from "react-bootstrap";

const Services = () => {
    return (
        <Container
            id="services"
            className="min-vh-100 bg-2 p-5 text-center"
            fluid
        >
            <Row>
                <h2 className="title">SERVICES</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Platea dictumst vestibulum rhoncus est. Elementum
                    sagittis vitae et leo duis ut. Facilisis gravida neque
                    convallis a cras semper auctor neque vitae. Felis eget nunc
                    lobortis mattis aliquam faucibus purus. Sit amet tellus cras
                    adipiscing enim eu turpis egestas.
                </p>
            </Row>
            <Row>
                <Col md={4}>
                    <img
                        src="./Infosphere.png"
                        alt="Infosphere logo"
                        className="w-50"
                    />
                    <h2 className="sub-title">ETL DEVELOPMENT</h2>
                </Col>
                <Col md={4}>
                    <img
                        src="./Tableau Logo.png"
                        alt="Tableau logo"
                        className="w-50"
                    />
                    <h2 className="sub-title">TABLEAU VISUALIZATION</h2>
                </Col>
                <Col md={4}>
                    <img
                        src="./Data-Analysis.png"
                        alt="Data analysis logo"
                        className="w-50"
                    />
                    <h2 className="sub-title">DATA ANALYSIS</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;
