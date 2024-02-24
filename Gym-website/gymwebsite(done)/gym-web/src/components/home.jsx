import React from 'react';
import "./home.css";
import HomeAdds from './home2';


export const Detailbox = [
  {
    name: "Progression",
    icon: "fa-regular fa-clock",
    details: "Our team will help you achieve your dream body as quickly as you possible can. We want to see you reach your full potential as quickly as possible."
  },
  {
    name: "Workout",
    icon: "fa-solid fa-dumbbell",
    details: "With a variety of workouts to choose from, you will be able to pick the type of workout that suits you the most in order to make every gym session as comfortable as possible."
  },
  {
    name: "Nutrition",
    icon: "fa-solid fa-bowl-food",
    details: "Our team will work with you to find a suitable nutrition plan in order to get you in good shape more efficiently and help you reach your health goals."
  }
];

const GymBoxes = ({ name, icon, details }) => {
  return (
    <div className="box-container">
      <div className="gymbox">
        <div className="gym-icons">
          <i className={` ${icon}`} />
        </div>
        <div className="gym-content">
          <h3>{name}</h3>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

const DetailBoxes = () => {
  return (
    <>
    <div className="detail-boxes">
      {Detailbox.map((detail, index) => (
        <GymBoxes
          key={index}
          name={detail.name}
          icon={detail.icon}
          details={detail.details}
        />
      ))}
    </div>
    <HomeAdds/>
    </>
  );
};

export default DetailBoxes;
