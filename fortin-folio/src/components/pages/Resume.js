import React from 'react';
import { Row, Col } from 'react-bootstrap';


function Resume() {
    return (
        <section>
            <div className="resume-header">
                <h2>Resume</h2>
            </div>
            <div>
                <Row className="resume">
                    <Col sm={3}>
                    <h4>Website and Social Media Manager</h4>
                    <h5><a id="resume-link" href="www.jsi.com">JSI</a></h5>
                    <p>2019 - current</p>
                    </Col>
                    <Col sm={9}>
                    <div>
                        <ul>
                            <li>Oversee and manage JSI’s online presence from website content to social media communities including content creation, promotion, and tracking analytics.</li>
                        </ul>
                        <ul>
                            <li>Oversee and manage JSI’s online presence from website content to social media communities including content creation, promotion, and tracking analytics.</li>
                        </ul>
                        <ul>
                            <li>Manage inquiries and issues submitted by staff pertaining to the website and collaborate with the web services team to resolve outstanding issues and incorporate new changes and updates to the website.
                            </li>
                        </ul>
                        <ul>
                            <li>
                            Lead the development of and implement the corporate social media strategy that effectively positions JSI and supports the organization’s corporate communication goals.
                            </li>
                        </ul>
                        <ul>
                            <li>
                            Drive results-oriented online reporting, developing systems to report back to JSI teams, domestically and internationally, on the effectiveness of their external communications, and approaches to strengthen future outreach.
                            </li>
                        </ul>
                        <ul>
                            <li>
                            Support technical teams, strategic business groups, and centers to refine the content they provide and develop compelling campaigns, tracking their online marketing strategies specific to their needs.
                            </li>
                        </ul>
                    </div>
                    </Col>
                </Row>
            </div>
            <div>
                <Row className="resume">
                    <Col sm={3}>
                    <h4>Strategic Communications Associate</h4>
                    <h5><a id="resume-link" href="www.worlded.org">World Education</a></h5>
                    <p>2017 - 2019</p>
                    </Col>
                    <Col sm={9}>
                    <div>
                        <ul>
                            <li>Developed and distributed communication materials including website content and other publicly-facing materials.</li>
                        </ul>
                        <ul>
                            <li>Coordinated, and supported the development and implementation of strategic communications plans for the initiative and its individual country teams.</li>
                        </ul>
                        <ul>
                            <li>Traveled to Malawi to assist in starting up a new office in the country by supporting the hiring process for local staff, leading orientation for new staff, working with a local consultant to ensure proper registration in the country, working with the Team Lead on finalizing the program's budget, and liaising with a prime to sign a cooperative agreement.
                            </li>
                        </ul>
                    </div>
                    </Col>
                </Row>
            </div>
            <div>
                <Row className="resume">
                    <Col sm={3}>
                    <h4>International Coordinator</h4>
                    <h5><a id="resume-link" href="reachforuganda.org">REACH for Uganda</a></h5>
                    <p>2015 - 2017</p>
                    </Col>
                    <Col sm={9}>
                    <div>
                        <ul>
                            <li>Prepared and oriented over 50 volunteers before their arrival and provided project assistance while they were on site.</li>
                        </ul>
                        <ul>
                            <li>Managed all social media and website accounts and helped increase Facebook follower engagement by 42%.</li>
                        </ul>
                        <ul>
                            <li>Designed and implemented two leadership trainings for 10 older secondary students to become mentors and administer educational sessions to over 100 of their younger peers.
                            </li>
                        </ul>
                    </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Resume;