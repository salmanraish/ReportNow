import { FaShieldAlt, FaMapMarkedAlt, FaUserSecret, FaHandsHelping, FaGlobe, FaBell, FaClipboardList, FaLock, FaUsers, FaSearch, FaBullhorn, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b p-6 text-white">
      <div className="max-w-6xl mx-auto bg-gray-50 text-gray-900 rounded-2xl p-10 mt-10 mb-10">
        <h2 className="text-4xl font-bold mb-10 text-center tracking-wide animate-fadeIn text-blue-800">Welcome to ReportNow</h2>
        
        <section className="mb-12 text-lg leading-relaxed text-center animate-fadeInSlow font-semibold">
          <p>
            Our platform empowers citizens to report crimes securely, track real-time updates, and spread awareness to create a safer society. By using advanced technology, we ensure transparency, security, and efficiency in crime reporting.
          </p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-center mb-12 cursor-pointer">
          {[
            { icon: <FaUserSecret />, title: "Anonymous Reporting", desc: "Report crimes securely without revealing your identity." },
            { icon: <FaMapMarkedAlt />, title: "Live Crime Tracking", desc: "Stay updated with real-time crime maps and alerts." },
            { icon: <FaShieldAlt />, title: "Verified Reports", desc: "Ensuring all reports are authentic and reliable." },
            { icon: <FaHandsHelping />, title: "Community Support", desc: "Engage with others to promote safety and awareness." },
            { icon: <FaGlobe />, title: "Global Awareness", desc: "Understand crime trends worldwide with data insights." },
            { icon: <FaBell />, title: "Instant Alerts", desc: "Receive notifications for nearby incidents and threats." },
            { icon: <FaClipboardList />, title: "Case Documentation", desc: "Maintain detailed case records for future reference." },
            { icon: <FaLock />, title: "Secure Data", desc: "Your submitted reports are encrypted and protected." },
            { icon: <FaUsers />, title: "Victim Assistance", desc: "Guidance and support for victims of crimes." },
            { icon: <FaSearch />, title: "Crime Investigation", desc: "Use AI-powered tools for tracking and analysis." },
            { icon: <FaBullhorn />, title: "Public Awareness Campaigns", desc: "Spread awareness to prevent crimes in society." },
            { icon: <FaChartLine />, title: "Crime Statistics", desc: "View and analyze crime trends with graphical insights." },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-4xl text-indigo-600 mx-auto justify-items-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
              <p className="mt-2 text-gray-900">{feature.desc}</p>
            </div>
          ))}
        </section>
        
        <section className="text-center mt-10">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <p className="text-lg leading-relaxed mb-6 text-slate-800">
            We are committed to providing a robust and secure platform that ensures safety, awareness, and immediate action. Join us in making society a safer place.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-1xl hover:scale-105 transition-all duration-300 cursor-pointer">
            Report a Crime Now
          </button>
        </section>
        
        <section className="mt-14">
          <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center max-w-sm">
              <p className="italic">"This platform made it easy for me to report an incident. It's secure and fast!"</p>
              <h4 className="font-bold mt-4">- Rohan Sharma</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center max-w-sm">
              <p className="italic">"The live crime tracking feature helps me stay aware of incidents nearby."</p>
              <h4 className="font-bold mt-4">- Meera Gupta</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center max-w-sm">
              <p className="italic">"A must-have platform for every citizen to ensure safety and security."</p>
              <h4 className="font-bold mt-4">- Aakash Verma</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
