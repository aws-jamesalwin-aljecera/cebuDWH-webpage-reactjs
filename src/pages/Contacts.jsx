import React from "react";
import "../css/Contacts.css";
import { Container,Row,Col } from "react-bootstrap";



const Contacts = () => {
    return (
        <Container fluid className="back-color pb-5">
            <Row>
                <Col className="mt-5">
                    <Row >
                        <Col sm={2}></Col>
                        <Col>
                            <img src="./AWS Logo.png" className="img-size"/>
                            <h6 className="text">ADVANCED WORLD SOLUTIONS INC.</h6>
                            <h6 className="text">ADVANCED WORLD SYSTEMS INC.</h6>
                        </Col>
                    </Row>
                    <Row xs="auto" className="mt-3 justify-content-md-left">
                        <Col sm={2}></Col>
                        <Col>
                            <img src="./linkedin.png" width={39} height={37}/>
                        </Col>
                        <Col>
                            <img src="./facebook.png" width={39} height={39}/>
                        </Col>
                        <Col>
                            <img src="./github.png" width={36} height={35}/>
                        </Col>
                    </Row>
                </Col>
                <Col className="mt-5">
                    <h4 className="title-text">CONTACT</h4>
                    <p className="p1">Ground Floor, i1 Building, Cebu IT Park, Apas, Cebu City, Philippines</p>
                    <p className="p2"> Tel: 032 268-6405</p>
                    <p className="p3">Email: awshr.cebu@awysy-i.com</p>
                    <p className="p2">https://www.awsys-i.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Contacts;