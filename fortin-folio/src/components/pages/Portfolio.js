import React, { useState } from 'react';
import Project from '../Projects';

import { Row } from 'react-bootstrap';


function Portfolio (props) {

    const projects = [
        {
            title: 'JSI',
            description: 'website and social media manager | 2019 - current',
            link: 'https://jsi.com',
            image: '../assets/JSI-home-page.jpeg'
        },
        {
            title: 'Fetch',
            description: 'website and brand design',
            image: ',,/assets/fetch-homepage.png'
        },
        {
            title: 'BoredAF',
            description: 'website and brand design',
            image: '../assets/fetch-homepage.png'
        },
        {
            title: 'Bantwana Initiative',
            description: 'strategic communications and web management',
            image: '../assets/bantwana-home-page.jpeg'
        },
        {
            title: 'Empowered to Educate',
            description: 'brand and website design',
            image: '../assets/empowered-home-page.jpeg'
        }
    ];


    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <Row>

                {projects.map((projects) => (
                    <Project 
                    title={projects.title}
                    description={projects.description}/>
                ))}
               
            </Row>
            {/* <Row>
                <Col>
                    <Card className="portfolio-card">
                        <Card.Img variant="top" src="../assets/fetch-homepage.png"/>
                        <Card.Body>
                            <Card.Title>Fetch</Card.Title>
                            <Card.Text>
                                website and brand design
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="portfolio-card">
                        <Card.Img variant="top" src="../assets/bored-af.jpeg"/>
                        <Card.Body>
                            <Card.Title>BoredAF</Card.Title>
                            <Card.Text>
                                website and brand design
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="portfolio-card">
                        <Card.Img variant="top" src="../assets/bantwana-home-page.jpeg"/>
                        <Card.Body>
                            <Card.Title>Bantwana Initiative</Card.Title>
                            <Card.Text>
                                strategic communications and website management
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
        </section>
    );
}

export default Portfolio;