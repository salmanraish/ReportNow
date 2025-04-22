import React, { useState, useEffect, useRef } from "react";

const blogs1 = [ 
  { id: 1, title: "Murder", image: "/murder.webp", link: "#", initialBg: "bg-[#F5F5f9]", hoverBg: "hover:bg-[#8B0000]", initialText: "text-gray-700", hoverText: "group-hover:text-white" },
  { id: 2, title: "Dacoity & Robbery", image: "/robbery.webp", link: "#", initialBg: "bg-[#0A192F]", hoverBg: "hover:bg-[#1E3A8A]", initialText: "text-white", hoverText: "group-hover:text-white" },
  { id: 3, title: "Sexual Crimes", image: "/sexual.webp", link: "#", initialBg: "bg-[#3B5975]", hoverBg: "hover:bg-[#B22222]", initialText: "text-white", hoverText: "group-hover:text-white" },
  { id: 4, title: "Kidnapping & Abduction", image: "/kidneping.webp", link: "#", initialBg: "bg-[#ECECEC]", hoverBg: "hover:bg-[#333333]", initialText: "text-gray-700", hoverText: "group-hover:text-white" }
];

const blogs2 = [ 
  { id: 1, title: "Financial Fraud", image: "https://cybercrime.gov.in/images/othercybercrime.jpg", link: "#", initialBg: "bg-[#F5F5f9]", hoverBg: "hover:bg-[#8B0000]", initialText: "text-gray-700", hoverText: "group-hover:text-white" },
  { id: 2, title: "Cyber Bullying", image: "/bullying.jpg", link: "#", initialBg: "bg-[#0A192F]", hoverBg: "hover:bg-[#1E3A8A]", initialText: "text-white", hoverText: "group-hover:text-white" },
  { id: 3, title: "Identity Theft", image: "https://cybercrime.gov.in/images/Data_security_24.jpg", link: "#", initialBg: "bg-[#3B5975]", hoverBg: "hover:bg-[#B22222]", initialText: "text-white", hoverText: "group-hover:text-white" },
  { id: 4, title: "Ransomware Attacks", image: "/Rensomware.jpg", link: "#", initialBg: "bg-[#ECECEC]", hoverBg: "hover:bg-[#333333]", initialText: "text-gray-700", hoverText: "group-hover:text-white" }
];

const blogs4 = [ 
  { id: 1, title: "Money Laundering", image: "/money.jpeg", link: "#", initialBg: "bg-[#EAEDED]", hoverBg: "hover:bg-[#117A65]", initialText: "text-gray-700", hoverText: "group-hover:text-white" },
  { id: 2, title: "Bank Fraud", image: "/bank.jpeg", link: "#", initialBg: "bg-[#1B2631]", hoverBg: "hover:bg-[#F1C40F]", initialText: "text-white", hoverText: "group-hover:text-white" },
  { id: 3, title: "Tax Evasion", image: "tax.jpeg", link: "#", initialBg: "bg-[#5D6D7E]", hoverBg: "hover:bg-[#D35400]", initialText: "text-white", hoverText: "group-hover:text-white" },
  { id: 4, title: "Ponzi Schemes", image: "ponzi.jpeg", link: "#", initialBg: "bg-[#EAECEE]", hoverBg: "hover:bg-[#7B241C]", initialText: "text-gray-700", hoverText: "group-hover:text-white" }
];

const blogs5 = [ 
  { id: 1, title: "Domestic Violence", image: "/domestic.jpeg", link: "#", initialBg: "bg-[#FDEDEC]", hoverBg: "hover:bg-[#CB4335]", initialText: "text-gray-700", hoverText: "group-hover:text-white" },
  { id: 2, title: "Human Trafficking", image: "/human.jpeg", link: "#", initialBg: "bg-[#17202A]", hoverBg: "hover:bg-[#AF7AC5]", initialText: "text-white", hoverText: "group-hover:text-white" },
  { id: 3, title: "Child Abuse", image: "/child.webp", link: "#", initialBg: "bg-[#5D6D7E]", hoverBg: "hover:bg-[#F39C12]", initialText: "text-white", hoverText: "group-hover:text-white" },
  { id: 4, title: "Sexual Harassment", image: "/heresment.jpeg", link: "#", initialBg: "bg-[#EAECEE]", hoverBg: "hover:bg-[#9B59B6]", initialText: "text-gray-700", hoverText: "group-hover:text-white" }
];
const BlogGrid = ({ title, blogs }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIndexes((prevIndexes) =>
              prevIndexes.includes(entry.target.dataset.index) ? prevIndexes : [...prevIndexes, entry.target.dataset.index]
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
    <div className="sm:p-6 md:p-6">
      <p className="font-bold sm:mt-10 md:mt-0 sm:mb-6 md:mb-8 text-center  text-red-900 sm:text-1xl md:text-2xl">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            ref={(el) => (elementsRef.current[index] = el)}
            data-index={index}
            className={`rounded-lg shadow-lg overflow-hidden transform transition-all duration-700 ${
              visibleIndexes.includes(index.toString()) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } ${blog.initialBg} ${blog.hoverBg} group`}
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 p-2 object-fill" />
            <div className="p-4 text-center">
              <h2 className={`text-1xl font-semibold mb-2 ${blog.initialText} group-hover:text-white transition-colors duration-300`}>
                {blog.title}
              </h2>
              <a href={blog.link} className="inline-block px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600 transition-colors">
                Register a Complaint
              </a>
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
      <BlogGrid title="Violent Crimes" blogs={blogs1} />
      <BlogGrid title="Cyber Crime" blogs={blogs2} />
      <BlogGrid title="Economic Crimes" blogs={blogs4} />
      <BlogGrid title="Personal Crimes" blogs={blogs5} />
    </div>
  );
};

export default App;
