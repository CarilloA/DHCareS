import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default behavior of NavLink
    const href = e.target.getAttribute('href'); // Get the link's href
    window.location.href = href; // Force the page to reload
  };

  return (
    <div>
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <div className="footer_logo">
                    <NavLink to='/'>
                      <h3 style={{color: 'white'}}>Konsulta Specialista Clinic</h3>
                    </NavLink>
                  </div>
                  <p>
                  Care Anytime, Anywhere.
                  </p>
                  <div className="social_links">
                    <ul className="d-flex list-unstyled">
                      <li className="me-3">
                        <NavLink to='https://www.facebook.com/p/Konsulta-Specialista-Clinic-100077613285900/' className="social-icon">
                          <i className="ti-facebook"></i>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='https://www.instagram.com/konsulta_specialista_clinic/' className="social-icon">
                          <i className="fa fa-instagram"></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3 mr-5">
                <div className="footer_widget">
                  <h3 className="footer_title text-center">Services</h3>
                  <div className="row">
                    <div className="col-6">
                      <ul className="list-unstyled">
                        <li><NavLink to={`/pages/Services?category=Adult Care`} onClick={handleLinkClick}>Adult Care</NavLink></li>
                        <li><NavLink to={`/pages/Services?category=Adult/Child Care`} onClick={handleLinkClick}>Adult/Child Care</NavLink></li>
                        <li><NavLink to={`/pages/Services?category=Child Care`} onClick={handleLinkClick}>Child Care</NavLink></li>
                        <li><NavLink to={`/pages/Services?category=Old Age Care`} onClick={handleLinkClick}>Old Age Care</NavLink></li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="list-unstyled">
                        <li><NavLink to={`/pages/Services?category=Orthopaedic Surgery`} onClick={handleLinkClick}>Orthopaedic Surgery</NavLink></li>
                        <li><NavLink to={`/pages/Services?category=Women\'s Health`} onClick={handleLinkClick}>Women's Health</NavLink></li>
                        <li><NavLink to={`/pages/Services?category=ENT-Head and Neck Surgery`} onClick={handleLinkClick}>ENT-Head and Neck Surgery</NavLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Address</h3>
                  <p>
                  <i className="fa fa-map-marker">&nbsp;&nbsp;Porta Vaga Mall, Session Road , Baguio City, Philippines, 2600</i> <br />
                  <i className="fa fa-location-arrow">&nbsp;&nbsp;4M-10 4th floor </i><br />
                  <i className="fa fa-phone">&nbsp;&nbsp;0945 230 2676 </i><br />
                  <i className="fa fa-envelope">&nbsp;&nbsp;konsultapv2022@gmail.com</i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-light">
            <small>&copy; {new Date().getFullYear()} Konsulta Specialista Clinic. All Rights Reserved.</small>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;