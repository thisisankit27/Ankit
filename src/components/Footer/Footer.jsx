import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { SocialIcon } from 'react-social-icons';
import bg from '../../images/bggif.gif'
import ankit from '../../images/ankit.jpg'
import '../Footer/footer.css'

export default function Footer() {
  return (

    <div className="footer" id="footer" class="bg_image"
      style={{
        backgroundImage: 'url(' + bg + ')',
        height: "100%",
        color: "#f5f5f5",
      }}>
      <h1 className="grad-text">Contact Me</h1>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="2">
              <img id="comlogo" className="com-logo" src={ankit} alt="ankit pic" />
            </MDBCol>
            <MDBCol md="6">
              <h3 className="title">Ankit Srivastava</h3>
              <p style={{ fontFamily: 'DM Sans' }}>
                People also know me by my YouTube channel <em>Code Decipher.</em><br></br>
                Feel free to contact me if you are seeking Freelancer, Sponsorship, Collaboration etc.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <h3 className="title">Connect with us at: </h3>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between", width: '75%', margin: '0 auto' }}>
                <SocialIcon url="mailto:thisisankitsrivastava@gmail.com" />
                <SocialIcon url="https://www.linkedin.com/in/thisisankitsrivastava/" target="_blank" />
                <SocialIcon url="https://www.instagram.com/_codedecipher/" target="_blank" />
                <SocialIcon url="https://twitter.com/_codedecipher" target="_blank" />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3" id="copyright" style={{ backgroundColor: 'black', fontFamily: 'DM Sans' }}>
          <MDBContainer fluid style={{ color: 'white' }}>
            <MDBRow className="mdb-col">
              <MDBCol>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://www.instagram.com/_codedecipher/" target="__blank"> Code Decipher </a>
              </MDBCol>
              {/* <MDBCol>
                Sincerely grateful of<a href="https://www.instagram.com/aditipattnaikkk/" target="__blank"> Aditi Pattnaik </a> for Graphics.
              </MDBCol> */}
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBFooter>

    </div>
  );
}
