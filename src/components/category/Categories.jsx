import React from "react";
import data from "./categoryData";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import './category.css'

const Categories = () => {
  return (
    <main className="main-wrapper mt-5">
        <h1>Browse talent by category</h1>
        <p className="link-browser">Looking for work? <a href="https://www.upwork.com/nx/jobs/search/?sort=recency">Browse jobs</a></p>
    <div className="main-card">
      {data.map((value) => {
        return (
          <Card key={value.title} className="each-card">
            <h4>{value.title}</h4>
            <div className="star-skills">
              <p>
                <AiFillStar className="star"/>
                 {value.rating}
              </p>
              <p>{value.skills} skills</p>
            </div>
          </Card>
        );
      })}
    </div>
    </main>
  );
};

export default Categories;
