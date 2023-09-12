import React from "react";
import { Button, Card, Row } from "react-bootstrap";

const Cards = ({ props }) => {
    return (
        <Card style={{ width: "18rem", height: "21rem" }}>
            <Card.Img
                variant="top"
                src={"https://robohash.org/" + props.name}
                style={{
                    height: "8rem",
                    width: "12rem",
                    margin: "auto",
                }}
            />
            <Card.Body>
                <Card.Title className="fw-bold">{props.name}</Card.Title>
                <Card.Subtitle className="mb-3">{props.position}</Card.Subtitle>
                <Card.Text className="p-10">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <Row className="justify-content-center">
                    <a
                        href="https://www.fb.com"
                        target={"_blank"}
                        className="sub-logo p-1"
                    >
                        <img
                            src="./facebook.png"
                            alt="Facebook logo"
                            className="sub-logo"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        className="sub-logo p-1"
                    >
                        <img
                            src="./instagram.png"
                            alt="Instagram logo"
                            className="sub-logo p-1"
                        />
                    </a>
                    <a
                        href="https://www.github.com"
                        target={"_blank"}
                        className="sub-logo p-1"
                    >
                        <img
                            src="./github.png"
                            alt="Github logo "
                            className="sub-logo p-1"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target={"_blank"}
                        className="sub-logo p-1"
                    >
                        <img
                            src="./linkedin.png"
                            alt="LinkedIn logo"
                            className="sub-logo p-1"
                        />
                    </a>
                    <a href="https://www.gitlab.com" className="sub-logo p-1">
                        <img
                            src="./gitlab.png"
                            alt="GitLab logo"
                            className="sub-logo p-1"
                        />
                    </a>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Cards;
