// Hypertension.tsx
import React from 'react';
import ServiceCard from '../ServiceCard';

const Hypertension: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-gray-100">
      <ServiceCard
        title="Hypertension & Cholesterol Management"
        image="/images/hypertension.jpg"
        description="Controlled lifestyle plans and medical intervention to lower heart disease risks. By managing high blood pressure and abnormal cholesterol levels through personalized care, we aim to reduce the risk of heart attacks and strokes. This service combines medication, dietary changes, exercise, and regular monitoring to ensure patients stay on track toward a healthier heart."
      />
    </div>
  );
};

export default Hypertension;
