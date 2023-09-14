import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/Hero.css";

export const Hero = () => {
    return (
        <Container className="min-vh-92 d-flex align-items-center" id="about">
        <Row className="align-items-center">
            <Col md={6}>
                <img src="./Rajztabla-311@4x-edit.png" className="w-100" alt="Image"/>
            </Col>
            <Col md={6} className="mt-4 mt-md-0 text-center text-md-left">
                <h2 className="title adjust-1">ABOUT DWH</h2>
                <p className="p-18 adjust-2 mt-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Natus veritatis aliquam, ullam asperiores harum,
                        non facilis facere voluptate eum quaerat sapiente, ab
                        consequuntur. Amet alias dolor earum cupiditate?
                        Veritatis repellat, quaerat dolorem suscipit dicta, ea
                        eligendi ipsum necessitatibus, explicabo laudantium
                        aperiam. Iure voluptate aperiam explicabo velit ut,
                        suscipit expedita? Quas cupiditate recusandae
                        blanditiis, veritatis laudantium quia neque adipisci
                        molestias aperiam nostrum enim consequatur magnam
                        tenetur quibusdam sit praesentium cumque et architecto
                        iusto repellat explicabo perferendis! Voluptas
                        necessitatibus rerum non itaque odio, consequatur ipsa
                        temporibus sint optio iusto pariatur fuga laudantium aut
                        laborum perspiciatis ratione facere possimus repudiandae
                        placeat amet? Voluptas exercitationem ea sint earum
                        doloremque reiciendis reprehenderit ratione.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Hero;
