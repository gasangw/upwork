import React from "react";
import "./cards.css";
import { Card } from "react-bootstrap";
import { HiOutlineArrowRight } from 'react-icons/hi';

const SecondCard = () => {
  return (
    <section className="wrapper-cont">
      <h4>For clients</h4>
      <h1>Find talent your way</h1>
      <p>
        Work with the largest network of independent professionals and get
        things done—from quick turnarounds to big transformations.
      </p>
      <div className="card-wrapper">
        <Card>
           <h1>Post a job<br />and hire a pro</h1>
           <p>Talent Marketplace<span>TM</span><HiOutlineArrowRight /></p>
        </Card>
        <Card>
           <h1>Browse and<br />buy projects</h1>
           <p>Project Catalog<span>TM</span><HiOutlineArrowRight /></p>
        </Card>
        <Card>
           <h1>Let us help you find the right talent</h1>
           <p>Talent Scout<span>TM</span><HiOutlineArrowRight /></p>
        </Card>
      </div>
    </section>
  );
};

export default SecondCard;
