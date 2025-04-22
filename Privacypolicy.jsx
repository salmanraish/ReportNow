import React from 'react';

export default function Privacypolicy() {
  return (
    <div className="mt-20 p-10 rounded-xl">
      <div className=" from-neutral-900 md:mr-13 md:ml-13 p-5 text-justify bg-white rounded-2xl text-black leading-relaxed tracking-wide space-y-4 shadow-2xl">
        <p className="text-blue-600 underline text-1xl text-start font-bold mb-6">
          Privacy Policy for ReportNow
        </p>

        <p style={{textIndent:'80px'}}>
        This Privacy Policy governs your use of ReportNow, a platform for reporting crimes. We prioritize your privacy and protect your personal data. When using ReportNow, we may collect information such as your name, email, phone number, and crime report details. Additionally, we automatically collect IP addresses, browser types, and location data (if permitted). This information helps process reports, improve functionality, and share relevant cases with authorities when necessary. We implement encryption and security measures to protect your data. You may request data deletion or modification. By using ReportNow, you agree to this policy.
        </p>
         <div className='h-0.5 w-full bg-gray-100'></div>
        <p className="font-bold text-1xl text-blue-700">Information We Collect</p>

        <p style={{textIndent:'80px'}}>We may collect the following types of information when you use our website:</p>

        <p className="font-semibold">User-Provided Information:</p>
        <ul className="list-disc pl-5">
          <li>Name, email address, phone number, and other registration details (if applicable).</li>
          <li>Details of crime reports submitted by users.</li>
          <li>Any additional information users voluntarily provide when reporting an incident or seeking assistance.</li>
        </ul>

        <p className="font-semibold">Automatically Collected Information:</p>
        <ul className="list-disc pl-5">
          <li>IP address, browser type, and device information.</li>
          <li>Usage data, including how users navigate and interact with the website.</li>
          <li>Location data (if permitted by the user) to help identify incident locations accurately.</li>
        </ul>
        <div className='h-0.5 w-full bg-gray-100'></div>
        <p className="font-bold text-1xl text-blue-600">How We Use Your Information</p>
        <ul className="list-disc pl-5">
          <li>Process and store crime reports.</li>
          <li>Provide support and respond to user inquiries.</li>
          <li>Improve website functionality and user experience.</li>
          <li>Share reports with relevant authorities for necessary action.</li>
          <li>Ensure compliance with legal obligations and prevent fraudulent activities.</li>
        </ul>
        <div className='h-0.5 w-full bg-gray-100'></div>
        <p className="font-bold text-1xl text-blue-600">Data Sharing and Disclosure</p>
        <p style={{textIndent:'80px'}}>We may disclose your information under the following circumstances:</p>
        <ul className="list-disc pl-5">
          <li><strong>Legal Requirements:</strong> When required by law, court order, or government authorities.</li>
          <li><strong>Public Safety:</strong> If we believe disclosure is necessary to prevent harm, fraud, or security threats.</li>
          <li><strong>Law Enforcement Authorities:</strong> Reports submitted may be shared with law enforcement agencies for investigation and necessary actions.</li>
          <li><strong>Service Providers:</strong> Third-party service providers assisting in website operations who are bound by confidentiality agreements.</li>
        </ul>
        <div className='h-0.5 w-full bg-gray-100'></div>
        <p className="font-bold text-1xl text-blue-600">Data Retention Policy</p>
        <p style={{textIndent:'80px'}}>We will retain user-provided data for as long as necessary to fulfill the purpose of crime reporting and for a reasonable period thereafter. Automatically collected data may be stored in aggregate for analytical purposes.</p>
        <div className='h-0.5 w-full bg-gray-100'></div>
        <p className="font-bold text-1xl text-blue-600">Security Measures</p>
        <p style={{textIndent:'80px'}}>We take reasonable measures to protect your data from unauthorized access, alteration, or disclosure, including:</p>
        <ul className="list-disc pl-5">
          <li>Secure servers and encryption techniques.</li>
          <li>Restricted access to sensitive data by authorized personnel only.</li>
          <li>Regular monitoring and security updates to prevent breaches.</li>
        </ul>
        <div className='h-0.5 w-full bg-gray-100'></div>
        <p className="font-bold text-1xl text-blue-600">Your Choices and Rights</p>
        <ul className="list-disc pl-5">
          <li>You may request the deletion or correction of your personal data by contacting us.</li>
          <li>You can disable location tracking through your device settings.</li>
          <li>If you do not wish to share information, you may choose not to use certain website features.</li>
        </ul>
        <div className='h-0.5 w-full bg-gray-100'></div>
        <p className="font-bold text-1xl text-blue-600">Changes to This Privacy Policy</p>
        <p style={{textIndent:'80px'}}>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of the website constitutes acceptance of the revised policy.</p>
        <div className='h-0.5 w-full bg-gray-100'></div>
        <p className="font-bold text-1xl text-blue-600">Contact Us</p>
        <p style={{textIndent:'80px'}}>For any privacy-related questions or concerns, please contact us at: <strong>support@reportnow.com</strong></p>

        <p className="text-sm text-gray-900">Last Updated: [Date]</p>
      </div>
    </div>
  );
}
