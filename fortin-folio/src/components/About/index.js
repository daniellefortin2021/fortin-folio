import React from 'react';
import { Row, Col } from 'react-bootstrap';



function About() {
    return (
      <Row className="about">
        <div>
            <h1 id="about">About Me</h1>
            <p>With over five years of experience managing websites, developing and maintaining brands, managing social media, and developing communication strategies, I am a seasoned digital media strategist with a strong interest in working with small businesses and non-profit organizations. Based in Cleveland, OH, I am interested in helping companies and organizations build their communication plans and brands from the ground up. Outside of work I am a serial hobbyist. You can find me either rollerblading at the park, at home crocheting and watching a cheesy movie, taking my dog for a hike, or at the pottery studio.</p>
        </div>
        <Row className="skills">
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
                <p>I have experience in.....</p>
            </Col>
        </Row>
      </Row>
    
    );
  }
  
  export default About;