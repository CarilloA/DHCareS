import React from 'react';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import department1 from './assets/img/department/1.png';
import department2 from './assets/img/department/2.png';
import department3 from './assets/img/department/3.png';
import department4 from './assets/img/department/4.png';

import expert1 from './assets/img/experts/1.png';
import expert2 from './assets/img/experts/2.png';
import expert3 from './assets/img/experts/3.png';
import expert4 from './assets/img/experts/4.png';
import expert5 from './assets/img/experts/5.png';
import expert6 from './assets/img/experts/6.png';

const Events = () => {
  // Event data
  const events = [
    { imgSrc: department1, title: "Health care", subTitle: "For Hole Family", description: "In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently." },
    { imgSrc: department2, title: "Health care", subTitle: "For Hole Family", description: "In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently." },
    { imgSrc: department3, title: "Health care", subTitle: "For Hole Family", description: "In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently." },
  ];

  return (
    <div id="eventsCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {events.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#eventsCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {events.map((event, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={event.imgSrc}
              className="d-block w-100"
              alt={event.title}
              style={{ height: "60vh", objectFit: "cover", imageRendering: "auto", }}
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="carousel-caption-content">
                <h3 className="carousel-title">
                  <span>{event.title}</span>
                  <br />
                  <span className="carousel-subtitle">{event.subTitle}</span>
                </h3>
                <p className="carousel-description">{event.description}</p>
                <NavLink to='#' className="boxed-btn3">Check Our Services</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#eventsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#eventsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const ServiceArea = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="service_area">
      <div className="container p-0">
        <div className="row no-gutters">
          <div className="col-xl-4 col-md-4">
            <div className="single_service">
              <div className="icon">
                <i className="flaticon-electrocardiogram"></i>
              </div>
              <h3>Hospitality</h3>
              <p>Clinical excellence must be the priority for any health care service provider.</p>
              <NavLink to='#' className="boxed-btn3-white">Apply For a Bed</NavLink>
            </div>
          </div>

          <div className="col-xl-4 col-md-4">
            <div className="single_service">
              <div className="icon">
                <i className="flaticon-emergency-call"></i>
              </div>
              <h3>Emergency Care</h3>
              <p>Clinical excellence must be the priority for any health care service provider.</p>
              <NavLink to='#' className="boxed-btn3-white">+10 672 356 3567</NavLink>
            </div>
          </div>

          <div className="col-xl-4 col-md-4">
            <div className="single_service">
              <div className="icon">
                <i className="flaticon-first-aid-kit"></i>
              </div>
              <h3>Chamber Service</h3>
              <p>Clinical excellence must be the priority for any health care service provider.</p>
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
  );
};

const Departments = () => {
  return (
    <div className="our_department_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-55">
              <h3>Our Departments</h3>
              <p>
                We at the <strong>Medical - Dental CLinic</strong> help safeguard the health and safety of the university's faculty, staff, and students. We provide assistance in the assessment, protection, and improvement of health.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {[ 
            { imgSrc: department1, title: 'Medical Clinic', description: 'keeping UBians healthy and ready to keep learning'},
            { imgSrc: department2, title: 'Dental Clinic', description:  'Helping maintain the oral health of UBians'},
            { imgSrc: department3, title: 'Radiology CLinic - X-ray Services', description:  'X-rayservices used to help properly diagnosing a patient'},
            { imgSrc: department4, title: 'PT Clinic - Pain Managemnt', description:  'The Physical Therapy Clinic assists its patients through physical rehabilitation and pain management'},
          ].map((department, index) => (
            <div key={index} className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_department">
                <div className="department_thumb">
                  <img src={department.imgSrc} alt={department.title} />
                </div>
                <div className="department_content">
                  <h3><NavLink to='#'>{department.title}</NavLink></h3>
                  <p>{department.description}</p>
                  <NavLink to='#' className="learn_more">Learn More</NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const Testimonials = () => {
  return (
    <div className="testmonial_area">
      <div className="testmonial_active owl-carousel">
        {[
          { bgClass: 'testmonial_bg_1', text: 'Donec imperdiet congue orci consequat mattis...', author: 'Asana Korim' },
          { bgClass: 'testmonial_bg_2', text: 'Donec imperdiet congue orci consequat mattis...', author: 'Asana Korim' },
          { bgClass: 'testmonial_bg_1', text: 'Donec imperdiet congue orci consequat mattis...', author: 'Asana Korim' },
        ].map((testimonial, index) => (
          <div key={index} className={`single-testmonial ${testimonial.bgClass} overlay2`}>
            <div className="container">
              <div className="row">
                <div className="col-xl-10 offset-xl-1">
                  <div className="testmonial_info text-center">
                    <div className="quote">
                      <i className="flaticon-straight-quotes"></i>
                    </div>
                    <p>{testimonial.text}</p>
                    <div className="testmonial_author">
                      <h4>{testimonial.author}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BusinessExpert = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState("excellentServices");

  // Function to handle tab switching
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="business_expert_area">
      <div className="business_tabs_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  {/* Tab links */}
                  <a
                    className={`nav-link ${activeTab === "excellentServices" ? "active" : ""}`}  id="home-tab"
                    onClick={() => handleTabClick("excellentServices")}
                  >
                    Excellent Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === "qualifiedDoctors" ? "active" : ""}`}  id="profile-tab"
                    onClick={() => handleTabClick("qualifiedDoctors")}
                  >
                    Qualified Doctors
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeTab === "Departments" ? "active" : ""}`} id="contact-tab"
                    onClick={() => handleTabClick("Departments")}
                  >
                    Emergency Departments
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="border_bottom">
          <div className="tab-content" id="myTabContent">
            {[{ id: "excellentServices", title: "Leading edge care for Your family" },
              { id: "qualifiedDoctors", title: "Qualified Professionals" },
              { id: "Departments", title: "Emergency Support" }
            ].map((tabContent) => (
              <div
                key={tabContent.id}
                className={`tab-pane fade ${activeTab === tabContent.id ? "show active" : ""}`}
              >
                <div className="row align-items-center">
                  <div className="col-xl-6 col-md-6">
                    <div className="business_info">
                      <div className="icon">
                        <i className="flaticon-first-aid-kit"></i>
                      </div>
                      <h3>{tabContent.title}</h3>
                      <p>
                        Esteem spirit temper too say adieus who direct esteem. It esteems luckily
                        picture placing drawing. Apartments frequently or motionless on reasonable
                        projecting expression.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="business_thumb">
                      <img src="img/about/business.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpertDoctors = () => {
  return (
    <div className="our_department_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-55">
              <h3>Expert Doctors</h3>
              <p>
                Esteem spirit temper too say adieus who direct esteem. <br />
                It esteems luckily or picture placing drawing.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {[ 
            { imgSrc: expert1, title: 'Name' },
            { imgSrc: expert2, title: 'Name' },
            { imgSrc: expert3, title: 'Name' },
            { imgSrc: expert4, title: 'Name' },
            { imgSrc: expert5, title: 'Name' },
            { imgSrc: expert6, title: 'Name' }
          ].map((department, index) => (
            <div key={index} className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_department">
                <div className="department_thumb">
                  <img src={department.imgSrc} alt={department.title} />
                </div>
                <div className="department_content">
                  <h3><NavLink to='#'>{department.title}</NavLink></h3>
                  <p>Esteem spirit temper too say adieus who direct esteem.</p>
                  <NavLink to='#' className="learn_more">Learn More</NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Events/>
      <ServiceArea/>
      <Departments />
      <Testimonials />
      <BusinessExpert />
      <ExpertDoctors />
    </div>
  );
};

export default Home;


