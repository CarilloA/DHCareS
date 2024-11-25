import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmergencyContact = ({ show, handleShow, handleClose }) => {
  return (
    <div className="Emergency_contact">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-xl-6">
            <div className="single_emergency d-flex align-items-center justify-content-center emergency_bg_1 overlay_brown">
              <div className="info">
                <h3>For Any Emergency Contact</h3>
                <p>Esteem spirit temper too say adieus.</p>
              </div>
              <div className="info_button">
                <NavLink to='/' className="boxed-btn3-white">mdc@e.ubaguio.edu</NavLink>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="single_emergency d-flex align-items-center justify-content-center emergency_bg_2 overlay_brown">
              <div className="info">
                <h3>Make an Online Appointment</h3>
                <p>Esteem spirit temper too say adieus.</p>
              </div>
              <div className="info_button">
                <NavLink className="boxed-btn3-white" onClick={handleShow}>Make an Appointment</NavLink>

                {/* Modal for "Make an Appointment" */}
                <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <EmergencyContact show={show} handleShow={handleShow} handleClose={handleClose} />
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
                        <NavLink to='https://facebook.com' className="social-icon">
                          <i className="ti-facebook"></i>
                        </NavLink>
                      </li>
                      <li className="me-3">
                        <NavLink to='https://x.com/' className="social-icon">
                          <i className="ti-twitter-alt"></i>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='https://instagram.com' className="social-icon">
                          <i className="fa fa-instagram"></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Departments</h3>
                  <ul>
                    <li><NavLink to='/'>Eye Care</NavLink></li>
                    <li><NavLink to='/'>Skin Care</NavLink></li>
                    <li><NavLink to='/'>Pathology</NavLink></li>
                    <li><NavLink to='/'>Medicine</NavLink></li>
                    <li><NavLink to='/'>Dental</NavLink></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">Useful Links</h3>
                  <ul>
                    <li><NavLink to='/pages/About'>About</NavLink></li>
                    <li><NavLink to='/pages/Events'>Events</NavLink></li>
                    <li><NavLink to='/pages/Contact'>Contact</NavLink></li>
                    <li><NavLink to='/' onClick={handleShow}>Appointment</NavLink></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Address</h3>
                  <p>
                  <i className="fa fa-map-marker">&nbsp;&nbsp;Porta Vaga Mall, Session Road , Baguio City, Philippines, 2600</i> <br />
                  <i className="fa fa-location-arrow">&nbsp;&nbsp;4M-10 4th floor </i><br />
                  <i className="fa fa-phone">&nbsp;&nbsp;0945 230 2676 </i><br />
                  <i className="fa fa-envelope">&nbsp;&nbsp;mdc@e.ubaguio.edu</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
