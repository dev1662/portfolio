import React from 'react';
import "./style.css";

const ScoreIndicator = ({ score }) => {
  const totalCircles = 10;

  return (
    <div className="circle-container">
      {Array.from({ length: totalCircles }, (_, index) => (
        <div
          key={index}
          className={`circle ${index < score ? 'filled' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default ScoreIndicator;
