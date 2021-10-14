import React from 'react'
import '../Prizes/Prizes.css'
import { Container, Col, Row } from 'react-bootstrap'

export default function Prizes() {
    return (
        <div id="prizes">
            <Container className="py-5">
                <br></br>
                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="header1 text-right grad-text">Certifications</h1>
                <Row>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                        <div class="flip-card-prize">
                            <div class="flip-card-inner-prize">
                                <div class="flip-card-front-prize">
                                    <h1 className="mainhead1-prize">Technical Domain</h1>
                                </div>
                                <div class="flip-card-back-prize">
                                    <h4>
                                        <ul>
                                            <li>HackerRank: Problem Solving (Intermediate)</li><br></br>
                                            <li>Udemy Certified C++ Programmer</li><br></br>
                                            <li>HackerRank: Problem Solving (Basic)</li><br></br>
                                        </ul>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" sm className="pt-5">
                        <div class="flip-card-prize">
                            <div class="flip-card-inner-prize">
                                <div class="flip-card-front-prize">
                                    <h1 className="mainhead1-prize">Non-Tech Domain</h1>
                                </div>
                                <div class="flip-card-back-prize">
                                    <h4>
                                        <ul>
                                            <li>Participation: District Level Chess Competition</li><br></br>
                                            <li>Participation: Inter-State Volleyball Competiiton</li><br></br>
                                        </ul>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
