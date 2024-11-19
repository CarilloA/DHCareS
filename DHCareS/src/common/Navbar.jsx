import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="header-area">
        <div className="header-top_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="social_media_links">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="short_contact_list">
                  <ul>
                    <li><a href="#"> <i className="fa fa-envelope"></i> info@docmed.com</a></li>
                    <li><a href="#"> <i className="fa fa-phone"></i> 160160</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="main-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-2">
                <div className="logo">
                  <NavLink to="/">
                    <h1>DHCareS</h1>
                  </NavLink>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                      <li><NavLink to="/department" activeClassName="active">Department</NavLink></li>
                      <li>
                        <NavLink to="#" activeClassName="active">Blog <i className="ti-angle-down"></i></NavLink>
                        <ul className="submenu">
                          <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                          <li><NavLink to="/single-blog" activeClassName="active">Single Blog</NavLink></li>
                        </ul>
                      </li>
                      <li>
                        <NavLink to="#" activeClassName="active">Pages <i className="ti-angle-down"></i></NavLink>
                        <ul className="submenu">
                          <li><NavLink to="/elements" activeClassName="active">Elements</NavLink></li>
                          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        </ul>
                      </li>
                      <li><NavLink to="/doctors" activeClassName="active">Doctors</NavLink></li>
                      <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="Appointment">
                  <div className="book_btn d-none d-lg-block">
                    <NavLink to="/appointment" className="popup-with-form">Make an Appointment</NavLink>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
