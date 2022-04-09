import React from 'react';

import{ Col, Card } from 'react-bootstrap'

function Project (props) {

    return (
        <Col className="card-col">
    
            <Card id="card-custom" >
            <a href={`${props.link}`}>
                <Card.Img variant="top" src={`${props.image}`} alt={`${props.title} homepage image`}/>
            </a>
                <div id="card-text">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                </div>
                
            </Card>
            
        </Col>
    )
}

export default Project;