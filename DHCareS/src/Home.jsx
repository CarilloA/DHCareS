import React from 'react';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import department3 from './assets/img/department/3.png';
import medicalClinic from './assets/img/department/medicalClinic.png';
import painManagement from './assets/img/department/painManagement.png';
import konsulta1 from './assets/img/department/konsulta1.jpg';
import konsulta2 from './assets/img/department/konsulta2.png';
import konsulta3 from './assets/img/department/konsulta3.png';





import adult_care from './assets/img/services/adult_care.png';
import adult_child_care from './assets/img/services/adult_child_care.png';
import child_care from './assets/img/services/child_care.png';
import old_age_care from './assets/img/services/old_age_care.png';
import orthopaedic_surgery from './assets/img/services/orthopaedic_surgery.png';
import women_health from './assets/img/services/women_health.png';
import ent_head from './assets/img/services/ent_head.png';

const Events = () => {
  // Event data
  const events = [
    { imgSrc: konsulta1, title: "Health care", subTitle: "For Everyone", description: "In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently." },
    { imgSrc: konsulta2, title: "Health care", subTitle: "For Everyone", description: "In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently." },
    { imgSrc: konsulta1, title: "Health care", subTitle: "For Everyone", description: "In healthcare sector, service excellence is the facility of the hospital as healthcare service provider to consistently." },
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
                <NavLink to='/pages/Services' className="boxed-btn3">Check Our Services</NavLink>
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

const serviceItems = [
  { imgSrc: adult_care, title: 'Adult Care', description: 'Medical consultations and care for adults' },
  { imgSrc: adult_child_care, title: 'Adult/Child Care',description: 'Medical consultations for adults and children' },
  { imgSrc: child_care, title: 'Child Care', description: 'Specialized care for children with health concerns' },
  { imgSrc: old_age_care, title: 'Old Age Care', description: 'Elderly care for age-related health issues' },
  { imgSrc: orthopaedic_surgery, title: 'Orthopaedic Surgery', description: 'Surgical solutions for musculoskeletal issues' },
  { imgSrc: women_health, title: 'Women\'s Health', description: 'Comprehensive health services for women' },
  { imgSrc: ent_head, title: 'ENT-Head and Neck Surgery', description: 'Specialized care for ENT and head disorders' },
];

const Services = () => {
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(serviceItems.length / itemsPerPage);

  // Get items for the current page
  const currentItems = serviceItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page navigation
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="our_department_area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-55">
              <h3>Services</h3>
              <p>
                We at the <strong>Konsulta Specialiste Clinic</strong> provide comprehensive care, offering specialized services for all ages, including surgeries, women's health, and preventive consultations.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {currentItems.map((service, index) => (
            <div key={index} className="col-xl-3 col-md-6 col-lg-3">
              <div className="single_department">
                <div className="department_thumb">
                  <img 
                    src={service.imgSrc}
                    className="d-block w-100 img-fluid" 
                    alt={service.title} 
                    style={{ width: '30vw', height: '30vh' }}
                  />
                </div>
                <div className="department_content" style={{ height: '12em' }}>
                  <h3><NavLink to={`/pages/Services?category=${service.title}`}>{service.title}</NavLink></h3>
                  <p>{service.description}</p>
                  <NavLink to={`/pages/Services?category=${service.title}`} className="learn-more-link">Learn More</NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="pagination-controls text-center mt-4">
          <button
            className="btn mx-2"
            style={{ backgroundColor: '#b99c78', color: '#fff', border: 'none' }}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`btn mx-1 ${currentPage === index + 1 ? '' : ''}`}
              style={{
                backgroundColor: currentPage === index + 1 ? '#b99c78' : '#fff',
                color: currentPage === index + 1 ? '#fff' : '#b99c78',
                border: '1px solid #b99c78',
              }}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn mx-2"
            style={{ backgroundColor: '#b99c78', color: '#fff', border: 'none' }}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Events/>
      {/* <ServiceArea/> */}
      <Services />
      {/* <BusinessExpert /> */}
      {/* <ExpertDoctors /> */}
    </div>
  );
};

export default Home;
