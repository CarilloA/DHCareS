import React, { useState } from 'react';
import { format, eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { Modal, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Services = () => {
  // For category filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Modal for Appointment and Alert message
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


  // service data
  const servicesData = [
    {
      id: 1,
      name: 'Adult Care',
      learnMoreLink: '/', 
      services: [
        'Arthritis', 'Cardiology', 'Infectious Disease', 'INternal Medecine', 'Nephrology & Kidney Transplant', 'Optimal Weight Management', 'Pulmonology', 'Reproductive Immunology', 'Rheumatology', 
      ],
    },
    {
      id: 2,
      name: 'Adult/Child Care',
      learnMoreLink: '/',
      services: [
        'Allergy/Immunology', 'Genetics', 'Medical Nutrition', 'Vaccination', 
      ],
    },
    {
      id: 3,
      name: 'Child Care',
      learnMoreLink: '/', 
      services: [
        'General Pedriatics',
      ],
    },
    {
      id: 4,
      name: 'Old Age Care',
      learnMoreLink: '/', 
      services: [
        'Geriatic Medicine',
      ],
    },
    {
      id: 5,
      name: 'Orthopaedic Surgery',
      learnMoreLink: '/', 
      services: [
        'General Orthopaedics', 'Hands and Reconstructive Microsurgery', 'Methods of llizarov & Limb Deformity Correction', 'Hip, Knee, & Ankle Reconstruction', 'Foot & Ankle Surgery', 
      ],
    },
    {
      id: 6,
      name: "Women's Health",
      learnMoreLink: '/', 
      services: [
        'OB-GYN', 'Pediatric & Adolescent Gynecology', 
      ],
    },
    {
      id: 7,
      name: 'ENT-Head and Neck Surgery',
      learnMoreLink: '/', 
      services: [
        'Sleep Medicine', 'Facial Plastic & Aesthetics', 'Cleft Surgery & Ear Reconstruction', 
      ],
    },
  ];

  // Sample schedule data for each service
  const schedulesData = {
    1: [
      { date: 'Tuesday', times: ['9:00 AM - 12:00 PM', '1:00 PM - 4:00 PM'] },
      { date: 'Wednesay', times: ['10:00 AM - 1:00 PM'] },
      { date: 'Friday', times: ['9:00 AM - 12:00 PM'] },
    ],
    2: [
      { date: 'Monday', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
      { date: 'Friday', times: ['9:00 AM - 12:00 PM'] }
    ],
    3: [
      { date: 'Wednesay', times: ['9:00 AM - 12:00 PM', '3:00 PM - 6:00 PM'] }
    ],
    4: [
      { date: 'Wednesay', times: ['10:00 AM - 1:00 PM'] },
      { date: 'Thursday', times: ['11:00 AM - 2:00 PM'] }
    ],
    5: [
        { date: 'Monday', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: 'Tuesday', times: ['9:00 AM - 12:00 PM'] }
    ],
    6: [
        { date: 'Wednesay', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: 'Thursday', times: ['9:00 AM - 12:00 PM'] }
    ],
    7: [
        { date: 'Tuesday', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: 'Friday', times: ['9:00 AM - 12:00 PM'] }
    ],
    
  };

  // For category filter
  const filteredCategory =
  selectedCategory === 'All'
    ? servicesData
    : servicesData.filter((category) => category.name === selectedCategory);

  const handleServiceClick = (id) => {
    setSelectedService(id);
    handleShow(); // Open the modal
  };

  const onDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedTime(''); // Reset the selected time when date changes
  };

  // Generate available dates based on the selected service
  const availableDates = selectedService
    ? schedulesData[selectedService].map((schedule) => schedule.date)
    : [];

  // Generate available times based on the selected date
  const availableTimes =
    selectedService && selectedDate
      ? schedulesData[selectedService]
          .find((schedule) => schedule.date === selectedDate)?.times || []
      : [];

      return (
        <div className="services-container">
          <h1 className="text-center">Services Offered</h1>

           {/* Service Category Filter */}
          <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #003300',
                fontSize: '16px',
              }}
            >
              <option value="All">All Categories</option>
              {servicesData.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
    
          {/* Services List */}
    <div className="services-row">
      {filteredCategory.map((category) => (
        <div key={category.id} className="category-container">
          <div className="d-flex align-items-center">
            <h2 className="mr-3">{category.name}</h2>
            <button className="btn1" onClick={() => handleServiceClick(category.id)}>
              Make an Appointment
            </button>
          </div>
          <table className="services-table">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {category.services.map((service, index) => (
                <tr key={`${category.id}-${index}`}>
                  <td>{service}</td>
                  <td>{category.name}</td>
                  <td>
                    <Link to={category.learnMoreLink} className="learn-more-link">
                      Learn More
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
    
          {/* Appointment Modal */}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Make an Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={onSubmit}>
                {/* Name */}
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>
    
                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    isInvalid={!!emailError}
                  />
                  <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
                </Form.Group>

                {/* Display Selected Category */}
                <Form.Group className="mb-3">
                  <Form.Label>Selected Category</Form.Label>
                  <Form.Control
                    type="text"
                    value={servicesData.find(service => service.id === selectedService)?.name || ''}
                    readOnly
                  />
                </Form.Group>
    
                {/* Available Dates */}
                <Form.Group className="mb-3">
                  <Form.Label>Preferred Date</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedDate}
                    onChange={onDateChange}
                    required
                  >
                    <option value="">Select a date</option>
                    {availableDates.map((date, index) => (
                      <option key={index} value={date}>
                        {date}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
    
                {/* Available Times */}
                {selectedDate && (
                  <Form.Group className="mb-3">
                    <Form.Label>Preferred Time</Form.Label>
                    <Form.Control
                      as="select"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                )}
    
                {/* Reason */}
                <Form.Group className="mb-3">
                  <Form.Label>Reason</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Add notes or requests" />
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

export default Services;