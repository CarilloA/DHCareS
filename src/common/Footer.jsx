import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_widget">
                <div className="footer_logo">
                  <a href="#">
                    <h1 style={{color: 'white'}}>DHCareS</h1>
                  </a>
                </div>
                <p>
                  Firmament morning sixth subdue darkness creeping gathered divide.
                </p>
                <div className="social_links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Departments</h3>
                <ul>
                  <li><a href="#">Eye Care</a></li>
                  <li><a href="#">Skin Care</a></li>
                  <li><a href="#">Pathology</a></li>
                  <li><a href="#">Medicine</a></li>
                  <li><a href="#">Dental</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">Useful Links</h3>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Appointment</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">Address</h3>
                <p>
                  200, D-block, Green lane USA <br />
                  +10 367 467 8934 <br />
                  docmed@contact.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border"></div>
          <div className="row">
            <div className="col-xl-12">
              <p className="copy_right text-center">
                &copy; {new Date().getFullYear()} All rights reserved | This template is made with{' '}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{' '}
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
