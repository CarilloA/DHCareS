import React, { useState } from 'react';
import { format, eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { Modal, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Modal for Appointment and Alert message
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (time) => {
    setSelectedTime(time);  // Set the selected time before showing the modal
    setShow(true);           // Show the modal
  };
  
  // const handleShow = () => setShow(true);

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


  // Sample service data
  const servicesData = [
    { id: 1, name: 'Elderly care, medical consultations for age-related conditions', description: 'Medical consultations and care for elderly patients with age-related health issues.', learnMoreLink: '/consultation' },
    { id: 2, name: 'Diagnosis and treatment of lung diseases, respiratory consultations', description: 'Diagnosis and treatment for lung diseases like asthma and pneumonia.', learnMoreLink: '/check-up' },
    { id: 3, name: 'Kidney disease diagnosis, dialysis, kidney transplants', description: 'Care for kidney disease, dialysis, and kidney transplants.', learnMoreLink: '/dental-care' },
    { id: 4, name: 'Treatment of arthritis, autoimmune diseases, joint disorders', description: 'Treatment for arthritis and autoimmune joint disorders to improve mobility.', learnMoreLink: '/skin-care' },
    { id: 5, name: 'Allergy tests, immunotherapy, reproductive health consultations', description: 'Allergy testing, immunotherapy, and reproductive health consultations.', learnMoreLink: '/skin-care' },
    { id: 6, name: 'Diagnosis and treatment of infectious diseases, vaccinations', description: 'Treatment for infectious diseases and preventive vaccinations.', learnMoreLink: '/skin-care' },
    { id: 7, name: 'Women’s health, pediatric gynecology, adolescent care', description: 'Care for women’s health, pediatric gynecology, and adolescent care.', learnMoreLink: '/skin-care' },
    { id: 8, name: 'General pediatric care, clinical and metabolic genetics, newborn screening', description: 'Pediatric care, genetic testing, and newborn screening for early detection.', learnMoreLink: '/skin-care' },
    { id: 9, name: 'Cleft surgery, ear reconstruction, aesthetic facial surgery', description: 'Surgical services for cleft lip repair, ear reconstruction, and facial surgery.', learnMoreLink: '/skin-care' },
    { id: 10, name: 'Weight management, medical nutrition counseling', description: 'Personalized weight management and nutrition counseling for better health.', learnMoreLink: '/skin-care' },
    { id: 11, name: 'Sleep disorders, ENT care, head and neck surgeries', description: 'Diagnosis and treatment of sleep disorders and ENT surgeries for head and neck issues.', learnMoreLink: '/skin-care' },
    { id: 12, name: 'Orthopedic surgery, hand surgery, limb deformity correction', description: 'Orthopedic care, including hand surgery and limb deformity correction.', learnMoreLink: '/skin-care' },
  ];
  
  

  // Sample schedule data for each service
  const schedulesData = {
    1: [
      { date: '2024-11-28', times: ['9:00 AM - 12:00 PM', '1:00 PM - 4:00 PM'] },
      { date: '2024-11-29', times: ['10:00 AM - 1:00 PM'] }
    ],
    2: [
      { date: '2024-11-28', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
      { date: '2024-11-30', times: ['9:00 AM - 12:00 PM'] }
    ],
    3: [
      { date: '2024-11-28', times: ['9:00 AM - 12:00 PM', '3:00 PM - 6:00 PM'] }
    ],
    4: [
      { date: '2024-11-29', times: ['10:00 AM - 1:00 PM'] },
      { date: '2024-11-30', times: ['11:00 AM - 2:00 PM'] }
    ],
    5: [
        { date: '2024-11-28', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: '2024-11-30', times: ['9:00 AM - 12:00 PM'] }
    ],
    6: [
        { date: '2024-11-28', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: '2024-11-30', times: ['9:00 AM - 12:00 PM'] }
    ],
    7: [
        { date: '2024-11-28', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: '2024-11-30', times: ['9:00 AM - 12:00 PM'] }
    ],
    8: [
        { date: '2024-11-28', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: '2024-11-30', times: ['9:00 AM - 12:00 PM'] }
    ],
    9: [
        { date: '2024-11-28', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: '2024-11-30', times: ['9:00 AM - 12:00 PM'] }
    ],
    10: [
        { date: '2024-11-28', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: '2024-11-30', times: ['9:00 AM - 12:00 PM'] }
    ],
    11: [
        { date: '2024-11-28', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: '2024-11-30', times: ['9:00 AM - 12:00 PM'] }
    ],
    12: [
        { date: '2024-11-28', times: ['8:00 AM - 11:00 AM', '2:00 PM - 5:00 PM'] },
        { date: '2024-11-30', times: ['9:00 AM - 12:00 PM'] }
    ],
    
  };

  const handleServiceClick = (id) => {
    setSelectedService(id);
    setSelectedDate(null);  // Reset the selected date when switching services
  };

  // Generate a list of all days in the month
  const generateCalendar = () => {
    const start = startOfMonth(new Date());
    const end = endOfMonth(new Date());
    return eachDayOfInterval({ start, end });
  };

  // Check if a specific date has available times for the selected service
  const hasAvailableTimes = (date) => {
    if (selectedService && schedulesData[selectedService]) {
      const dateString = format(date, 'yyyy-MM-dd');
      return schedulesData[selectedService].some(
        (schedule) => schedule.date === dateString
      );
    }
    return false;
  };

  // Handle selecting a date from the calendar
  const handleDateClick = (date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    setSelectedDate(dateString);
  };

  return (
    <div className="services-container">
      <h1 className="text-center">Available Services</h1>

      {/* Display services */}
      <div className="services-list">
        {servicesData.map((service) => (
          <div key={service.id} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button className='btn1' onClick={() => handleServiceClick(service.id)}>See Schedules</button>
            <Link to={service.learnMoreLink} className="learn-more-link">Learn More</Link>
          </div>
        ))}
      </div>

      {/* Show calendar if a service is selected */}
      {selectedService && (
        <div className="calendar-container">
          <h2>
            Available Schedule for {servicesData.find((service) => service.id === selectedService).name}
          </h2>

          {/* Calendar grid */}
          <div className="calendar-grid">
            {generateCalendar().map((date) => (
              <div
                key={date}
                className={`calendar-day ${hasAvailableTimes(date) ? 'available' : ''}`}
                onClick={() => hasAvailableTimes(date) && handleDateClick(date)}
              >
                {format(date, 'd')}
              </div>
            ))}
          </div>

          {/* Show times for the selected date */}
          {selectedDate && (
            <div className="schedule-times">
              <h3>Available Times for {selectedDate}</h3>
              <ul>
                {schedulesData[selectedService]
                  .filter((schedule) => schedule.date === selectedDate)
                  .map((schedule, index) => (
                    <li key={index}>
                      {schedule.times.map((time, idx) => (
                        <div key={idx}>
                          <p>{time}
                          <button
                            key={idx}
                            onClick={() => handleShow(time)} // Pass the time when clicked
                            className='btn3'
                            // style={{ marginLeft: '1em', width: '20em', height: '2em' }}
                          >
                            Make an Appointment
                          </button></p>
                        </div>
                      ))}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Modal to make an appointment */}
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
              <Form.Control type="date" name="date" value={selectedDate} readOnly required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTime">
              <Form.Label>Preferred Time</Form.Label>
              <Form.Control 
                type="text" 
                name="time" 
                value={selectedTime || ''}  // Bind selectedTime to the input value
                readOnly 
                required 
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formTime">
              <Form.Label>Preferred Time</Form.Label>
              <Form.Control type="text" name="time" value={selectedTime} readOnly required />
            </Form.Group> */}
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

export default Services;
