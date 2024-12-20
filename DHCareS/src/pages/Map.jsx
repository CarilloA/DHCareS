import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Map = () => {
  return (
    <div className="map-container" style={{ textAlign: 'center', margin: '20px' }}>
      <h2 style={{ color: '#1f1f1f', fontWeight: 'bold', marginBottom: '20px' }}>
        University of Baguio Clinic Location
      </h2>
      <div
        style={{
          border: '2px solid #003300',
          borderRadius: '8px',
          overflow: 'hidden',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Embed Google Maps with gestureHandling in the src URL */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d820.2089640031288!2d120.59745169492577!3d16.41516056815712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3391a15d8cb0dc9b%3A0xe282b2015f6debba!2sCH8W%2B3X5%20University%20of%20Baguio%2C%20Gen.%20Luna%20Rd%2C%20Baguio%2C%202600%20Benguet!3m2!1d16.415128!2d120.5974765!5e0!3m2!1sen!2sph!4v1733645826341!5m2!1sen!2sph"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="storage-access"
        />
      </div>
      <p style={{ fontSize: '16px', color: '#555', marginTop: '20px' }}>
        Find us at <strong>Gen. Luna, Baguio City, Philippines, 2600</strong> using the map above.
      </p>
    </div>
  );
};

const EmergencyContact = () => {
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    message: ''
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setEmailError(''); // Clear previous error

    const { email } = formData;

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      setLoading(false);
      return;
    }

    const dataToSubmit = {
      ...formData,
      access_key: '57fcabd0-5a00-449e-9fac-b67f80098d27'
    };

    const json = JSON.stringify(dataToSubmit);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-form-container" style={{ background: '#f9f9f9', padding: '40px 20px', borderRadius: '10px' }}>
      <h3 style={{ textAlign: 'center', color: '#003300', marginBottom: '30px', fontSize: '30px', fontWeight: 'bold'}}>Contact Us</h3>
      <Form onSubmit={onSubmit} style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div className='row'>
          <div className='col'>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label style={{ fontWeight: 'bold' }}>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{ borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}
              />
            </Form.Group>
          </div>
          <div className='col'>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label style={{ fontWeight: 'bold' }}>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={{ borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}
              />
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label style={{ fontWeight: 'bold' }}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            isInvalid={!!emailError}
            style={{ borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}
          />
          <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContactNumber">
          <Form.Label style={{ fontWeight: 'bold' }}>Contact Number</Form.Label>
          <Form.Control
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            style={{ borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label style={{ fontWeight: 'bold' }}>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            style={{ borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}
          />
        </Form.Group>

        <button
          className="btn2"
          variant="success"
          type="submit"
          disabled={loading}
          style={{ width: '100%', padding: '15px', fontSize: '16px'}}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
      <ToastContainer />
    </div>
  );
};

const ContactUs = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {/* <Col xl={6} lg={8} md={10} sm={12} className="mb-4">
          <EmergencyContact />
        </Col> */}
        <Col xl={6} lg={8} md={10} sm={12} className="mb-4">
          <Map />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
