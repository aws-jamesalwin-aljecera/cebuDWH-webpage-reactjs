import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "../css/Tools.css";

const Tools = () => {
    return (
        <>
            <Container fluid className="text-center background">
                <Row>
                    <h2 className="mt-4">tools</h2>
                </Row>
                <Row xs="auto" className="mt-5 justify-content-md-center">
                    <Col>
                        <img src="./JavaScript.png" width={91} height={79}/>
                    </Col>
                    <Col> 
                        <img src="./React.png" width={91} height={79} />
                    </Col>
                    <Col>
                        <img src="./CP4D.png" width={91} height={79}/>
                    </Col>
                    <Col>
                        <img src="./winscp.png" width={91} height={79}/>
                    </Col>
                    <Col>
                        <img src="./DBeaver.png" width={91} height={79}/>
                    </Col>
                    <Col>
                        <img src="./Tableau Logo.png" width={91} height={79}/>
                    </Col>
                    <Col >
                        <img src="./Infosphere.png" width={91} height={79}/>
                    </Col>
                    <Col>
                        <img src="./Teraterm.png" width={91} height={79}/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <figure className="text-center pt-5 pb-5">
                    <blockquote className="blockquote">
                        <p>"Now if you don't like keyboard shortcuts, firstly, what's wrong with you?"</p>
                    </blockquote>
                    <figcaption className="blockquote-footer mt-4">
                        Jedd Guinto <cite title="Source Title">2023</cite>
                    </figcaption>
                </figure>
            </Container>
        </>
    );
};

export default Tools;