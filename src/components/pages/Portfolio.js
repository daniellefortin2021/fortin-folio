import React from 'react';
import Project from '../Projects';

import { Row } from 'react-bootstrap';

import jsiImage from '../../images/JSI-home-page.jpeg';
import fetchImage from "../../images/fetch-homepage.png";
import boredImage from '../../images/bored-af.jpeg';
import bantwanaImage from '../../images/bantwana-home-page.jpeg';
import empoweredImage from '../../images/empowered-home-page.jpeg';
import curbAlertImage from '../../images/curb-alert-screenshot.png';

function Portfolio (props) {

    const projects = [
        {
            title: 'JSI',
            description: 'website and social media manager | 2019 - current',
            link: 'https://jsi.com',
            image: jsiImage
        },
        {
            title: 'Curb Alert',
            description: 'website and brand design',
            link: 'https://powerful-basin-06230.herokuapp.com/',
            image: curbAlertImage
        },
        {
            title: 'Fetch',
            description: 'website and brand design',
            link: 'https://intense-crag-43217.herokuapp.com/',
            image: fetchImage
        },
        {
            title: 'BoredAF',
            description: 'website and brand design',
            link: 'https://zsvoboda87.github.io/Bored-AF/',
            image: boredImage
        },
        {
            title: 'Bantwana Initiative',
            description: 'strategic communications and web management',
            link: 'www.bantwana.org',
            image: bantwanaImage
        },
        {
            title: 'Empowered to Educate',
            description: 'brand and website design',
            link: 'https://www.empoweredtoeducate.org/',
            image: empoweredImage
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