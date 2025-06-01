// PreventiveCheckups.tsx
import React from 'react';
import ServiceCard from '../ServiceCard';

const PreventiveCheckups: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-gray-100">
      <ServiceCard
        title="Preventive Heart Checkups"
        image="/images/preventive.jpg"
        description="Regular screening to detect issues early – includes BP monitoring, ECG, cholesterol tests, and risk profiling. Regular monitoring of cardiovascular parameters like blood pressure, ECG, and cholesterol levels can identify risks early, empowering timely intervention. With tailored health profiling and periodic screenings, patients gain proactive insight into heart health, enabling preventive strategies to reduce the chance of future complications."
      />
    </div>
  );
};

export default PreventiveCheckups;
