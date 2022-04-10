import React from 'react';
import { Row, Col } from 'react-bootstrap';


function Home () {
    return (
        <Row className="home flex-row">
            <Col>
                <img src="../assets/danielle-fortin.png" alt="danielle fortin headshot"/>
            </Col>
            <Col>
                <h1> Danielle Fortin</h1>
                <h3>web design  digital marketing  brand development</h3>
                <button id="button">Learn more</button>
            </Col>
        </Row>
    );
}

export default Home;