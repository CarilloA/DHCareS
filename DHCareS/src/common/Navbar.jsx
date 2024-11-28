import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../assets/img/about/logo.png';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    const email = formData.get('email');
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      setLoading(false);
      return;
    }

    formData.append("access_key", "57fcabd0-5a00-449e-9fac-b67f80098d27");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log("Submitting form data:", json);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();
      console.log("Response from Web3Forms:", result);

      if (result.success) {
        toast.success("Appointment request sent successfully!");
        handleClose();
      } else {
        toast.error("There was an error sending your appointment request. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("There was a network error sending your appointment request. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <header>
      <div className="header-area">
        <div id="sticky-header" className="main-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col">
                <div className="logo">
                  <NavLink to="/">
                    <img src={logo} alt="Konsulta Specialista Clinic's logo" width="100vw" height="100vh" />
                  </NavLink>
                </div>
              </div>
              <div className="col" style={{marginLeft: '-5.5em'}}>
                <NavLink to='/'>
                    <h5>Konsulta Specialista Clinic</h5>
                  </NavLink>
              </div>

              <div className="col-xl-6 col-lg-7">
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                      <li><NavLink to="/pages/Services" activeclassname="active">Services</NavLink></li>
                      <li><NavLink to="/pages/HealthAwareness" activeclassname="active">HealthAwareness</NavLink></li>
                      <li><NavLink to="/pages/Faq" activeclassname="active">FAq</NavLink></li>
                      <li><NavLink to="/pages/Map" activeclassname="active">Map</NavLink></li>
                      
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="Appointment">
                  <div className="d-none d-lg-block" style={{backgroundColor: '#f5f5dc'}}>
                    <Button onClick={handleShow} style={{ backgroundColor: '#b8a068', border: 'none'}}>
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

      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title className="custom-modal-title">
            Make an Appointment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" required isInvalid={!!emailError} />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="tel" name="contact" placeholder="Enter your contact number" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control type="date" name="date" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTime">
              <Form.Label>Preferred Time</Form.Label>
              <Form.Control type="time" name="time" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Reason</Form.Label>
              <Form.Control as="textarea" name="message" rows={3} placeholder="You may add additional notes or requests" required />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </header>
  );
};

export default Navbar;
