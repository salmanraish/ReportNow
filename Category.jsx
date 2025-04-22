import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown when clicked outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest('#dropdownMenu') && !e.target.closest('#dropdownCategoryLink')) {
      setIsOpen(false);
    }
  };

  // Add event listener on mount and clean up on unmount
  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <>
    <div className="category h-12 w-100% bg-gray-300">
    <ul className='flex text-xs md:text-base gap-5 ml-10 sm:gap-8 md:gap-12 sm:ml-8 md:ml-20'>
      <li className='mt-4 md:mt-2 text-black'><a href="/">Quick Report</a></li>
      <li className='mt-4 md:mt-2 text-black'><a href="/">Track Complaint</a></li>
      <li className='mt-4 md:mt-2 text-black'>
        
      <a 
        href="#"
        id="dropdownCategoryLink"
        onClick={toggleDropdown}
        className="text-gray-800 focus:outline-non font-medium text-center inline-flex items-center text-xs md:text-base"
      >
        Category
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </a>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdownMenu"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Cyber Crime
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Violent Crimes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Property Crimes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Economic Offenses
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Drug-related Crimes
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Environmental Crimes
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Inchoate Crimes
              </a>
            </li>
          </ul>
        </div>
      )}
      </li>
    </ul>
    </div>
    </>
  );
};

export default Dropdown;
