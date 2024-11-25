import React, { useState } from 'react';
import { format, eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  // Sample service data
  const servicesData = [
    { id: 1, name: 'Elderly care, medical consultations for age-related conditions', description: 'medical consultations for age-related conditions.', learnMoreLink: '/consultation' },
    { id: 2, name: 'Diagnosis and treatment of lung diseases, respiratory consultations', description: 'Complete health check-up for preventive care.', learnMoreLink: '/check-up' },
    { id: 3, name: 'Kidney disease diagnosis, dialysis, kidney transplants', description: 'Dental check-ups and treatments.', learnMoreLink: '/dental-care' },
    { id: 4, name: 'Treatment of arthritis, autoimmune diseases, joint disorders', description: 'Consultation and treatments for skin-related issues.', learnMoreLink: '/skin-care' },
    { id: 5, name: 'Allergy tests, immunotherapy, reproductive health consultations', description: 'Consultation and treatments for skin-related issues.', learnMoreLink: '/skin-care' },
    { id: 6, name: 'Diagnosis and treatment of infectious diseases, vaccinations', description: 'Consultation and treatments for skin-related issues.', learnMoreLink: '/skin-care' },
    { id: 7, name: 'Women’s health, pediatric gynecology, adolescent care', description: 'Consultation and treatments for skin-related issues.', learnMoreLink: '/skin-care' },
    { id: 8, name: 'General pediatric care, clinical and metabolic genetics, newborn screening', description: 'Consultation and treatments for skin-related issues.', learnMoreLink: '/skin-care' },
    { id: 9, name: 'Cleft surgery, ear reconstruction, aesthetic facial surgery', description: 'Consultation and treatments for skin-related issues.', learnMoreLink: '/skin-care' },
    { id: 10, name: 'Weight management, medical nutrition counseling', description: 'Consultation and treatments for skin-related issues.', learnMoreLink: '/skin-care' },
    { id: 11, name: 'Sleep disorders, ENT care, head and neck surgeries', description: 'Consultation and treatments for skin-related issues.', learnMoreLink: '/skin-care' },
    { id: 12, name: 'Orthopedic surgery, hand surgery, limb deformity correction', description: 'Consultation and treatments for skin-related issues.', learnMoreLink: '/skin-care' },
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
                        <p key={idx}>{time}</p>
                      ))}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Services;
