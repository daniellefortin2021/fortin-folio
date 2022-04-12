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
            link: 'https://intense-crag-43217.herokuapp.com/',
            image: '../assets/fetch-homepage.png'
        },
        {
            title: 'BoredAF',
            description: 'website and brand design',
            link: 'https://zsvoboda87.github.io/Bored-AF/',
            image: '../assets/fetch-homepage.png'
        },
        {
            title: 'Bantwana Initiative',
            description: 'strategic communications and web management',
            link: 'www.bantwana.org',
            image: '../assets/bantwana-home-page.jpeg'
        },
        {
            title: 'Empowered to Educate',
            description: 'brand and website design',
            link: 'https://www.empoweredtoeducate.org/',
            image: '../assets/empowered-home-page.jpeg'
        }
    ];


    return (
        <section>
            <div className="header">
                <h2>Portfolio</h2>
            </div>
            <Row className="portfolio">

                {projects.map((projects) => (
                    <Project 
                    title={projects.title}
                    description={projects.description}
                    image={projects.image}
                    link={projects.link}/>
                ))}
               
            </Row>
        </section>
    );
}

export default Portfolio;