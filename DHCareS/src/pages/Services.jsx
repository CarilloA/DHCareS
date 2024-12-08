import React, { useState } from 'react';
import '../assets/css/services.css'
const Services = () => {
  // Services Data
  const servicesData = [
    {
      category: 'Consultation',
      title: 'Free Consultation',
      description:
        'Patients are assessed and given the help they need for free. This free consultation also includes free medication for two days if needed and available. Prescriptions are also provided if necessary or requested.',
    },
    {
      category: 'Referral',
      title: 'Referral System',
      description:
        'If the clinic lacks the resources or is not currently available, the patient is referred to different health sectors.',
    },
    {
      category: 'Insurance',
      title: 'Facilitation of Accident Insurance',
      description:
        'The clinic assists employees and students in applying for assistance with UB’s affiliated insurance companies in case of accidents. Note: terms and conditions apply.',
    },
    {
      category: 'Certification',
      title: 'Health Certificate for OJTs, Practicum, Internship, Local-Off Campus Activities',
      description:
        'Before being released for OJTs, internships, and similar activities, UB students undergo thorough medical and physical exams to ensure readiness. The clinic oversees these exams and issues health certificates for those deemed fit.',
    },
    {
      category: 'Vaccination',
      title: 'Vaccinations',
      description:
        'Students and employees can avail vaccines at the university clinic for a fee. Vaccination fees vary depending on the type of vaccine.',
      subList: [
        'Hepatitis A',
        'Hepatitis B',
        'Flu Vaccine',
        'Pneumonia Vaccine',
        'Tetanus Toxoid Vaccine',
      ],
    },
    {
      category: 'Examination',
      title: 'Annual Medical and Physical Examination',
      description:
        'The University Clinic oversees the annual free medical and physical examination for UB employees.',
    },
    {
      category: 'Support',
      title: 'Breastfeeding Area',
      description:
        'Employees and students have access to private areas where they can breastfeed their children without being disturbed.',
    },
  ];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter services based on selected category
  const filteredServices =
    selectedCategory === 'All'
      ? servicesData
      : servicesData.filter((service) => service.category === selectedCategory);

  return (
    <div className="services-container">
      <h1 className="text-center">Services Offered</h1>

      {/* Category Dropdown */}
      <div className="text-center my-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-dropdown"
        >
          <option value="All">All Categories</option>
          {[...new Set(servicesData.map((service) => service.category))].map(
            (category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>

      {/* Services List */}
      <div className="services-list mt-4">
        {filteredServices.map((service, index) => (
          <div key={index} className="service-item">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.subList && (
              <ul>
                {service.subList.map((item, subIndex) => (
                  <li key={subIndex}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
