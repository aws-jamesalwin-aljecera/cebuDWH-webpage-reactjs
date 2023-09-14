import React from "react";
import "../css/Services.css";
import { Container,Row,Col } from "react-bootstrap";

const Services = () => {
    return (
        <Container className="text-center services_layout" id="services">
            <h2 className="text-center">
                Services
            </h2>
            <p className="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est. Elementum sagittis vitae et leo duis ut. Facilisis gravida neque convallis a cras semper auctor neque vitae. Felis eget nunc lobortis mattis aliquam faucibus purus. Sit amet tellus cras adipiscing enim eu turpis egestas.
            </p>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <img src="./Infosphere.png" className="image-size-1" alt="ETL Development" />
                    <h4>ETL Development</h4>
                    <p className="sub-service-text">
                        Adipiscing tristique risus nec feugiat in fermentum. Nam at lectus urna duis convallis convallis tellus id.
                    </p>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <img src="./Tableau Logo.png" className="image-size-2" alt="Tableau Visualization" />
                    <h4>Tableau Visualization</h4>
                    <p className="sub-service-text">
                        Adipiscing tristique risus nec feugiat in fermentum. Nam at lectus urna duis convallis convallis tellus id.
                    </p>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <img src="./Data-Analysis.png" className="image-size-3" alt="Data Analysis" />
                    <h4>Data Analysis</h4>
                    <p className="sub-service-text">
                        Adipiscing tristique risus nec feugiat in fermentum. Nam at lectus urna duis convallis convallis tellus id.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;
