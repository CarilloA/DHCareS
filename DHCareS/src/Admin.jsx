import React, { useState } from 'react';

const Admin = () => {
  // State to track the current status
  const [status, setStatus] = useState('PENDING');

  // Sample data for appointments
  const appointments = {
    'Adult Care': [
      { id: 1, name: 'John Doe', status: 'PENDING' },
      { id: 2, name: 'Jane Smith', status: 'FINISHED' },
    ],
    'Adult/Child Care': [
      { id: 3, name: 'Mike Johnson', status: 'PENDING' },
      { id: 4, name: 'Anna Brown', status: 'FINISHED' },
    ],
    'Elderly Care': [
      { id: 5, name: 'Sarah White', status: 'PENDING' },
      { id: 6, name: 'David Black', status: 'FINISHED' },
    ],
    'Orthopaedic Surgery': [
      { id: 7, name: 'Chris Green', status: 'PENDING' },
      { id: 8, name: 'Emily Blue', status: 'FINISHED' },
    ],
    'Women\'s Health': [
      { id: 9, name: 'Linda Gray', status: 'PENDING' },
      { id: 10, name: 'Kelly Yellow', status: 'FINISHED' },
    ],
    'ENT-Head and Neck Surgery': [
      { id: 11, name: 'Steven Purple', status: 'PENDING' },
      { id: 12, name: 'Rachel Brown', status: 'FINISHED' },
    ],
  };

  // Filter appointments based on the selected status
  const filteredAppointments = Object.keys(appointments).reduce((acc, category) => {
    acc[category] = appointments[category].filter(appointment => appointment.status === status);
    return acc;
  }, {});

  return (
    <div className="admin-container">
      <h1>Appointments Management</h1>
      
      {/* Buttons to toggle between Pending and Finished */}
      <div>
        <button 
          onClick={() => setStatus('PENDING')} 
          style={{ margin: '0 10px', padding: '5px 10px', cursor: 'pointer' }}>
          PENDING
        </button>
        <button 
          onClick={() => setStatus('FINISHED')} 
          style={{ margin: '0 10px', padding: '5px 10px', cursor: 'pointer' }}>
          FINISHED
        </button>
      </div>
      
      {/* Conditional rendering of tables based on the selected status */}
      <div>
        {Object.keys(filteredAppointments).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <table border="1" style={{ width: '100%', marginBottom: '20px' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments[category].map((appointment) => (
                  <tr key={appointment.id}>
                    <td>{appointment.name}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.status}</td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
