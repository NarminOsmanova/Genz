import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container className="contact">
        <div className="info">
          <h2>Contact Us</h2>
          <div className="main-text">
            <p>
              We are Jthemes, a creative and dedicated group of individuals who
              love web development almost as much as we love our customers. We
              are a passionate team with the mission of <br />
              achieving perfection in web design. All designs are made by love
              with pixel-perfect designand excellent coding quality. Speed,
              security, and SEO friendly are always in our minds.
            </p>
          </div>
        </div>
        <Row>
          <Col sm={12} md={3}>
            <div className="d-flex">
              <span>
                <i className="fa-solid fa-phone-volume"></i>
              </span>
              <div className="text">
                <p>(48) 654-430-309</p>
                <p>(01) 654-430-309</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="d-flex">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div className="text">
                <p>contact@genz.com</p>
                <p>sales@genz.com</p>
              </div>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <div className="d-flex">
              <span>
                <i className="fa-solid fa-paper-plane"></i>
              </span>
              <div className="text">
                <p>11567 E Broadview Dr Colorado(CO), 80117</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="contact-map">
        <Row>
          <Col sm={12}>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.1993960357!2d-0.119554!3d51.503297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1677797517503!5m2!1sen!2sus"
                width="800"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
