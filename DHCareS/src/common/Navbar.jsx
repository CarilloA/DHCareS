import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <div className="header-area">
        <div className="header-top_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="social_media_links">
                  <NavLink to='#'>
                    <i className="fa fa-linkedin"></i>
                  </NavLink>
                  <NavLink to='#'>
                    <i className="fa fa-facebook"></i>
                  </NavLink>
                  <NavLink to='#'>
                    <i className="fa fa-google-plus"></i>
                  </NavLink>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="short_contact_list">
                  <ul>
                    <li><NavLink to='#'> <i className="fa fa-envelope"></i> info@docmed.com</NavLink></li>
                    <li><NavLink to='#'> <i className="fa fa-phone"></i> 160160</NavLink></li>
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
                      <li><NavLink to="/" activeclassname="active">Home</NavLink></li> {/* activeClassName*/}
                      {/* wala pang content kaya comment out ko muna */}
                      {/* <li><NavLink to="/pages/Department" activecassname="active">Department</NavLink></li>
                      <li><NavLink to="/pages/Events" activeclassname="active">Events</NavLink></li>
                      <li><NavLink to="/pages/About" activeclassname="active">About</NavLink></li> 
                      <li><NavLink to="/pages/Contact" activeclassname="active">Contact</NavLink></li> */}
                      {/* for dropdown navigation */}
                      {/* <li>
                        <NavLink to="#" activeClassName="active">Pages <i className="ti-angle-down"></i></NavLink>
                        <ul className="submenu">
                          <li><NavLink to="/elements" activeClassName="active">Elements</NavLink></li>
                          <li><NavLink to="/pages/About" activeClassName="active">About</NavLink></li>
                        </ul>
                      </li> */}
                      <li><NavLink to="/pages/Doctors" activeclassname="active">Doctors</NavLink></li>
                      <li><NavLink to="/pages/Map" activeclassname="active">Map</NavLink></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="Appointment">
                  <div className="book_btn d-none d-lg-block">
                    <Button variant="primary" onClick={handleShow}>
                      Make an Appointment
                    </Button>
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

      {/* Modal for "Make an Appointment" */}
      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal"> {/* Custom class for the entire modal */}
        <Modal.Header closeButton>
          <Modal.Title className="custom-modal-title">
            Make an Appointment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="tel" placeholder="Enter your contact number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTime">
              <Form.Label>Preferred Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Reason</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="You may add additional notes or requests"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => alert('Custom Appointment Submitted!')}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};



export default Navbar;
