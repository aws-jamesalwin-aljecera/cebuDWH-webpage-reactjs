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
            We take pride in offering a comprehensive range of services tailored to Data Warehousing. 
            Our commitment to excellence, paired with our team of highly skilled professionals, 
            ensures that you receive nothing but the best.
            <br />
            Whether you're seeking Tableau Visualization, Data Analysis or looking for ETL Development, 
            our goal is to deliver solutions that address your unique requirements. With a focus on quality, 
            innovation, and customer satisfaction, we stand ready to embark on this journey with you.
            </p>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <img src="./Infosphere.png" className="image-size-1" alt="ETL Development" />
                    <h4>ETL Development</h4>
                    <p className="sub-service-text">
                        ETL stands for Extract, Transform, Load, and ETL development refers to the process of 
                        extracting data from various sources, transforming it into a format suitable for analysis, 
                        and then loading it into a target database or data warehouse.
                    </p>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <img src="./Tableau Logo.png" className="image-size-2" alt="Tableau Visualization" />
                    <h4>Tableau Visualization</h4>
                    <p className="sub-service-text">
                        Tableau is a popular data visualization tool that helps user creates interactive and 
                        shareable dashboards and reports from their data. Tableau allows you to connect to 
                        various data sources, including databases, spreadsheets, cloud services, and more, 
                        and then it enables you to create visually compelling and interactive data visualizations.
                    </p>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <img src="./Data-Analysis.png" className="image-size-3" alt="Data Analysis" />
                    <h4>Data Analysis</h4>
                    <p className="sub-service-text">
                        Data analysis is the process of examining, cleaning, transforming, and interpreting 
                        data with the goal of discovering useful information, drawing conclusions, and 
                        supporting decision-making. It plays a crucial role in various fields, including business, 
                        science, research, and more.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;
