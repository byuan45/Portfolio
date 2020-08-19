import React from "react";
import "./App.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
function App() {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <Row
        noGutters={false}
        style={{ height: "50vh", width: "100%", margin: 0 }}
      >
        <Col style={{ padding: 0 }}>
          <Button variant="primary" style={{ height: "100%", width: "100%" }}>
            Travel
          </Button>
        </Col>
        <Col style={{ padding: 0 }}>
          <Button variant="secondary" style={{ height: "100%", width: "100%" }}>
            Recommendation
          </Button>
        </Col>
      </Row>
      <Row
        noGutters={false}
        style={{ height: "50vh", width: "100%", margin: 0 }}
      >
        <Col style={{ padding: 0 }}>
          <Button variant="success" style={{ height: "100%", width: "100%" }}>
            Goals
          </Button>
        </Col>
        <Col style={{ padding: 0 }}>
          <Button variant="danger" style={{ height: "100%", width: "100%" }}>
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
            I'll accomplish my goals
          </Card.Text>
          <Card.Link href="#">Insta</Card.Link>
          <Card.Link href="#">LinkedIn</Card.Link>
          <Card.Link href="#">FB</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
