import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <div className="footer_logo">
                    <NavLink to='/'>
                      <h3 style={{ color: 'white' }}>UB Medical Clinic</h3>
                    </NavLink>
                  </div>
                  <p>Care Anytime, In UB.</p>
                  <p>Opens: 8:00 am - 5:00 pm</p>
                  <div className="social_links">
                    <ul className="d-flex list-unstyled" style={{ padding: 0, margin: 0 }}>
                      <li className="social-item me-3" style={{ display: 'inline-block', backgroundColor: '#D3D3D3', padding: '10px', borderRadius: '10%' }}>
                        <NavLink to='https://www.facebook.com/universityofbaguio/' className="social-icon">
                          <i className="ti-facebook" style={{ fontSize: '24px', color: '#333', display: 'block', textAlign: 'center' }}></i>
                        </NavLink>
                      </li>
                      <li className="social-item me-3" style={{ display: 'inline-block', backgroundColor: '#D3D3D3', padding: '10px', borderRadius: '10%' }}>
                        <NavLink to='https://www.instagram.com/universityofbaguio/?hl=en' className="social-icon">
                          <i className="fa fa-instagram" style={{ fontSize: '24px', color: '#333', display: 'block', textAlign: 'center' }}></i>
                        </NavLink>
                      </li>
                      <li className="social-item me-3" style={{ display: 'inline-block', backgroundColor: '#D3D3D3', padding: '10px', borderRadius: '10%' }}>
                        <NavLink to='https://www.youtube.com/channel/UCelKQX7FTP7fr1b66kT5E8g' className="social-icon">
                          <i className="fa fa-youtube" style={{ fontSize: '24px', color: '#333', display: 'block', textAlign: 'center' }}></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="footer_widget">
                  <h3 className="footer_title text-center">Services Available</h3>
                  <div className="row">
                    <div className="col-6">
                      <ul className="list-unstyled">
                        <li>Free Consultation</li>
                        <li>Referral System</li>
                        <li>Facilitation of Accident Insurance</li>
                        <li>Breastfeeding Area</li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="list-unstyled">
                        <li>Vaccinations</li>
                        <li>Annual Medical and Physical Examination</li>
                        <li>Health Certificate for OJTs, Practicum, Internship, Local-off campus activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Address</h3>
                  <p>
                    <i className="fa fa-map-marker">&nbsp;&nbsp;University of Baguio, General Luna Road, Baguio City</i>
                    <br />
                    <i className="fa fa-location-arrow">&nbsp;&nbsp;F Building </i>
                    <br />
                    <i className="fa fa-phone">&nbsp;&nbsp;(074) 442-3036 </i>
                    <br />
                    <i className="fa fa-envelope">&nbsp;&nbsp;ub@ebaguio.edu</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center"
          style={{
            backgroundColor: '#C3151C',
            color: 'white',
            padding: '20px 0',
            position: 'relative',
            bottom: '0',
            width: '100%',
          }}
        >
          <b>
            <span style={{ color: 'white' }}>
              &copy; {new Date().getFullYear()} UB Medical Clinic. All Rights Reserved.
            </span>
          </b>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
