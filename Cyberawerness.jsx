import React from 'react'

export default function Cyberawerness() {
  return (
    <>
    <div className="mt-20 p-10 rounded-xl">
      <div className=" from-neutral-900 md:mr-13 md:ml-13 p-5 text-justify bg-white rounded-2xl text-black leading-relaxed tracking-wide space-y-4 shadow-2xl">
      <h5 className="text-2xl md:text-3xl font-bold p-4 mb-6">
        Cyber Crime Awareness: A Comprehensive Guide
      </h5>

      {/* Introduction */}
      <p className="text-lg p-4 mb-6">
        Cyber crime has become a significant threat in the digital world. From financial frauds to identity theft, 
        criminals are constantly developing new ways to exploit individuals and businesses. This guide covers all 
        aspects of cyber crime awareness, including common types of cyber crimes, prevention tips, and reporting procedures.
      </p>

      {/* Common Cyber Crimes */}
      <h3 className="text-xl font-semibold p-4 mb-4">1. Common Cyber Crimes</h3>
      <p className="text-lg p-4 mb-4">
        Cyber crimes are illegal activities that involve computers, networks, or digital systems. Below are the most common types:
      </p>

      {/* Phishing Attacks */}
      <h4 className="text-lg font-semibold p-4 mb-2">1.1 Phishing Attacks</h4>
      <ul className="list-disc list-inside p-4 space-y-2">
        <li><b>What is it?</b> Phishing tricks users into providing sensitive information by pretending to be a legitimate entity.</li>
        <li><b>How does it work?</b>
          <ul className="list-disc list-inside ml-5">
            <li>Fake emails or messages mimic trusted organizations (e.g., banks).</li>
            <li>Malicious links lead to fake websites.</li>
            <li>Users enter details, giving hackers access.</li>
          </ul>
        </li>
        <li><b>How to prevent it?</b>
          <ul className="list-disc list-inside ml-5">
            <li>Verify the sender’s email.</li>
            <li>Do not click on unknown links.</li>
            <li>Use email filtering tools.</li>
          </ul>
        </li>
      </ul>

      {/* Identity Theft */}
      <h4 className="text-lg font-semibold p-4 mb-2">1.2 Identity Theft</h4>
      <ul className="list-disc list-inside p-4 space-y-2">
        <li><b>What is it?</b> A hacker steals personal information (e.g., Social Security Number, credit card details) for fraud.</li>
        <li><b>Common Scenarios</b>
          <ul className="list-disc list-inside ml-5">
            <li>Opening fake bank accounts.</li>
            <li>Applying for loans with stolen info.</li>
            <li>Making fraudulent purchases.</li>
          </ul>
        </li>
        <li><b>How to prevent it?</b>
          <ul className="list-disc list-inside ml-5">
            <li>Don't share personal details online.</li>
            <li>Monitor bank statements regularly.</li>
            <li>Enable two-factor authentication.</li>
          </ul>
        </li>
      </ul>

      {/* Staying Safe Online */}
      <h3 className="text-xl font-semibold p-4 mb-4">2. How to Stay Safe Online</h3>
      <ul className="list-disc list-inside p-4 space-y-2">
        <li><b>Password Security</b>
          <ul className="list-disc list-inside ml-5">
            <li>Use complex passwords.</li>
            <li>Enable two-factor authentication.</li>
            <li>Use a password manager.</li>
          </ul>
        </li>
        <li><b>Device Security</b>
          <ul className="list-disc list-inside ml-5">
            <li>Keep software updated.</li>
            <li>Disable auto-downloads from unknown sources.</li>
            <li>Avoid public Wi-Fi for banking.</li>
          </ul>
        </li>
      </ul>

      {/* Reporting Cyber Crimes */}
      <h3 className="text-xl font-semibold p-4 mb-4">3. Reporting a Cyber Crime</h3>
      <ul className="list-disc list-inside p-4 space-y-2">
        <li><b>Cyber Crime Helplines</b>
          <ul className="list-disc list-inside ml-5">
            <li>India Cyber Crime Helpline: 155260</li>
            <li>Financial Fraud Helpline: 1800-123-4567</li>
            <li>Women’s Helpline for Online Harassment: 1091</li>
          </ul>
        </li>
        <li><b>Online Reporting Platforms</b>
          <ul className="list-disc list-inside ml-5">
            <li>
              India's National Cyber Crime Portal: 
              <a href="https://cybercrime.gov.in/" className="text-blue-600 hover:underline"> cybercrime.gov.in</a>
            </li>
            <li>
              FBI IC3 (USA): 
              <a href="https://www.ic3.gov/" className="text-blue-600 hover:underline"> ic3.gov</a>
            </li>
          </ul>
        </li>
      </ul>

      {/* Cybersecurity Tools */}
      <h3 className="text-xl font-semibold p-4 mb-4">4. Essential Cybersecurity Tools</h3>
      <ul className="list-disc list-inside p-4 space-y-2">
        <li><b>Antivirus & Security Software</b>
          <ul className="list-disc list-inside ml-5">
            <li>Norton – Protects against malware and phishing.</li>
            <li>McAfee – Provides firewall and device security.</li>
            <li>Bitdefender – AI-powered real-time protection.</li>
          </ul>
        </li>
        <li><b>VPN (Virtual Private Network)</b>
          <ul className="list-disc list-inside ml-5">
            <li>NordVPN – Ensures encrypted browsing.</li>
            <li>ExpressVPN – Protects against cyber snooping.</li>
          </ul>
        </li>
      </ul>
        </div>
        </div>
    </>
  )
}
