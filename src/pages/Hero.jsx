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
                <Col md={6} className="mt-4 mt-md-0 text-md-left text-center">
                    <h2 className="title adjust-1">ABOUT DWH</h2>
                    <p className="p-18 adjust-2 mt-4">
                        A data warehouse is a centralized repository that stores large volumes of data from various 
                        sources within an organization. Its primary purpose is to support business intelligence (BI) 
                        activities and data analysis. Data warehouses are designed to provide a consolidated, 
                        historical, and well-organized view of an organization's data, making it easier for analysts 
                        and decision-makers to extract valuable insights.
                        <br />
                        Data warehouses are centralized repositories known for their key characteristics. 
                        They integrate data from diverse sources through ETL processes, store historical data for 
                        trend analysis, and offer powerful query and reporting capabilities, all while employing 
                        dimensional modeling for structured data representation. These systems prioritize query 
                        performance with optimization techniques like indexing and partitioning and maintain a clear 
                        separation between operational and analytical data to prevent disruptions to daily operations. 
                        Overall, data warehouses enable organizations to effectively manage and analyze data, 
                        facilitating informed decision-making.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Hero;
