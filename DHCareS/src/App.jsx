import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './common/Navbar.jsx';  // Corrected import path
import Footer from './common/Footer';
import Home from './Home';
import Map from './pages/Map';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';
import Department from './pages/Department';
import PageNotFound from './common/PageNotFound.jsx';
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

const App = () => {
  return (
    <>
    {/* Enable the future flag for v7_relativeSplatPath */}
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> {/*for default page*/}
          <Route path='/Home' element={<Home />} />
          <Route path='/pages/Department' element={<Department />} /> {/*element content is the import file*/}
          <Route path='/pages/Doctors' element={<Doctors />} />
          <Route path='/pages/Events' element={<Events />} />
          <Route path='/pages/About' element={<About />} />
          <Route path='/pages/Contact' element={<Contact />} />
          <Route path='/pages/Map' element={<Map />} />
          <Route path='/pages/Appointment' element={<Appointment />} />
          <Route path='*' element={<PageNotFound />} /> {/* include asterisk for wildcard route */}
        </Routes>
        <Footer />
    </BrowserRouter>
  </>
  );
};

export default App;
