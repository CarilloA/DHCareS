import React, { useState } from "react";

const Faq = () => {
  const steps = [
    {
      icon: "fa fa-solid fa-calendar",
      title: "Step 1",
      description:
        "Schedule the appointment. You can book an appointment on-site, via cellphone/landline, or through Facebook Messenger.",
    },
    {
      icon: "fa fa-solid fa-envelope",
      title: "Step 2",
      description: "Await confirmation. Our team will confirm your appointment shortly.",
    },
    {
      icon: "fa fa-solid fa-bell",
      title: "Step 3",
      description:
        "A text reminder will be sent 2 days prior to the appointment. Please reply to confirm or cancel.",
    },
  ];

  const faqData = [
    {
      question: "What are the clinic hours?",
      answer: "The clinic is open from 8:0 AM to 7:00 PM, Monday to Friday.",
    },
    {
      question: "Is walk-in consultation available?",
      answer:
        "Yes, walk-in consultations are available, but it's recommended to schedule an appointment to avoid long waiting times.",
    },
    {
      question: "What are your telephone services?",
      answer:
        "Contact us at Phone No: +639452302676 or Landline:+63 (074) 4247086.",
    },
    {
      question: "What are your social media handles?",
      answer: (
        <div>
          <p>You can find us on:</p>
          <ul style={{ listStyle: "none", padding: "0", margin: "0", paddingLeft: "20px" }}>
            <li style={{ marginBottom: "10px" }}>
              <a
                href="https://www.facebook.com/p/Konsulta-Specialista-Clinic-100077613285900/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#1877F2",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <i className="fab fa-facebook" style={{ fontSize: "18px" }}></i>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/konsulta_specialista_clinic/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#E1306C",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <i className="fab fa-instagram" style={{ fontSize: "18px" }}></i>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      ),
    }    
    
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faqPage">
      {/* Header */}
      <header className="faq-header text-center py-4">
        <h1>Frequently Asked Questions</h1>
        <p>
          Find answers to the most common questions about our clinic and services.
        </p>
      </header>

      {/* Consultation Process */}
      <section className="consultation-process container py-5">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8 col-xxl-7">
            <h5
              className="fw-bold"
              style={{
                fontSize: "1.25rem", // Adjust the size as needed
                fontWeight: "600",   // Optional: tweak the font weight
              }}
            >
              How to Schedule an Appointment
            </h5>
            <p className="lead text-muted mt-2">
              Follow these simple steps to book your appointment at Konsulta Specialista Clinic
            </p>
          </div>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div className="col-md-4" key={index}>
              <div className="text-center position-relative mb-4">
                {/* Step Icon */}
                <div
                  className="step-icon mx-auto bg-primary border rounded-circle d-flex align-items-center justify-content-center shadow"
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#003300", // Clinic's brand color
                    color: "#fff",
                  }}
                >
                  <i
                    className={`${step.icon} text-white`}
                    style={{ fontSize: "40px" }}
                    aria-hidden="true" // Accessibility improvement
                  ></i>
                </div>
                {/* Step Title */}
                <h4 className="mt-3 fs-5 fw-bold">{step.title}</h4>
                {/* Step Description */}
                <p className="lead text-muted mt-4 fs-6 px-lg-3">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Search Bar for FAQs */}
      <div className="faq-search-bar text-center my-4">
        <input
          type="text"
          placeholder="Search for a question..."
          className="form-control w-50 mx-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ List */}
      <main className="faq-container container py-5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div className="faq-item mb-4" key={index}>
              <h4 className="faq-question fw-bold">{faq.question}</h4>
              <p className="faq-answer text-muted">{faq.answer}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No matching questions found.</p>
        )}
      </main>
    </div>
  );
};

export default Faq;