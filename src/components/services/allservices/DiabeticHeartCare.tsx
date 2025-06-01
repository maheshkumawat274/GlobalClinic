// DiabeticHeartCare.tsx
import React from 'react';
import ServiceCard from '../ServiceCard';

const DiabeticHeartCare: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-gray-100">
      <ServiceCard
        title="Diabetic Heart Care"
        image="/images/diabetic_heart.jpg"
        description="Specialized cardiology for diabetes patients prone to heart disease complications. Diabetes significantly increases the risk of cardiovascular disease, so we offer targeted monitoring and customized plans. Our team blends diabetes care with cardiac wellness through diagnostics, medication management, and lifestyle interventions to ensure comprehensive protection."
      />
    </div>
  );
};

export default DiabeticHeartCare;
