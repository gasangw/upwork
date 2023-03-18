import React from "react";
import "./cards.css";
import { HiOutlineArrowRight } from 'react-icons/hi';

const SecondCard = () => {
  return (
    <section className="wrapper-cont">
      <h4 className="pb-5 pt-2 fs-4">For clients</h4>
      <h1 className="talent">Find talent your way</h1>
      <p className="talent-meso">
        Work with the largest network of independent professionals and get
        things done—from quick turnarounds to big transformations.
      </p>
      <div className="card-wrapper">
        <article className="cards-sector">
           <h1>Post a job<br />and hire a pro</h1>
           <p>Talent Marketplace<span>TM</span><HiOutlineArrowRight /></p>
        </article>
        <article className="cards-sector">
           <h1>Browse and<br />buy projects</h1>
           <p>Project Catalog<span>TM</span><HiOutlineArrowRight /></p>
        </article>
        <article className="cards-sector">
           <h1>Let us help you find the right talent</h1>
           <p>Talent Scout<span>TM</span><HiOutlineArrowRight /></p>
        </article>
      </div>
    </section>
  );
};

export default SecondCard;
