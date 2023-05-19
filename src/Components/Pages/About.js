import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div style={{backgroundColor:'#4a5a69',marginTop:'-5%'}}>
      <div style={{ textAlign: "center", marginTop: "3rem",paddingTop:'2rem' }}>
        <h2 style={{color:'darkcyan'}}>ABOUT US PAGE</h2>
        <p style={{color:'white'}}>
          A band party is a fun and exciting event that brings people together
          to enjoy live music and entertainment. Whether it's a small gathering
          in someone's backyard or a large festival in a public space, a band
          party is a great way to socialize and unwind while enjoying the
          talents of musicians and performers.
        </p>
        <br></br>
        <p style={{color:'white'}}>
          If you're planning a band party, it's important to consider the
          logistics of the event, such as finding a suitable venue, booking the
          bands, and ensuring that there is enough space and facilities for
          attendees. With proper planning and organization, a band party can be
          a memorable and enjoyable experience for everyone involved.
        </p>
      </div>
      <footer className="bg-dark text-light">
        <Container>
          <Row>
            <Col>
              <FontAwesomeIcon icon={faHome} />
              <span>123 Street, City, Country</span>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>example@example.com</span>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faPhone} />
              <span>+1 123 456 7890</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default About;
