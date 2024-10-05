import React from "react";
import Fullstack from "../assets/fullstack.png"
import Mobile from "../assets/m-appdeveloper.png"
import Manager from "../assets/projectmanager.png"
import Analyst from "../assets/banalyst.png"

const Cards = [
  {
    icon: Fullstack,
    title: "Full-stack Development",
    description:
      "Learn to build complete web applications by mastering HTML and CSS for responsive design, React for dynamic user interfaces, and Java with Spring Boot for robust back-end services",
  },
  {
    icon: Mobile,
    title: "Mobile Development",
    description:
      "Explore the world of mobile app development using Flutter.Learn to create beautiful, natively compiled applications for iOS and Android from a single codebase",
  },
  {
    icon: Manager,
    title: "Project Management",
    description:
      "Gain essential skills in managing projects effectively using Agile and Scrum methodologies",
  },
  {
    icon: Analyst,
    title: "Business Analysis",
    description:
      "Develop the skills to identify business needs and create effective solutions",
  },
];
const Curriculum = () => {
  return (
    <>
    <div className="course-head">
      < h1 >Our curriculum</h1>
       </div>
      <div className="courses">
        {Cards.map((card, index) => {
          return(
          <div key={index} className="card">
            {card.icon && <img src={card.icon} alt={card.title} className="Card-icon" />}
            <div className="course-content">
            <h1>{card.title}</h1>
            <p >{card.description}</p>
            </div>
            <div className="button-container">
            <button className="course-btn">Learn More</button>
            </div>
          </div>
          );
        })}
      </div>
    </>
  );
};

export default Curriculum;
