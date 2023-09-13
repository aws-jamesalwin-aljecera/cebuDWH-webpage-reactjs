import React from "react";
import {
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Form,
    Row,
} from "react-bootstrap";
import Cards from "../components/Cards";
import Members from "../../members.json";
import "../css/Team.css";

const Team = () => {
    let len = 8;
    return (
        <Container className="text-center min-vh-92 p-5 bg-1" id="team" fluid>
            <Row className="mb-3">
                <h2 className="title">THE TEAM</h2>
                <p className="p-18">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Platea dictumst vestibulum rhoncus est. Elementum
                    sagittis vitae et leo duis ut. Facilisis gravida neque
                    convallis a cras semper auctor neque vitae. Felis eget nunc
                    lobortis mattis aliquam faucibus purus. Sit amet tellus cras
                    adipiscing enim eu turpis egestas.
                </p>
                <h2 className="sub-title">Profile</h2>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        <p className="d-inline-block px-2 m-0">Skill Button</p>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Form>
                            <Dropdown.Item href="#/action-1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item>
                        </Form>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <div className="media-scroller snaps-inline">
                {Members.map((mem) => {
                    return (
                        <div class="media-element">
                            <Cards props={mem} key={mem.id} />
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default Team;
