import React from 'react';


const Map = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Konsulta Specialista Clinic Location</h2>
      <div style={{ border: '2px solid #003300', borderRadius: '8px', overflow: 'hidden', maxWidth: '800px', margin: '0 auto' }}>
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2519593877114!2d120.59602867514319!3d16.412025184318246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a10008a3550f%3A0xa21178e9af841cd2!2sKonsulta%20Specialista%20Clinic!5e0!3m2!1sen!2sph!4v1732549775721!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            gestureHandling="cooperative"
            />

      </div>
      <p>Find us at the University of Baguio using the map above.</p>
    </div>
  );
};

// const EmergencyContact = () => {
//   return (
//     <div className="Emergency_contact">
//       <div className="container-fluid p-0">
//         <div className="row no-gutters">
//           <div className="col-xl-6">
//             <div className="single_emergency d-flex align-items-center justify-content-center emergency_bg_1 overlay_skyblue">
//               <div className="info">
//                 <h3>For Any Emergency Contact</h3>
//                 <p>Esteem spirit temper too say adieus.</p>
//               </div>
//               <div className="info_button">
//                 <a href="#" className="boxed-btn3-white">+10 378 4673 467</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-6">
//             <div className="single_emergency d-flex align-items-center justify-content-center emergency_bg_2 overlay_skyblue">
//               <div className="info">
//                 <h3>Make an Online Appointment</h3>
//                 <p>Esteem spirit temper too say adieus.</p>
//               </div>
//               <div className="info_button">
//                 <a href="#" className="boxed-btn3-white">Make an Appointment</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Home = () => {
//   return (
//     <div>
//       <Departments />
//       <Testimonials />
//       <BusinessExpert />
//       <ExpertDoctors />
//       <EmergencyContact />
//     </div>
//   );
// };

export default Map;


