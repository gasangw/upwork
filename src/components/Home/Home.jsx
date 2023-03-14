import React from "react";
import microsoftLogo from "../img/microsoft.svg";
import airbnb from "../img/airbnb.svg";
import bissell from "../img/bissell.svg";
import Glob from "../img/globe@1x.jpg";
import './home.css'

const Home = () => {
  return (
    <div className="Home-container">
      <div className="data-layout">
        <div className="text-holder mt-5">
          <h1 className="title mb-4">
            How work
            <br /> should work
          </h1>
          <p className="title-text mb-4">
            Forget the old rules. You can have the best people. Right now. Right
            here.
          </p>
          <button className="btn-success mb-5">Get started</button>
          <p className="trust">Trusted by</p>
          <div className="logo-sec">
            <img src={microsoftLogo} alt="logo" />
            <img src={airbnb} alt="logo" />
            <img src={bissell} alt="logo" />
          </div>
        </div>
        <div>
          <img src={Glob} alt="art-work" className="art-craft" />
        </div>
      </div>
    </div>
  );
};
export default Home;
