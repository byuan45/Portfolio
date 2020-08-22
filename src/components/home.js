import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Email from "../icons/email.svg";
import Facebook from "../icons/facebook.svg";
import LinkedIn from "../icons/linkedin.svg";
import Instagram from "../icons/instagram.svg";
class Home extends Component {
  render() {
    return (
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <style type="text/css">
          {`
        .btn-travel {
          background-color: #2a9d8f;
          color: white;
        }
        .btn-Goals {
          background-color: #e76f51;
          color: white;
        }
        .btn-About {
          background-color: #264653;
          color: white;
        }
        .btn-Recommendations {
          background-color: #f4a261;
          color: white;
        }
        `}
        </style>
        <Row
          noGutters={false}
          style={{ height: "50vh", width: "100%", margin: 0 }}
        >
          <Col style={{ padding: 0 }}>
            <Button
              variant="travel"
              style={{ height: "100%", width: "100%", background_color: "red" }}
              href="/travel"
            >
              travel{" "}
            </Button>
          </Col>
          <Col style={{ padding: 0 }}>
            <Button
              variant="Recommendations"
              style={{ height: "100%", width: "100%" }}
              href="/recommendations"
            >
              Recommendation
            </Button>
          </Col>
        </Row>
        <Row
          noGutters={false}
          style={{ height: "50vh", width: "100%", margin: 0 }}
        >
          <Col style={{ padding: 0 }}>
            <Button
              variant="Goals"
              style={{ height: "100%", width: "100%" }}
              href="/goals"
            >
              Goals
            </Button>
          </Col>
          <Col style={{ padding: 0 }}>
            <Button
              variant="About"
              style={{ height: "100%", width: "100%" }}
              href="/aboutMe"
            >
              About
            </Button>
          </Col>
        </Row>
        <Card
          className="text-center"
          style={{
            position: "absolute",
            top: "35vh",
            right: "80vh",
            width: "400px",
          }}
        >
          <Card.Body>
            <Card.Title>Hi, I'm Brandon Yuan!</Card.Title>
            <Card.Text>
              I'm a graduating CS major at Georgia Tech. I wanted to create a
              unique portfolio to display who I am, what I want to do, and how
              I'll accomplish my goals. Thanks for checking it out!
            </Card.Text>
            <Card.Link href="#">
              {" "}
              <img style={{ height: "24px" }} src={Email} alt="Email Logo" />
            </Card.Link>
            <Card.Link href="#">
              <img
                style={{ height: "24px" }}
                src={Facebook}
                alt="Facebook Logo"
              />
            </Card.Link>
            <Card.Link href="#">
              <img
                style={{ height: "24px" }}
                src={LinkedIn}
                alt="LinkedIn Logo"
              />
            </Card.Link>
            <Card.Link href="#">
              <img
                style={{ height: "24px" }}
                src={Instagram}
                alt="Instagram Logo"
              />
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Home;
