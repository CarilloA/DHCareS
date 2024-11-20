import { NavLink } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="not-found-container">
      <div className="page-not-found">
        <h1 style={{color: '#2980b9', fontSize: '9rem'}}>404</h1>
        <h2>Page Not Found</h2>
        <p className='mt-4'>Oops! It seems the page you're looking for doesn't exist.</p>
        <p className='mt-5'>Here are some helpful links instead:</p>
        <div className="navigation-links">
          <NavLink to="/" className="not-found-link">Home</NavLink>
          <NavLink to="/pages/About" className="not-found-link">About Us</NavLink>
          <NavLink to="/pages/CulinaryGallery" className="not-found-link">Culinary Gallery</NavLink>
          <NavLink to="/pages/ContactUs" className="not-found-link">Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;



{/* <style jsx>{`
        .page-not-found {
          padding: 50px;
          background-color: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          margin: 50px;
        }`}
      </style> */}