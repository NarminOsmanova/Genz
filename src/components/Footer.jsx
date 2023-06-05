import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="container footer my-4">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <img
            src="https://jthemes.net/themes/wp/genz/wp-content/themes/genz/assets/imgs/template/logo.svg"
            alt=""
            width={116}
            height={36}
          />
          <p>
            When an unknown prnoto sans took a galley and scrambled it to make
            specimen book not only five When an unknown prnoto sans took a
            galley and scrambled it to five centurie.
          </p>
          <h5>Address</h5>
          <p>
            123 Main Street <br /> New York, NY 10001
          </p>
        </div>
        <div className="col-sm-12 col-md-4">
          <h4>Categories</h4>
          <div className="d-flex">
            <ul>
              <li>Design</li>
              <li>Healthy</li>
              <li>Interviews</li>
              <li>Lifestyle</li>
              <li>Movie</li>
            </ul>
            <ul>
              <li>Sports</li>
              <li>Technology</li>
              <li>Travel Tips</li>
              <li>Music</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <h4>Newsletter</h4>
          <div className="form position-relative">
            <label htmlFor="">
              <span>
                <i className="fa-regular fa-user"></i>
              </span>
            </label>
            <input type="text" placeholder="Enter your name here" /> <br />
            <label htmlFor="">
              <span>
                <i className="fa-regular fa-envelope"></i>
              </span>
            </label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email here"
            />{" "}
            <br />
            <Button variant="info text-white">
              Subscribe{" "}
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="row pt-5 pb-4">
        <div className="col-sm-12 col-md-6 d-flex justify-content-start">
          <p>
            {" "}
            &copy; 2023 Created by <a href="/">Jthemes.com</a>
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="icon">
            <span>
              {" "}
              <i className="fa-brands fa-facebook"></i> Facebook
            </span>
            <span>
              <i className="fa-brands fa-linkedin"></i> Linkedin
            </span>
            <span>
              <i className="fa-brands fa-twitter"></i> Twitter
            </span>
            <span>
              <i className="fa-brands fa-instagram"></i> Instagram
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
