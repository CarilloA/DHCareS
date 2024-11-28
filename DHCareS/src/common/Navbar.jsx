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
  const [isNavbarOpen, setNavbarOpen] = useState(false);

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
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col">
                <div className="navbar-brand">
                  <NavLink to="/">
                    <img src={logo} alt="Konsulta Specialista Clinic's logo" width="100vw" height="100vh" />
                    Konsulta Specialista Clinic
                  </NavLink>
                </div>
              </div>

              <div className="col">
                <nav className="navbar navbar-expand-lg navbar-light">
                  {/* Navbar toggler button for mobile view */}
                  <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded={isNavbarOpen ? 'true' : 'false'} 
                    aria-label="Toggle navigation"
                    onClick={() => setNavbarOpen(!isNavbarOpen)}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                      <li className="nav-item"><NavLink to="/pages/Services" className="nav-link">Services</NavLink></li>
                      <li className="nav-item"><NavLink to="/pages/HealthAwareness" className="nav-link">Health Awareness</NavLink></li>
                      <li className="nav-item"><NavLink to="/pages/Faq" className="nav-link">FAQ</NavLink></li>
                      <li className="nav-item"><NavLink to="/pages/Map" className="nav-link">Contact Us</NavLink></li>
                      <li className="nav-item"><NavLink to="/pages/About" className="nav-link">About Us</NavLink></li>
                      <li className="nav-item">
                        <button onClick={handleShow} className="btn btn3">Make an Appointment</button>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title className="custom-modal-title">Make an Appointment</Modal.Title>
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
              <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
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
              <Button variant="secondary" onClick={handleClose}>Close</Button>
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
