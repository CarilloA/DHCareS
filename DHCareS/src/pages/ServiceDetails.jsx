import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceName } = useParams(); // Get the service name from the URL parameter

    const serviceDetails = [
        {
          id: 1,
          name: 'Arthritis',
          category: 'Adult Care',
          description: 'Arthritis involves the inflammation of joints, leading to pain and stiffness, often worsening with age.',
          details: [
            'Joint pain management',
            'Physical therapy',
            'Medication for inflammation relief',
            'Arthroplasty (joint replacement)',
          ],
        },
        {
        id: 2,
        name: 'Cardiology',
        category: 'Adult Care',
        description: 'Cardiology involves diagnosing and treating heart-related conditions.',
        details: [
            'Heart disease diagnosis and treatment',
            'Electrocardiogram (ECG)',
            'Stress testing',
            'Cardiac surgery and procedures',
        ],
        },
        {
        id: 3,
        name: 'Infectious Disease',
        category: 'Adult Care',
        description: 'Infectious Disease focuses on diseases caused by microorganisms like bacteria, viruses, fungi, and parasites.',
        details: [
            'Treatment of viral infections (e.g., HIV, hepatitis)',
            'Management of bacterial infections (e.g., tuberculosis)',
            'Vaccination programs',
            'Prevention and treatment of infectious outbreaks',
        ],
        },
        {
        id: 4,
        name: 'Internal Medicine',
        category: 'Adult Care',
        description: 'Internal Medicine focuses on the prevention, diagnosis, and treatment of adult diseases, especially complex or chronic conditions.',
        details: [
            'Management of chronic diseases (e.g., diabetes, hypertension)',
            'Preventative healthcare and screenings',
            'Comprehensive care for complex medical conditions',
            'Specialist referrals for surgery or specialized treatments',
        ],
        },
        {
        id: 5,
        name: 'Nephrology & Kidney Transplant',
        category: 'Adult Care',
        description: 'Nephrology deals with the diagnosis and treatment of kidney diseases, including kidney transplantation.',
        details: [
            'Chronic kidney disease management',
            'Dialysis treatments',
            'Kidney transplant coordination and management',
            'Management of electrolyte imbalances',
        ],
        },
        {
        id: 6,
        name: 'Optimal Weight Management',
        category: 'Adult Care',
        description: 'Optimal Weight Management focuses on achieving and maintaining a healthy body weight through various methods.',
        details: [
            'Personalized weight loss programs',
            'Nutritional counseling',
            'Physical activity and exercise plans',
            'Surgical interventions (e.g., bariatric surgery)',
        ],
        },
        {
        id: 7,
        name: 'Pulmonology',
        category: 'Adult Care',
        description: 'Pulmonology focuses on the diagnosis and treatment of respiratory diseases, including chronic conditions like asthma and COPD.',
        details: [
            'Asthma and COPD management',
            'Lung disease diagnostics (e.g., pulmonary function tests)',
            'Treatment of sleep apnea and other respiratory disorders',
            'Lung cancer detection and care',
        ],
        },
        {
        id: 8,
        name: 'Reproductive Immunology',
        category: 'Adult Care',
        description: 'Reproductive Immunology deals with immune system disorders that affect fertility and pregnancy.',
        details: [
            'Diagnosis and treatment of autoimmune disorders affecting reproduction',
            'Management of recurrent miscarriages',
            'Immunotherapy for fertility issues',
            'Collaborative care with fertility specialists',
        ],
        },
        {
        id: 9,
        name: 'Rheumatology',
        category: 'Adult Care',
        description: 'Rheumatology focuses on diagnosing and treating autoimmune and inflammatory diseases affecting the joints and connective tissues.',
        details: [
            'Rheumatoid arthritis management',
            'Systemic lupus erythematosus (SLE) treatment',
            'Treatment of osteoarthritis and other joint diseases',
            'Management of gout and other crystal-induced arthritis conditions',
        ],
        },
        {
            id: 10,
            name: 'Allergy & Immunology',
            category: 'Adult/Child Care',
            description: 'Allergy and immunology deal with diagnosing and treating allergic diseases, immune system disorders, and conditions like asthma, eczema, and autoimmune diseases.',
            details: [
                'Management of allergic rhinitis and asthma',
                'Treatment of food and drug allergies',
                'Diagnosis and treatment of immune deficiencies',
                'Immunotherapy and allergy desensitization',
            ],
        },
        {
            id: 11,
            name: 'Genetics',
            category: 'Adult/Child Care',
            description: 'Genetics focuses on diagnosing and managing inherited conditions and genetic disorders, as well as genetic counseling for families.',
            details: [
                'Genetic testing for inherited conditions',
                'Counseling for hereditary diseases and conditions',
                'Prenatal genetic screening',
                'Management of genetic syndromes',
            ],
        },
        {
            id: 12,
            name: 'Medical Nutrition',
            category: 'Adult/Child Care',
            description: 'Medical Nutrition focuses on the role of diet in preventing and treating various diseases, with individualized nutrition therapy plans.',
            details: [
                'Dietary management of diabetes and hypertension',
                'Nutrition therapy for cardiovascular diseases',
                'Weight management and obesity prevention',
                'Nutritional support in cancer treatment',
            ],
        },
        {
            id: 13,
            name: 'Vaccination',
            category: 'Adult/Child Care',
            description: 'Vaccination focuses on preventing diseases through immunization and providing vaccines for individuals of all ages.',
            details: [
                'Routine childhood vaccinations',
                'Vaccination for adults, including flu shots and COVID-19',
                'Travel-related vaccinations',
                'Immunization for special populations (e.g., pregnant women, immunocompromised patients)',
            ],
        },
        {
            id: 14,
            name: 'General Pediatrics',
            category: 'Child Care',
            description: 'General pediatrics involves the medical care of children from birth to adolescence, focusing on growth, development, and disease prevention.',
            details: [
                'Routine childhood check-ups and physical exams',
                'Management of common pediatric illnesses',
                'Vaccinations and disease prevention in children',
                'Treatment of growth and developmental concerns',
            ],
        },
        {
            id: 15,
            name: 'Geriatric Medicine',
            category: 'Old Age Care',
            description: 'Geriatric medicine focuses on the care of elderly individuals, managing chronic diseases and promoting healthy aging.',
            details: [
                'Management of chronic conditions in older adults',
                'Preventive care and health screenings for elderly',
                'Medication management and polypharmacy issues',
                'Geriatric rehabilitation and physical therapy',
            ],
        },
        {
            id: 16,
            name: 'General Orthopaedics',
            category: 'Orthopaedic Surgery',
            description: 'General orthopaedics involves the diagnosis and treatment of musculoskeletal injuries and diseases, including fractures, joint problems, and soft tissue injuries.',
            details: [
                'Fracture management and rehabilitation',
                'Treatment of arthritis and joint disorders',
                'Sports medicine and injury prevention',
                'Surgical interventions for musculoskeletal deformities',
            ],
        },
        {
            id: 17,
            name: 'Hands and Reconstructive Microsurgery',
            category: 'Orthopaedic Surgery',
            description: 'This specialty focuses on the surgical repair of complex hand injuries, congenital deformities, and reconstructive procedures using microsurgical techniques.',
            details: [
                'Reconstructive surgery for hand trauma',
                'Treatment of congenital hand deformities',
                'Nerve repair and tendon transfer in the hand',
                'Microsurgical techniques for complex reconstructions',
            ],
        },
        {
            id: 18,
            name: 'Methods of Ilizarov & Limb Deformity Correction',
            category: 'Orthopaedic Surgery',
            description: 'This specialty involves the use of the Ilizarov technique to correct limb deformities and lengthen bones, often following trauma or congenital issues.',
            details: [
                'Application of the Ilizarov external fixator',
                'Limb lengthening and deformity correction',
                'Treatment of non-union fractures using Ilizarov',
                'Management of bone infections and deformities',
            ],
        },
        {
            id: 19,
            name: 'Hip, Knee, & Ankle Reconstruction',
            category: 'Orthopaedic Surgery',
            description: 'This area focuses on reconstructive surgery for the hip, knee, and ankle joints, particularly for patients with arthritis or traumatic injuries.',
            details: [
                'Total hip and knee replacement surgery',
                'Arthroscopic surgery for knee injuries',
                'Ankle fusion and replacement procedures',
                'Rehabilitation after joint reconstruction',
            ],
        },
        {
            id: 20,
            name: 'Foot & Ankle Surgery',
            category: 'Orthopaedic Surgery',
            description: 'Foot and ankle surgery involves the diagnosis and surgical treatment of disorders affecting the lower extremities, including sports injuries and congenital deformities.',
            details: [
                'Surgical management of foot and ankle fractures',
                'Correction of congenital deformities (e.g., clubfoot)',
                'Reconstructive surgery for chronic conditions like flatfoot',
                'Ankle arthroscopy for joint problems',
            ],
        },
        {
            id: 21,
            name: 'OB-GYN',
            category: "Women's Health",
            description: 'OB-GYN focuses on the health of women, particularly reproductive health, pregnancy care, and the diagnosis and treatment of gynecological conditions.',
            details: [
                'Prenatal and postnatal care',
                'Management of menstrual disorders',
                'Fertility treatment and reproductive health',
                'Preventive care including Pap smears and breast exams',
            ],
        },
        {
            id: 22,
            name: 'Pediatric & Adolescent Gynecology',
            category: "Women's Health",
            description: 'This specialty addresses gynecological issues in children and adolescents, including early puberty and congenital abnormalities.',
            details: [
                'Management of early onset puberty and hormonal imbalances',
                'Treatment of congenital gynecological anomalies',
                'Adolescent sexual health and education',
                'Support for young women with menstrual disorders',
            ],
        },
        {
            id: 23,
            name: 'Sleep Medicine',
            category: "ENT-Head and Neck Surgery",
            description: 'Sleep medicine focuses on diagnosing and treating sleep disorders, including sleep apnea, insomnia, and other sleep-related issues.',
            details: [
                'Diagnosis and treatment of sleep apnea',
                'Management of insomnia and other sleep disorders',
                'CPAP therapy and other sleep aids',
                'Sleep studies and monitoring',
            ],
        },
        {
            id: 24,
            name: 'Facial Plastic & Aesthetics',
            category: "ENT-Head and Neck Surgery",
            description: 'Facial plastic surgery and aesthetics focus on cosmetic and reconstructive surgery of the face and neck, including aesthetic enhancement and corrective procedures.',
            details: [
                'Rhinoplasty and facial reconstruction',
                'Facial rejuvenation and aesthetic procedures',
                'Botox and filler injections for cosmetic purposes',
                'Reconstructive surgery for facial trauma',
            ],
        },
        {
            id: 25,
            name: 'Cleft Surgery & Ear Reconstruction',
            category: "ENT-Head and Neck Surgery",
            description: 'Cleft surgery and ear reconstruction focus on repairing congenital cleft lip and palate deformities, as well as reconstructing ear deformities.',
            details: [
                'Cleft lip and palate repair surgery',
                'Otoplasty and ear reconstruction',
                'Management of congenital ear anomalies',
                'Speech therapy and rehabilitation post-surgery',
            ],
        }
    ];
  

   // Find the service based on the name from the URL
   const selectedService = serviceDetails.find((s) => s.name === serviceName);

  if (!selectedService) {
    return <h2 className="not-found">Service not found!</h2>; // Handle the case where no matching service is found
  }

  return (
    <div className="service-details-container">
      <div className="service-card">
        <h1 className="service-name">{selectedService.name}</h1>
        <h3 className="service-category">{selectedService.category}</h3>
        <p className="service-description">{selectedService.description}</p>
        <ul className="service-details-list">
          {selectedService.details.map((detail, index) => (
            <li key={index} className="service-detail">{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetails;
