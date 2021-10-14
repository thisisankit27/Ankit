import React from 'react'
import '../Tale/Tale.css'
import irctc from '../../images/irctc.png'
import { Container, Row, Col } from 'react-bootstrap'

export default function Tale() {
    return (
        <div className="tale" id="tale">
            <Container className="pt-5">
                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="header1 text-right grad-text">My Inspiration</h1>
                <Row>
                    <Col data-aos="fade-up" data-aos-duration="1000" md data-aos-easing="ease-in-sine">
                        <img className="daed-img" src={irctc} alt="daed-img" />
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="1000" md data-aos-easing="ease-in-sine">
                        <h3 className="text-left para" id="tale">
                            Out of sheer curiosity, I created this IRCTC clone in 7th grade using just HTML! It was well received by both my teachers and my colleagues.
                            However, one of my classmate pointed out that it couldn't handle login and booking operations, which provided me the boost I needed to pursue a career in Full Stack Web Development!
                        </h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
