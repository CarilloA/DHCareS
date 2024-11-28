import React, { useState } from 'react';

const categories = [
  {
    name: 'Elderly Care',
    tips: [
      { title: 'Stay Active',  },
      { title: 'Healthy Eating',  },
    ],
  },
  {
    name: 'Respiratory Consultations',
    tips: [
      { title: 'Protect Your Lungs', img: '/images/lung-health-1.jpg' },
      { title: 'Avoid Smoking', img: '/images/lung-health-2.jpg' },
    ],
  },
  {
    name: 'Kidney Health',
    tips: [
      { title: 'Stay Hydrated', img: '/images/kidney-health-1.jpg' },
      { title: 'Regular Checkups', img: '/images/kidney-health-2.jpg' },
    ],
  },
  {
    name: 'Women’s Health',
    tips: [
      { title: 'Regular Screenings', img: '/images/womens-health-1.jpg' },
      { title: 'Balanced Diet', img: '/images/womens-health-2.jpg' },
    ],
  },
  {
    name: 'General Pediatric Care',
    tips: [
      { title: 'Vaccination Schedule', img: '/images/pediatric-care-1.jpg' },
      { title: 'Proper Nutrition', img: '/images/pediatric-care-2.jpg' },
    ],
  },
  {
    name: 'Weight Management',
    tips: [
      { title: 'Exercise Regularly', img: '/images/weight-management-1.jpg' },
      { title: 'Balanced Meals', img: '/images/weight-management-2.jpg' },
    ],
  },
  {
    name: 'Orthopedic Surgery',
    tips: [
      { title: 'Post-Surgery Care', img: '/images/orthopedic-1.jpg' },
      { title: 'Regular Mobility', img: '/images/orthopedic-2.jpg' },
    ],
  },
];

const HealthAwareness = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTips =
    selectedCategory === 'All'
      ? categories.flatMap((category) => category.tips)
      : categories.find((category) => category.name === selectedCategory)?.tips || [];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#003300' }}>Health Awareness</h1>

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
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
              }}
            >
              <img
              //  src={tip.img}
              //  alt={tip.title}
              //  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <div style={{ padding: '10px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', color: '#003300' }}>{tip.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#555' }}>No tips available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default HealthAwareness;
