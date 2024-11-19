import React from 'react';
import expert1 from './assets/img/experts/1.png';
import expert2 from './assets/img/experts/2.png';
import expert3 from './assets/img/experts/3.png';
import expert4 from './assets/img/experts/4.png';
import expert5 from './assets/img/experts/5.png';
import expert6 from './assets/img/experts/6.png';

const Departments = () => {
  return (
    <div className="our_department_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-55">
              <h3>Our Departments</h3>
              <p>
                Esteem spirit temper too say adieus who direct esteem. <br />
                It esteems luckily or picture placing drawing.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {[
            { imgSrc: 'img/department/1.png', title: 'Eye Care' },
            { imgSrc: 'img/department/2.png', title: 'Physical Therapy' },
            { imgSrc: 'img/department/3.png', title: 'Dental Care' },
            { imgSrc: 'img/department/4.png', title: 'Diagnostic Test' },
            { imgSrc: 'img/department/5.png', title: 'Skin Surgery' },
            { imgSrc: 'img/department/6.png', title: 'Surgery Service' },
          ].map((department, index) => (
            <div key={index} className="col-xl-4 col-md-6 col-lg-4">
              <div className="single_department">
                <div className="department_thumb">
                  <img src={department.imgSrc} alt={department.title} />
                </div>
                <div className="department_content">
                  <h3><a href="#">{department.title}</a></h3>
                  <p>Esteem spirit temper too say adieus who direct esteem.</p>
                  <a href="#" className="learn_more">Learn More</a>
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
  return (
    <div className="business_expert_area">
      <div className="business_tabs_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="nav" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Excellent Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Qualified Doctors</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Emergency Departments</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="border_bottom">
          <div className="tab-content" id="myTabContent">
            {[
              { id: 'home', title: 'Leading edge care for Your family' },
              { id: 'profile', title: 'Leading edge care for Your family' },
              { id: 'contact', title: 'Leading edge care for Your family' },
            ].map((tabContent, index) => (
              <div key={index} className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} id={tabContent.id} role="tabpanel" aria-labelledby={`${tabContent.id}-tab`}>
                <div className="row align-items-center">
                  <div className="col-xl-6 col-md-6">
                    <div className="business_info">
                      <div className="icon">
                        <i className="flaticon-first-aid-kit"></i>
                      </div>
                      <h3>{tabContent.title}</h3>
                      <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
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
  const doctors = [
    { imgSrc: 'expert1', name: 'Mirazul Alom', specialization: 'Neurologist' },
    { imgSrc: 'expert2', name: 'Mirazul Alom', specialization: 'Neurologist' },
    { imgSrc: 'expert3', name: 'Mirazul Alom', specialization: 'Neurologist' },
    { imgSrc: 'expert4', name: 'Mirazul Alom', specialization: 'Neurologist' },
    { imgSrc: 'expert5', name: 'Mirazul Alom', specialization: 'Neurologist' },
    { imgSrc: 'expert6', name: 'Mirazul Alom', specialization: 'Neurologist' }
  ];

  return (
    <div className="expert_doctors_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="doctors_title mb-55">
              <h3>Expert Doctors</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="expert_active owl-carousel">
              {doctors.map((doctor, index) => (
                <div key={index} className="single_expert">
                  <div className="expert_thumb">
                    <img src={doctor.imgSrc} alt={doctor.name} />
                  </div>
                  <div className="experts_name text-center">
                    <h3>{doctor.name}</h3>
                    <span>{doctor.specialization}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmergencyContact = () => {
  return (
    <div className="Emergency_contact">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-xl-6">
            <div className="single_emergency d-flex align-items-center justify-content-center emergency_bg_1 overlay_skyblue">
              <div className="info">
                <h3>For Any Emergency Contact</h3>
                <p>Esteem spirit temper too say adieus.</p>
              </div>
              <div className="info_button">
                <a href="#" className="boxed-btn3-white">+10 378 4673 467</a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="single_emergency d-flex align-items-center justify-content-center emergency_bg_2 overlay_skyblue">
              <div className="info">
                <h3>Make an Online Appointment</h3>
                <p>Esteem spirit temper too say adieus.</p>
              </div>
              <div className="info_button">
                <a href="#" className="boxed-btn3-white">Make an Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Departments />
      <Testimonials />
      <BusinessExpert />
      <ExpertDoctors />
      <EmergencyContact />
    </div>
  );
};

export default Home;
