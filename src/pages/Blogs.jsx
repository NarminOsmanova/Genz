import React from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import SingleCard2 from "../components/SingleCard2";

const Blogs = ({ pvalue }) => {
  return (
    <Container className="my-5 blogs">
      <Row className="g-5">
        {pvalue.map((item, i) => {
          return (
            <SingleCard2
              key={i}
              ptitle={item.title}
              pdesc={item.desc}
              pphoto={item.photo}
              pdate={item.date}
              pimg={item.img}
              pname={item.name}
            />
          );
        })}
      </Row>
    </Container>
  );
};

const mapStatetoProps = (state) => {
  return {
    pvalue: state,
  };
};

export default connect(mapStatetoProps)(Blogs);
