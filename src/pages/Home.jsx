import { useState, useEffect } from "react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SingleCard from "../components/SingleCard";
import image from "../data/data";
import Blogs from "./Blogs";

const Home = () => {
  const [text, setText] = useState("I am developer");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (prevText.length === 4) {
          clearInterval(intervalId);
          return "I am Brian Clark";
        }
        return prevText.slice(0, -1);
      });
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <Container className="home my-5 pt-5">
        <Row>
          <Col sm={12} md={10}>
            <Row>
              <Col sm={12} lg={6}>
                <div className="desc">
                  <h6>Hello Everyone!</h6>
                  <h1>
                    {text}
                    {/* I’m <span>Developer</span> */}
                  </h1>
                  <p>
                    I use animation as a third dimension by which to simplify
                    experiences and kuiding thro each and every interaction. I’m
                    not adding motion just to spruce things up, but doing it in
                    ways that.
                  </p>
                  <div className="form">
                    <input
                      type="email"
                      placeholder="Type your email address"
                      name=""
                      id=""
                    />
                    <Button type="submit" variant="info text-white">
                      Subscribe{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <div className="d-flex">
                  <div className="animation1">
                    <div className="pattern2">
                      <img
                        src="https://jthemes.net/themes/wp/genz/wp-content/themes/genz/assets/imgs/template/pattern-2.svg"
                        alt=""
                      />
                    </div>
                    <div className="pattern3">
                      <img
                        src="https://jthemes.net/themes/wp/genz/wp-content/themes/genz/assets/imgs/template/pattern-3.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <img
                    src="https://jthemes.net/themes/wp/genz/wp-content/themes/genz/assets/imgs/page/homepage1/banner.png"
                    alt=""
                  />
                  <div className="animation2">
                    <div className="pattern1">
                      <img
                        src="https://jthemes.net/themes/wp/genz/wp-content/themes/genz/assets/imgs/template/pattern-1.svg"
                        alt=""
                      />
                    </div>
                    <div className="pattern4">
                      <img
                        src="https://jthemes.net/themes/wp/genz/wp-content/themes/genz/assets/imgs/template/pattern-4.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="topic">
        <Row>
          <Col md={10}>
            <Row className="border">
              <Col md={2}>
                <div className="info">
                  <h4>Hot topics</h4>
                  <p>
                    Don't miss out on the latest news about Travel tips, Hotels
                    review, Food guide...
                  </p>
                  <button>
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </Col>

              {image.map((fd) => (
                <SingleCard
                  key={fd.id}
                  title={fd.title}
                  image={fd.img}
                  article={fd.article}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      {<Blogs />}
    </>
  );
};

export default Home;
