import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import expert1 from '../assets/img/experts/1.png';
import expert2 from '../assets/img/experts/2.png';
import expert3 from '../assets/img/experts/3.png';
import expert4 from '../assets/img/experts/4.png';
import expert5 from '../assets/img/experts/5.png';
import expert6 from '../assets/img/experts/6.png';
import expert7 from '../assets/img/experts/7.png';
import expert8 from '../assets/img/experts/8.png';
import userIcon from '../assets/img/experts/userIcon.png';

const Doctors = () => {
  // Appointment Form
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

  // Sample data for doctors (name, specialty, schedule, image)
  const doctorData = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Eye Care', schedule: ['9:00 AM - 12:00 PM', '1:00 PM - 4:00 PM'],  imgSrc: userIcon},
    { id: 2, name: 'Dr. Sarah Cruz', specialty: 'Dental', schedule: ['10:00 AM - 1:00 PM', '2:00 PM - 5:00 PM'],  imgSrc: userIcon},
    { id: 3, name: 'Dr. Michael Ibasco', specialty: 'Skin Care', schedule: ['8:00 AM - 11:00 AM', '1:00 PM - 3:00 PM'],  imgSrc: userIcon},
    { id: 4, name: 'Dr. Jane Garcia', specialty: 'Pathology', schedule: ['9:30 AM - 12:30 PM', '3:00 PM - 6:00 PM'],  imgSrc: userIcon},
    { id: 5, name: 'Dr. Lucas Alanzalon', specialty: 'Cardiology', schedule: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'],  imgSrc: userIcon},
    { id: 6, name: 'Dr. Olivia Perez', specialty: 'Orthopedics', schedule: ['10:00 AM - 1:00 PM', '3:00 PM - 6:00 PM'],  imgSrc: userIcon},
    { id: 7, name: 'Dr. Emma Lee', specialty: 'Pediatrics', schedule: ['9:00 AM - 12:00 PM', '1:00 PM - 4:00 PM'],  imgSrc: userIcon},
    { id: 8, name: 'Dr. Liam Alba', specialty: 'Psychiatry', schedule: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'],  imgSrc: userIcon},
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorData);

  // Filter doctors based on the search query
  const filterDoctors = (query) => {
    const filtered = doctorData.filter(
      (doctor) => doctor.name.toLowerCase().includes(query.toLowerCase()) || 
                 doctor.specialty.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterDoctors(query);
  };

  return (
    <div className="doctor-page">
      <div className="container">
        <h1 className="text-center" style={{ marginBottom: '20px' }}>Find a Doctor</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or specialty"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: '8px',
            width: '100%',
            maxWidth: '400px',
            margin: '0 auto 20px',
            display: 'block',
            borderRadius: '4px',
            border: '1px solid #ddd',
          }}
        />

        {/* Doctors List */}
        <div className="row">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="col-md-6 col-lg-3">
                <div className="single-expert mb-40">
                  <div className="expert-thumb">
                    <img src={doctor.imgSrc} alt={doctor.name} width={200}/>
                  </div>
                  <div className="experts-name text-left">
                    <h3>{doctor.name}</h3>
                    <div style={{marginBottom: '0.5em'}}><span>{doctor.specialty}</span></div>
                    <div style={{marginBottom: '1em'}}>
                      <strong>Available Slots: </strong>
                      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        {doctor.schedule.map((time, index) => ( 
                          <li key={index}>{time}</li> 
                        ))}
                      </ul>
                      </div>
                    <button
                      onClick={handleShow}
                      className='btn2'
                    >
                      Schedule an Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center" style={{ width: '100%' }}>No doctors found matching your search.</p>
          )}
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
    </div>
  );
};

export default Doctors;
