import React from "react";
import suits from "../img/suit.webp";
import { MdHeadsetMic } from 'react-icons/md';
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import skill from '../img/Skills.webp'
import './cards.css'


const Card1 = () => {
  return (
    <main className="container mt-5 mb-5">
      <div className="enter-section">
        <h5 className="pt-2">Enterprise Suite</h5>
        <h1 className="company-title pt-3 b-4">
          This is how
          <br /><span className="how">good companies <br />
          find good company.</span>
        </h1>
        <p className="fs-5">
          Access the top 1% of talent on Upwork, and a full suite of hybrid
          workforce management tools. This is how innovation works now.
        </p>
        <ul className="skill">
            <li>
                <img src={skill} alt="skill" className="icon-skill"/>
                <p className="fs-5">Access expert talent to fill your skill gaps</p>
            </li>
            <li>
                <span><BiBriefcaseAlt2 /></span>
                <p className="fs-5">Control your workflow: hire, classify and pay your talent</p>
            </li>
            <li>
            <span><MdHeadsetMic /></span>
                <p className="fs-5">Partner with Upwork for end-to-end support</p>
            </li>
        </ul>
        <button className="btn btn-info mb-5">Learn More</button>
      </div>
      <div>
        <img src={suits} alt="enterprise" className="enterprise" />
      </div>
    </main>
  );
};

export default Card1;
