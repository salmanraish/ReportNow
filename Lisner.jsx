import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const crimeManuals = {
  CrimeList: [
    { id: 1, title: "Cyber Crime Awareness", image: "/cyber_awerness.webp", description: "Cybercrime includes hacking, fraud, and identity theft. Awareness, strong passwords, avoiding unknown links, and cybersecurity measures help protect data and privacy.", link: "/cyberawerness" },
    { id: 2, title: "Voilence Crime Awareness", image: "/voilence.webp", description: "Violent crime harms society; awareness, self-defense, reporting, and strong laws help prevent assault, robbery, and domestic violence for safer communities.", link: "#" },
    { id: 3, title: "Economic Crime Awareness", image: "/economic_awerness.webp", description: "Economic crime, like fraud and corruption, harms businesses and society. Awareness, strict laws, and ethical practices help prevent financial losses and corruption.", link: "#" },
    { id: 4, title: "Personal Crimes Awareness", image: "personal_awerness.webp", description: "Personal crimes like assault, theft, and harassment harm individuals. Awareness, self-defense, reporting incidents, and strong laws help ensure safety and justice.", link: "#" }
  ]
};

const CrimeManualGrid = ({ title, manuals }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleIndexes((prevIndexes) =>
              prevIndexes.includes(index) ? prevIndexes : [...prevIndexes, index]
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {manuals.map((manual, index) => (
          <div
            key={manual.id}
            data-index={index}
            ref={(el) => (elementsRef.current[index] = el)}
            className={`manual-card rounded-lg shadow-lg overflow-hidden transform transition-all duration-700 
              ${visibleIndexes.includes(String(index)) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
              hover:translate-y-[-20px] hover:shadow-xl flex flex-col items-center justify-center text-center p-4`}
              style={{ 
                transitionDelay: `${index * 150}ms`, 
                background: '#E8EAFC' 
              }}              
          >
            <img
              src={manual.image}
              alt={manual.title}
              className="w-full h-48 object-fill"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-b font-semibold mb-2 text-black">{manual.title}</h2>
              <p className="text-black mb-4 text-justify">{manual.description}</p>
              <Link
                to={manual.link}
                className="inline-block text-black rounded-md transition-colors relative group font-semibold"
              >
                Read More
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <p className="sm:text-1xl md:text-2xl font-bold text-center text-gray-600 my-2">Crime Awareness & Safety</p>
      <CrimeManualGrid manuals={crimeManuals.CrimeList} />
    </div>
  );
};

export default App;
