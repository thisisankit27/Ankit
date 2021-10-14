import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../Community/community.css'
import mcd from '../../images/mcdonald.gif'
import mce from '../../images/MakeCareerEasy.gif'
import dice from '../../images/dice.gif'
import careerchela from '../../images/careerchela.gif'
import website from '../../images/website.gif'

export default function Community() {
    return (
        <div id="cp">
            <Container className="py-5 cp" style={{ fontFamily: 'Poppins' }}>
                <br></br>
                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="grad-header text-right grad-text">Projects Worked On</h1>

                <Row className="my-5">
                    <Col><a rel="noreferrer" href="https://thisisankit27.github.io/MCDonald/" target="_blank" ><img id="comlogo" className="com-logo" src={mcd} alt="mcdonald clone site" /></a><h4>McDonalds Clone</h4></Col>
                    <Col><a rel="noreferrer" href="http://makecareereasy.herokuapp.com/" target="_blank" ><img id="comlogo" className="com-logo" src={mce} alt="mcdonald clone site" /></a><h4>Make Career Easy</h4></Col>
                    <Col><a rel="noreferrer" href="https://thisisankit27.github.io/DiceRoll/" target="_blank" ><img id="comlogo" className="com-logo" src={dice} alt="mcdonald clone site" /></a><h4>Dice Game</h4></Col>
                </Row>
                <Row className="my-5">
                    <Col><a rel="noreferrer" href="https://thisisankit27.github.io/CareerChela/" target="_blank" ><img id="comlogo" className="com-logo" src={careerchela} alt="mcdonald clone site" /></a><h4>CareerChela Bootstrap</h4></Col>
                    <Col><a rel="noreferrer" href="https://thisisankit27.github.io/CareerChela/" target="_blank" ><img id="comlogo" className="com-logo" src={website} alt="mcdonald clone site" /></a><h4>First Portfolio</h4></Col>
                </Row>
                {/* <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="grad-text">Interested?</h1>
                <Button variant="light" size="xxl" className="m-2" style={{ fontFamily: 'Poppins' }} href="#" target="__blank">
                    Contact Us
                </Button> */}
            </Container>
        </div>
    )
}
