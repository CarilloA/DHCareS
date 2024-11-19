import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar.jsx';  // Corrected import path
import Footer from './common/Footer';
import Home from './Home';
import DoctorSearch from './pages/About.jsx';
import PrescriptionRequest from './pages/Blog';
import HealthEvents from './pages/Contact';
import EmailConsultation from './pages/Doctors';
import AIHealthTips from './pages/Department';
// import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/font-awesome.min.css';
import './assets/css/themify-icons.css';
import './assets/css/nice-select.css';
import './assets/css/flaticon.css';
import './assets/css/gijgo.css';
import './assets/css/animate.css';
import './assets/css/slicknav.css';
import './assets/css/style.css';
import './assets/css/slicknav.css';

// <!-- CSS here -->
//     <link rel="stylesheet" href="css/bootstrap.min.css">
//     <link rel="stylesheet" href="css/owl.carousel.min.css">
//     <link rel="stylesheet" href="css/magnific-popup.css">
//     <link rel="stylesheet" href="css/font-awesome.min.css">
//     <link rel="stylesheet" href="css/themify-icons.css">
//     <link rel="stylesheet" href="css/nice-select.css">
//     <link rel="stylesheet" href="css/flaticon.css">
//     <link rel="stylesheet" href="css/gijgo.css">
//     <link rel="stylesheet" href="css/animate.css">
//     <link rel="stylesheet" href="css/slicknav.css">
//     <link rel="stylesheet" href="css/style.css">
//     <!-- <link rel="stylesheet" href="css/responsive.css"> --></link>

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor-search" element={<DoctorSearch />} />
            <Route path="/prescription-request" element={<PrescriptionRequest />} />
            <Route path="/health-events" element={<HealthEvents />} />
            <Route path="/email-consultation" element={<EmailConsultation />} />
            <Route path="/ai-health-tips" element={<AIHealthTips />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
