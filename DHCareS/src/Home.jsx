import React from 'react';
import { NavLink } from 'react-router-dom';

import ubclinic1 from './assets/img/ubclinic/ubclinic1.jpg';
import ubbuilding1 from './assets/img/ubclinic/ubbuilding1.png';

const Home = () => {
  const events = [
    { imgSrc: ubclinic1 },
    { imgSrc: ubbuilding1 },
  ];

  return (
    <div>
      <div id="eventsCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
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

        <div className="carousel-inner">
          {events.map((event, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="carousel-image-wrapper" style={{ position: 'relative', height: '60vh' }}>
                <img
                  src={event.imgSrc}
                  className="d-block w-100"
                  alt={`Event ${index + 1}`}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                <div className="carousel-overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(195, 21, 29, 0.9)', // Semi-transparent red
                  zIndex: 1
                }}></div>
              </div>
            </div>
          ))}
        </div>

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

      {/* More content section */}
      <div className="more-content-section" style={{ padding: '40px 0', textAlign: 'center' }}>
        <h3>Insert More Content</h3>
        <p>This is a placeholder for additional content below the carousel. You can add any information here such as promotions, news, or upcoming events.</p>
      </div>
    </div>
  );
};

export default Home;
