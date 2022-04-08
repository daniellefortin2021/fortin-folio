import React from 'react';

import { Row, Col } from 'react-bootstrap';


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
                    
                </Col>
                <Col>BoredAf</Col>
                <Col>Portfolio 1</Col>
            </Row>
        </section>
    );
}

export default Portfolio;