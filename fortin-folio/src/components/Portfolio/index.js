import React from 'react';

import { Row, Col, Card } from 'react-bootstrap';


function Portfolio () {
    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <div className="featured">
                <div>
                    <img src="../assets/JSI-home-page.jpeg"></img>
                </div>
                <div className="featured-text">
                    <h3>JSI</h3>
                    <h4>Website and Social Media Manager | 2019 - current</h4>
                </div>
            </div>
            <Row>
                <Col>
                    <Card class="portfolio-card">
                        <Card.Img variant="top" src="../assets/fetch-homepage.png"/>
                        <Card.Body>
                            <Card.Title>Fetch</Card.Title>
                            <Card.Text>
                                website and brand design
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>BoredAf</Col>
                <Col>Portfolio 1</Col>
            </Row>
        </section>
    );
}

export default Portfolio;