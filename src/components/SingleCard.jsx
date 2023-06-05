import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleCard = ({ title, article, image }) => {
  return (
    <Col md={2}>
      <Card>
        <Card.Img variant="top" src={image} width={129} height={190} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{article}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
