import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const SingleCard2 = ({ ptitle, pdesc, pphoto, pname, pdate, pimg }) => {
  return (
    <Col sm={12} md={4}>
      <Card>
        <div className="flex">
          <Card.Img variant="top" src={pphoto} />
        </div>
        <Card.Body>
          <Card.Text>{pdesc}</Card.Text>
          <Card.Title>{ptitle}</Card.Title>
          <div className="d-flex">
            <div className="d-flex">
              <img src={pimg} width={50} height={50} alt="" />
              <div>
                <h5>{pname}</h5>
                <span>{pdate}</span>
              </div>
            </div>
            <Button variant="primary">Read more</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard2;
