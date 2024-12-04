import React from 'react';
import '../assets/css/aboutus.css'; 

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us</h1>

      {/* Introduction Section */}
      <div className="about-section">
        <h2 className="section-title">Introduction</h2>
        <p className="section-content">
          Welcome to Konsulta Specialista Clinic! We are dedicated to providing
          exceptional healthcare services, ensuring a high standard of medical care
          for every patient. Our clinic is committed to improving the health and well-being
          of the community through accessible and affordable healthcare.
        </p>
      </div>

      {/* Background Section */}
      <div className="about-section">
        <h2 className="section-title">Background</h2>
        <p className="section-content">
          Konsulta Specialista Clinic has been at the forefront of
          providing comprehensive medical services in the community. Our team of
          experienced doctors and medical professionals worked to provide
          personalized care to each patient. We specialize in consultations, check-ups,
          and treatment for health conditions.
        </p>
      </div>

     {/* Achievements Section */}
      <div className="about-section">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-list">
          <div className="achievement-item"><p> Years of experience in the healthcare industry</p></div>
          <div className="achievement-item"><p> Partnered with leading healthcare providers</p></div>
          <div className="achievement-item"><p> Offer a wide range of medical services to cater to diverse patient needs</p></div>
        </div>
      </div>


    </div>
  );
};

export default About;
