import React from "react";
import "./new.css";

const CircularProgress = ({ percentage, skill }) => {
  const radius = 70; // Radius of the circle
  const stroke = 10; // Stroke width
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress-container">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="circular-progress"
      >
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#4caf50"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
        />
      </svg>
      <div className="progress-label">
        <span>{skill}</span>
        <strong>{percentage}%</strong>
      </div>
    </div>
  );
};

export default CircularProgress;

