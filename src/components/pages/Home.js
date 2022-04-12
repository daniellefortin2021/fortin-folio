import React from 'react';
import { Row, Col } from 'react-bootstrap';


function Home () {
    return (
        <Row className="home flex-row">
            <Col className="home-images">
                <img className='headshot' src="assets/danielle-fortin.png" alt="danielle fortin headshot"/>
                <img className="home-daisy-1" src="assets/daisy.png" alt="daisy vector"/>
            </Col>
            <Col className="home-images">
                <img className="home-daisy-2" src="assets/daisy.png" alt="daisy vector"/>
                <h1 id="title">Danielle Fortin</h1>
                <h3>web design | digital marketing | brand development</h3>
            </Col>
        </Row>
    );
}

export default Home;