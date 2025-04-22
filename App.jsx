import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Contactus from './components/Contactus';
import Profile from './components/Profile';
import Home from './components/Home';
import Privacypolicy from './components/Privacypolicy';
import TermsOfService from './components/Tos';
import Feedback from './components/Feedback';
import Faqs from './components/Faqs';
import EmergencyContact from './components/Emergency';
import Cyberawerness from './components/Cyberawerness';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/privacy" element={<Privacypolicy/>} />
          <Route path="/service" element={<TermsOfService/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/faq" element={<Faqs/>} />
          <Route path="/emergency" element={<EmergencyContact/>} />
          <Route path="/cyberawerness" element={<Cyberawerness/>} />

        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
