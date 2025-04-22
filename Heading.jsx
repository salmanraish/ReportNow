import React, { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Heading() {
  const [position, setPosition] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false); // New state for click effect

  useEffect(() => {
    if (isHovered) return; // Pause animation on hover

    let interval;
    if (position > -1900) {
      interval = setInterval(() => {
        setPosition((prev) => prev - 2);
      }, 20);
    } else {
      setTimeout(() => {
        setPosition(window.innerWidth);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [position, isHovered]);

  // Function to apply effect when any link is clicked
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000); // Reset after 1 second
  };

  return (
    <div className="header-container md:mt-15 heading">
      <div className="marquee-container">
        <div
          className="marquee"
          style={{ transform: `translateX(${position}px)` }}
        >
          {[...Array(5)].map((_, index) => (
            <Link
              key={index}
              to="/media/uk_police/static/upload_file/fact_pdf_Bio_Data.pdf"
              className={`link-item ${clicked ? "clicked-effect" : ""}`}
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="blinker">New</span> Crime Report Karein, Suraksha Payein! 
              {index !== 4 && <span className="ml-5">|</span>}
            </Link>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style>
        {`
          @keyframes blinker {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }

          .header-container {
            background-color: #F8F9FA;
            padding: 10px;
            width: 100%;
            position: relative;
          }

          .marquee-container {
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
          }

          .marquee {
            display: flex;
            flex-wrap: nowrap;
            position: relative;
          }

          .link-item {
            display: inline-block;
            margin-right: 20px;
            vertical-align: middle;
            color: #FF0000;
            transition: all 0.3s ease;
          }

          .blinker {
            margin: 0 10px;
            animation: blinker 1s linear infinite;
            animation-delay: 2s;
          }
        `}
      </style>
    </div>
  );
}
