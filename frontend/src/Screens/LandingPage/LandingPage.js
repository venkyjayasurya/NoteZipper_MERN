import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";

const landingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Welcome to Note Zipper</h1>
            <p className="subtitle">One safe place for all your notes</p>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingButton">Login</Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingButton" variant="outline-primary">SignUp</Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default landingPage;
