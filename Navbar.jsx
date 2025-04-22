import { useState, useEffect, useRef} from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [menuState, setMenuState] = useState({
    menuOpen: false,
    dropdownOpen: false,
    profileOpen: false,
    darkMode: false,
    language: "English",
  });
  const toggleMode = () => {
    setMenuState((prev) => {
      const newMode = !prev.darkMode;
      document.body.style.background = newMode ? "#121e33" : "#ffffff"; // dark blue and white
      return { ...prev, darkMode: newMode };
    });
  };

  const dropdownRef = useRef(null);
  const profileRef = useRef(null);
  const languageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        profileRef.current && !profileRef.current.contains(event.target) &&
        languageRef.current && !languageRef.current.contains(event.target)
      ) {
        setMenuState((prev) => ({
          ...prev,
          dropdownOpen: false,
          profileOpen: false,
        }));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);  

  const handleLanguageChange = (lang) => {
    setMenuState((prev) => ({ ...prev, language: lang, dropdownOpen: false }));
  };

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" }
  ];
  const navigate = useNavigate();
  const handleSignup = () => navigate('/signup');
  const handleLogin = () => navigate('/login');

  return (
    <div>
      <div className="navbar fixed top-0 left-0 w-full z-50 sm:h-10 md:h-15 bg-blue-950 flex items-center px-5 justify-between">
        <h2 className="text-white py-3 sm:mx-3 md:mx-5 sm:text-xl md:text-2xl logo">
          <Link to="/home">ReportNow</Link>
        </h2>

        <form className="hidden md:flex items-center w-full max-w-md input_search">
  <div className="relative w-full">
    <input
      type="search"
      className="block w-full p-4 h-11 pl-10 text-sm text-gray-900 border border-gray-900 rounded-lg bg-gray-100 focus:outline-none focus:border-blue-800 placeholder-gray-600"
      placeholder="Search State..."
    />
    <svg
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width="20"
      height="20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35M18 10a8 8 0 1 1-8-8 8 8 0 0 1 8 8z"
      />
    </svg>
  </div>
</form>


        <ul className="hidden md:flex text-white gap-4 navbar-item">
          {navLinks.map((link) => (
          <li
            className="navbar-links hover:underline hover:decoration-blue-400 hover:decoration-2 hover:text-gray-300 mt-1"
            key={link.to}
          >
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}

{/* Dark Mode Toggle */}
<li>
          <svg id = "mode" onClick={toggleMode} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="hidden md:block text-purple-700 mt-1 ml-2 cursor-pointer dark:text-white" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg>
          </li>


          {/* Language Dropdown */}
          <li ref={languageRef} className="relative">
            <button
              className="text-white px-2 py-1 border border-white rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
              onClick={() => setMenuState((prev) => ({ ...prev, dropdownOpen: !prev.dropdownOpen }))}
            >
              {menuState.language}
              <svg
                className={`w-4 h-4 transition-transform ${menuState.dropdownOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {menuState.dropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-36 border border-gray-300">
                {["English", "Hindi"].map((lang) => (
                  <li
                    key={lang}
                    className="px-4 py-3 text-lg font-semibold hover:bg-blue-500 hover:text-white cursor-pointer transition"
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <button onClick={handleLogin}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-lg cursor-pointer login"
>
  Login
</button>
<button onClick={handleSignup} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-lg cursor-pointer signup">
  Signup
</button>

          {/* Profile */}
          <li ref={profileRef}>
            <img
              className="h-8 w-8 rounded-full cursor-pointer" id = "profile"
              src="https://image.lexica.art/md2_webp/0c009bf1-ba8d-43b7-9cf7-fb259640ad25"
              alt="Profile"
              onClick={() => setMenuState((prev) => ({ ...prev, profileOpen: !prev.profileOpen }))}
            />
            {menuState.profileOpen && <Profile />}
          </li>

        </ul>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuState((prev) => ({ ...prev, menuOpen: !prev.menuOpen }))}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuState.menuOpen && (
        <div className="md:hidden bg-blue-950 text-white p-4 mt-12">
          <form className="flex items-center w-full mb-4 relative">
  <input
    type="search"
    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-800"
    placeholder="Search State"
  />
  <svg
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="20"
    height="20"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-4.35-4.35M18 10a8 8 0 1 1-8-8 8 8 0 0 1 8 8z"
    />
  </svg>
</form>
          <ul className="flex flex-col gap-3 text-xs">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}

           {/* Dark Mode Toggle */}
           <li>
  <svg
    id="mode"
    onClick={toggleMode}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    className="text-purple-700 mt-1 ml-2 cursor-pointer dark:text-white"
    height="28"
    width="28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
  </svg>
</li>

            

            {/* Language Dropdown */}
          <li ref={languageRef} className="relative">
            <button
              className="text-white px-3 py-2 border border-white rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
              onClick={() => setMenuState((prev) => ({ ...prev, dropdownOpen: !prev.dropdownOpen }))}
            >
              {menuState.language}
              <svg
                className={`w-4 h-4 transition-transform ${menuState.dropdownOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {menuState.dropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-36 border border-gray-300">
                {["English", "Spanish", "French", "German"].map((lang) => (
                  <li
                    key={lang}
                    className="px-4 py-3 text-lg font-semibold hover:bg-blue-500 hover:text-white cursor-pointer transition"
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </li>
    
          <button onClick={handleLogin}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-lg cursor-pointer login w-20"
>
  Login
</button>
<button onClick={handleSignup} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-lg cursor-pointer signup w-20">
  Signup
</button> 
        
            <li>
              <img
                className="h-8 w-8 rounded-full cursor-pointer ml-2"
                src="https://image.lexica.art/md2_webp/0c009bf1-ba8d-43b7-9cf7-fb259640ad25"
                alt="Profile"
                onClick={() => setMenuState((prev) => ({ ...prev, profileOpen: !prev.profileOpen }))}
              />
              {menuState.profileOpen && <Profile />}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
