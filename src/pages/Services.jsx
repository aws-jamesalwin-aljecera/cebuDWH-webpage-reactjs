import React from "react";
import "../css/Services.css";
import { Container,Row,Col } from "react-bootstrap";

const Services = () => {
    return (
        <Container className="services_layout" id="services">
            <h2 className="text-center">
                services
            </h2>
            <p className="text-center main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est. Elementum sagittis 
                vitae et leo duis ut. Facilisis gravida neque convallis a cras semper auctor neque vitae. Felis eget nunc 
                lobortis mattis aliquam faucibus purus. Sit amet tellus cras adipiscing enim eu turpis egestas. 
            </p>
            <Row>
                <Col className="text-center">
                    <img src="./Infosphere.png" className="image-size-1"/>
                    <h4 className="text-center">etl development</h4>
                    <p className="sub-service-text">
                        Adipiscing tristique risus nec feugiat in fermentum. Nam at lectus urna duis convallis convallis tellus id.
                    </p>
                </Col>
                <Col className="text-center">
                    <img src="./Tableau Logo.png" className="image-size-2"/>
                    <h4 className="text-center">tableau visualization</h4>
                    <p className="sub-service-text">
                        Adipiscing tristique risus nec feugiat in fermentum. Nam at lectus urna duis convallis convallis tellus id.
                    </p>
                </Col>
                <Col className="text-center">
                    <img src="./Data-Analysis.png" className="image-size-3"/>
                    <h4 className="text-center">data analysis</h4>
                    <p className="sub-service-text">
                        Adipiscing tristique risus nec feugiat in fermentum. Nam at lectus urna duis convallis convallis tellus id.
                    </p>
                </Col>
            </Row>

        </Container>
    );
};

export default Services;