import React from 'react';
import { Link } from 'react-router-dom';

const EmergencyContact = () => {
  return (
    <div>
      <div className="emergency-contact p-6 sm:ml-10 sm:mr-10 md:mr-20 md:ml-20 w-auto shadow-2xl mt-20 sm:mb-10">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4"style={{textIndent:'23px'}}>Emergency Contacts</h2>
        <p className="mb-4"style={{textIndent:'23px'}}>If you are facing an emergency or need immediate assistance, please use the following contact information:</p>

        {/* 3 rows with 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Row */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2"style={{textIndent:'23px'}}>National Emergency Numbers:</h3>
            <ul className="ml-6 mb-4">
              <li>Police: 100</li>
              <li>Fire Department: 101</li>
              <li>Ambulance: 102</li>
              <li>Disaster Management: 108</li>
              <li>Women Helpline: 1091</li>
              <li>Child Helpline: 1098</li>
              <li>Traffic Police: 1090</li>
              <li>Health Emergency: 108</li>
              <li>Railway Emergency: 138</li>
              <li>Nodal Officer for Air Crash: 1070</li>
              <li>Cybercrime Reporting: 155260</li>
              <li>Financial Fraud Reporting: 1800-123-4567</li>
              <li>Report Domestic Violence: 181</li>
              <li>Senior Citizen Helpline: 1291</li>
              <li>Drug Abuse Helpline: 1800-11-0031</li>
              <li>National Anti-Terrorism Helpline: 112</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2" style={{textIndent:'23px'}}>Company Emergency Support:</h3>
            <ul className="ml-6 mb-4">
              <li>Customer Support Hotline: 1800-123-4567</li>
              <li>Email Support: <Link to="mailto:emergency@yourcompany.com" className="text-blue-600">emergency@reportnow.com</Link></li>
              <li>Live Chat Support: <Link to="/live-chat" className="text-blue-600">[Link to live chat]</Link></li>
            </ul>
          </div>

          {/* Second Row */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2"style={{textIndent:'23px'}}>Crime Reporting Helplines:</h3>
            <ul className="ml-6 mb-4">
              <li>Report Cybercrime: 155260</li>
              <li>Report Financial Fraud: 1800-123-4567</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2"style={{textIndent:'23px'}}>Legal and Victim Support:</h3>
            <ul className="ml-6 mb-4">
              <li>National Legal Aid Hotline: 1800-999-999</li>
              <li>Victim Support Helpline: 1800-555-555</li>
            </ul>
          </div>

          {/* Third Row */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2"style={{textIndent:'23px'}}>Social Media Support:</h3>
            <ul className="ml-6 mb-4">
              <li>Twitter: <Link to="https://twitter.com/YourCompany" target="_blank" rel="noopener noreferrer" className="text-blue-600">@YourCompany</Link></li>
              <li>Facebook: <Link to="https://facebook.com/YourCompany" target="_blank" rel="noopener noreferrer" className="text-blue-600">/YourCompany</Link></li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2"style={{textIndent:'23px'}}>Report Threats or Retaliation:</h3>
            <p style={{textIndent:'20px'}}>If you are facing threats or retaliation after reporting a crime, contact us immediately at:</p>
            <ul className="ml-6 mb-4">
              <li>Emergency Email: <Link to="mailto:emergency@reportnow.com" className="text-blue-600">emergency@reportnow.com</Link></li>
            </ul>
          </div>
        </div>

        <p className="mb-4"style={{textIndent:'23px'}}>If you need further assistance, please visit our <Link to="/faq" className="text-blue-600">FAQ section</Link> or <Link to="/contact" className="text-blue-600">Contact Us</Link> for more options.</p>
      </div>
    </div>
  );
};

export default EmergencyContact;
