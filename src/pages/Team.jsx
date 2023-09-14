import React, { useCallback } from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import Cards from "../components/Cards";
import Members from "../../members.json";
import SkillSet from "../../skillset.json";
import "../css/Team.css";
import { useState } from "react";

const Team = () => {
    const [skills, certificates] = SkillSet;

    const [selectedSkills, setSelectedSkills] = useState([]);
    // const handleChange = (e) => {
    //     selectedSkills.map((skill) => {
    //         skill != e.target.value;
    //     });
    //     setSelectedSkills(e.target.value);
    //     console.log(selectedSkills);
    // };

    // const clearSkills = () => {
    //     setSelectedSkills(null);
    //     document
    //         .querySelectorAll("input[type=checkbox]")
    //         .forEach((el) => (el.checked = false));
    // };

    const [state, setState] = useState({
        member: Members,
        filters: new Set(),
    });

    const handleFilterChange = useCallback(
        (event) => {
            setState((previousState) => {
                let filters = new Set(previousState.filters);
                let member = Members;
                if (event.target.checked) {
                    filters.add(event.target.value);
                } else {
                    filters.delete(event.target.value);
                }

                if (filters.size) {
                    member = member.filter((mem) => {
                        return filters.has(...mem.skills);
                    });
                }
                console.log(filters);
                console.log(member);

                return {
                    filters,
                    member,
                };
            });
        },
        [setState]
    );

    const clearSkills = () => {
        setState(
            (prevState) => (
                (prevState.member = Members), (prevState.filters = new Set())
            )
        );
        console.log(state);
        document
            .querySelectorAll("input[type=checkbox]")
            .forEach((el) => (el.checked = false));
    };

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
                <Dropdown className="text-center">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        <p className="d-inline-block px-2 m-0">Skills Button</p>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-2 text-white w-75 dropdown-menu shadow bg-secondary">
                        <Row>
                            <h4 className="text-center">Skills</h4>
                            {/* <Button onClick={clearSkills}>Clear</Button> */}
                        </Row>
                        <Form className="justify-content-between">
                            <Row>
                                {skills.skills.map((skill) => {
                                    return (
                                        <Col md={{ span: 3 }} key={skill}>
                                            <Form.Check // prettier-ignore
                                                type="checkbox"
                                                id={skill}
                                                onChange={handleFilterChange}
                                                value={skill}
                                                label={skill}
                                            />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Form>
                        <h4 className="text-center">Certificate</h4>
                        <Form className="justify-content-between">
                            <Row>
                                {certificates.certificate.map((certificate) => {
                                    return (
                                        <Col md={{ span: 4 }} key={certificate}>
                                            <Form.Check // prettier-ignore
                                                type="checkbox"
                                                id={certificate}
                                                label={certificate}
                                            />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Form>
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
            <div className="media-scroller snaps-inline">
                {state.member.map((mem) => {
                    return (
                        <div className="media-element" key={mem.id}>
                            <Cards props={mem} key={mem.id} />
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default Team;
