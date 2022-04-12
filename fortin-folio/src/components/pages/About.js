import React from 'react';
import { Row, Col } from 'react-bootstrap';



function About() {
    return (
        <div>
            <div className ="header">
                <h2>About Me</h2>
                <p>With over five years of experience managing websites, developing and maintaining brands, managing social media, and developing communication strategies, I am a seasoned digital media strategist with a strong interest in working with small businesses and non-profit organizations. Based in Cleveland, OH, I am interested in helping companies and organizations build their communication plans and brands from the ground up. Outside of work I am a serial hobbyist. You can find me either rollerblading at the park, at home crocheting and watching a cheesy movie, taking my dog for a hike, or at the pottery studio.</p>
            </div>
            <div>
                <Row className="skills flex-row">
                    <Col>
                        <h3>Web Design</h3>
                        <p>I have over 5 years of experience managaing websites and one year of experience designing and developing websites for international non-profit organizations.</p>
                    </Col>
                    <Col>
                        <h3>Digital Media</h3>
                        <p>I am an experienced digital media strategist with a strong eye and interest in analytics and strategic communications.</p>
                    </Col>
                    <Col>
                        <h3>Brand Management</h3>
                        <p>I have a strong eye in design and brand management across multiple platforms for international audiences.</p>
                    </Col>
                </Row>

            </div>
            
        </div>
    
    );
  }
  
  export default About;