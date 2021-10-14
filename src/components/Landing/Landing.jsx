import React from 'react'
import '../Landing/Landing.css'
import { Button } from 'react-bootstrap'
import github from '../../images/github.png'
import { SocialIcon } from 'react-social-icons';
import ParticleBackground from '../ParticleBackground/ParticleBackground'

export default function Landing() {
    return (

        <div className="landing" id="home">
            <ParticleBackground />
            <style type="text/css">
                {`
                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
            </style>
            <h3 data-aos="fade-up" data-aos-duration="1000" className="topline" style={{ fontFamily: 'Poppins' }}>I am a Web Developer</h3>
            <h1 data-aos="fade-up" data-aos-duration="1000" className="mainhead">Ankit Srivastava</h1>
            <h3 data-aos="fade-up" data-aos-duration="1000" className="date" style={{ fontFamily: 'Poppins' }}>I edit text files for a living!</h3>

            <div className="my-4">
                <Button data-aos="fade-right" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{ fontFamily: 'Poppins' }} href="https://github.com/thisisankit27/" target="__blank">
                    <img src={github} style={{ maxHeight: '30px' }} alt={"github img"} />{' '}GitHub
                </Button>{' '}
                <Button data-aos="fade-left" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{ fontFamily: 'Poppins' }} href="https://www.youtube.com/codedecipher" target="__blank"   >
                    <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" style={{ maxHeight: '30px' }} alt={"discord img"} />{' '}YouTube
                </Button>
                <Button data-aos="fade-left" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{ fontFamily: 'Poppins' }} href="https://www.instagram.com/_codedecipher/" target="__blank"   >
                    <SocialIcon style={{ maxHeight: '30px' }} url="https://www.linkedin.com/in/thisisankitsrivastava/" target="_blank" />LinkedIn
                </Button>
                {/* <div>
                    <Button data-aos="fade-left" data-aos-duration="500" variant="outline-light" size="xxl" className="btn m-2" style={{ fontFamily: 'Poppins' }} href="#" target="__blank"   >
                        <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" style={{ maxHeight: '30px' }} alt={"youtube live img"} />{' '}Live Now
                    </Button>
                </div> */}
            </div>
        </div>

    )
}