import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! My name is <span className="purple"> Dinh Duc Khoi </span>
            from <span className="purple"> Hanoi, Viet Nam.</span> but I'm living in <span className="purple"> Toulouse, France.</span>
            <br />
            I am presently pursuing the continuation of studies for an engineering degree in <span className="purple"> Automation </span> from<span className="purple"> Université Toulouse 3 - Paul Sabatier</span>
            <br />
          </p>
          <footer className="blockquote-footer">Duc Khoi Dinh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
