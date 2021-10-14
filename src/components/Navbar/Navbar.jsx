import React from 'react'
import '../Navbar/navbar.css'
import ankit from '../../images/ankit.jpg'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavBar() {
    return (
        <div>
            <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark" fixed="top">
                <Navbar.Brand href="/">
                    <img
                        src={ankit}
                        width="70"
                        height="70"
                        className="d-inline-block align-top md:ml-5"
                        alt="Ankit   pic"
                    />{' '}
                </Navbar.Brand>

                <Navbar.Brand className="nav-name" href="/">
                    <span style={{ fontSize: '36px', fontFamily: 'poppins' }} className="grad-text">Code Decipher</span>
                </Navbar.Brand>
                <Navbar.Toggle className="toggler" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
                    <Nav className="ml-auto" style={{ fontFamily: 'Poppins' }}>
                        <Nav.Link className="nav-toggles" href="/#tale">Inspiration</Nav.Link>
                        <Nav.Link className="nav-toggles" href="/#tracks">Experience</Nav.Link>
                        <Nav.Link className="nav-toggles" href="/#cp">Projects</Nav.Link>
                        <Nav.Link className="nav-toggles" href="/#prizes">Skills</Nav.Link>
                        <Nav.Link className="nav-toggles" href="/#footer">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
