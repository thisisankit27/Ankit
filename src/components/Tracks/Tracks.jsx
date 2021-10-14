import React from 'react'
import { Container } from 'react-bootstrap'
import '../Tracks/Tracks.css'
import itirenary from '../../images/ITINERARY_10.png'


export default function Tracks() {
    return (
        <div id="tracks">
            <Container className="py-5">
                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-sine" className="headeriti text-right pt-5 grad-text">My Work Experience</h1>

                <img src={itirenary} width="100%" alt="ankit career experience" />
            </Container>
        </div>
    )
}
