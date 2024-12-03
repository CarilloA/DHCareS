import React, { useState } from 'react';
import arthritis1 from '../assets/img/healthAwareness/arthritis1.jpg';
import arthritis2 from '../assets/img/healthAwareness/arthritis2.jpg';
import cough2 from '../assets/img/healthAwareness/cough2.jpg';
import lupus1 from '../assets/img/healthAwareness/lupus1.jpg';
import rheumatologist1 from '../assets/img/healthAwareness/rheumatologist1.jpg';
import vaccination1 from '../assets/img/healthAwareness/vaccination1.jpg';

const categories = [
  {
    name: 'Arthritis Care',
    tips: [
      { title: 'Gouty Arthritis', img: arthritis1 },
      { title: 'Rheumatoid Arthritis', img: arthritis2 },
    ],
  },
  {
    name: 'Cough Management',
    tips: [
      { title: 'Dealing with Coughing', img: cough2 },
    ],
  },
  {
    name: 'Lupus Awareness',
    tips: [
      { title: 'Recognizing Lupus', img: lupus1 },
    ],
  },
  {
    name: 'Rheumatology Tips',
    tips: [
      { title: 'Consult a Rheumatologist', img: rheumatologist1 },
    ],
  },
  {
    name: 'Vaccination Awareness',
    tips: [
      { title: 'Importance of Vaccines', img: vaccination1 },
    ],
  },
];

const HealthAwareness = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const filteredTips =
    selectedCategory === 'All'
      ? categories.flatMap((category) => category.tips)
      : categories.find((category) => category.name === selectedCategory)?.tips || [];

  const openModal = (img) => {
    setModalImage(img);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setShowModal(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', color: '#003300' }}>Health Awareness</h1>
      <h5 style={{ textAlign: 'center', color: '#003300' }}>Click the image to download it.</h5>

      {/* Category Filter */}
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
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Health Tips Display */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredTips.length > 0 ? (
          filteredTips.map((tip, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
              }}
              onClick={() => openModal(tip.img)}
            >
              <img
                src={tip.img}
                alt={tip.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                }}
              />
              <div style={{ padding: '10px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', color: '#003300', marginBottom: '10px' }}>{tip.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#555' }}>No tips available for this category.</p>
        )}
      </div>

      {/* Modal for Image Pop-Up */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Modal"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
              marginBottom: '20px',
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking the image
          />
          <a
            href={modalImage}
            download
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              backgroundColor: '#B99C78', 
              fontSize: '16px',
              fontWeight: 'bold',
              textAlign: 'center',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#A68A68')} // Optional hover effect
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#B99C78')} // Restore original color
            onClick={(e) => e.stopPropagation()} // Prevent modal close on download
          >
            Download Image
          </a>
        </div>
      )}

    </div>
  );
};

export default HealthAwareness;
