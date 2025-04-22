import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      title: 'Contact & Legal',
      subCategories: [
        { name: 'Privacy Policy', link: '/privacy' },
        { name: 'Terms of Service', link: '/service' },
        { name: 'Contact Us', link: '/contact' },
        { name: 'Feedback', link: '/feedback' }
      ],
    },
    {
      title: 'Location Services',
      subCategories: [
        { name: 'View on Map', link: '/map' },
        { name: 'Nearby Police Stations', link: '/police-stations' }
      ],
    },
    {
      title: 'Important Links',
      subCategories: [
        { name: 'View Past Reports', link: '/past-reports' },
        { name: 'Crime Trends', link: '/crime-trends' },
        { name: 'Emergency Contacts', link: '/emergency' },
        { name: 'FAQS', link: '/faq' }
      ],
    },
    {
      title: 'Fourth Link',
      subCategories: [
        { name: 'Sub Link I', link: '/sub-link-1' },
        { name: 'Sub Link II', link: '/sub-link-2' },
        { name: 'Sub Link III', link: '/sub-link-3' }
      ],
    },
  ];
  
  return (
    <footer className="text-gray-600 body-font" style={{background:"#0b1d3a"}}>
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-15">
          <p className="text-white font-medium text-lg">{currentDateTime}</p>
        </div>
        
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4 w-full">
            {categories.map((category, index) => (
              <div key={index} className="px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">{category.title}</h2>
                <nav className="list-none mb-10">
                  {category.subCategories.map((subCategory, subIndex) => (
                    <li key={subIndex} className="mb-2">
                      <Link 
                        to={subCategory.link} 
                        className="text-white hover:text-blue-200 hover:underline cursor-pointer"
                      >
                        {subCategory.name}
                      </Link>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{background:"#0b1d3a"}}>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
        <p className='text-white'>© {new Date().getFullYear()} <span className="text-gray-400 font-semibold">ReportNow™</span>. All Rights Reserved.</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link to="/" className="text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link to="/" className="ml-3 text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link to="#" className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link to="#" className="ml-3 text-white">
              <img src="/whatsapp_logo.svg" className='h-5' alt="WhatsApp Logo" />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
