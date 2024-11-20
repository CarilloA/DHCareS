import React, { useState } from 'react';

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
                    <span>{doctor.specialty}</span>
                    <p><br />
                      <strong>Available Slots:</strong>
                      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                        {doctor.schedule.map((time, index) => ( <li key={index}>{time}</li> ))}
                      </ul>
                    </p>
                    <button
                      style={{
                        padding: '10px 15px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
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
    </div>
  );
};

export default Doctors;
