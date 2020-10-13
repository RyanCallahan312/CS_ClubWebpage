import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Image, Row, Col } from "react-bootstrap";
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <Row>
        <Col className="col-md-3">
          <Image src="/img&vid/BearGrid-2.png" />
        </Col>
        <form
          className="container"
          action="/action_page.php"
          onSubmit={sendEmail}
        >
          <input type="hidden" name="contact_number" />
          <h1>Contact Us</h1>

          <Row>
            <Col className="col-md-6 col-sm-6">
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </Col>
            <Col className="col-md-6 col-sm-6">
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </Col>
            <Col className="col-md-6 col-sm-6">
              <label for="Email">Email</label>
              <input
                id="Email"
                className="text-input"
                type="text"
                placeholder="Email"
                name="user_email"
              />
            </Col>

            <Col className="col-md-6 col-sm-6">
              <label for="Subject">Subject</label>
              <input
                id="Subject"
                type="text"
                placeholder="Subject"
                name="subject"
              />
            </Col>
            <Col className="col-md-12 col-sm-6">
              <label>Message</label>

              <textarea name="message" placeholder="What's on your mind?" />
            </Col>
            <Col className="col-md-12 col-sm-6">
              <button type="submit">Send Me</button>
            </Col>
          </Row>
        </form>
      </Row>
    </div>
  );
}
