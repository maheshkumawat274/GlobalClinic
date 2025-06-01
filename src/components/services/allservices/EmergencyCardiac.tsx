// EmergencyCardiac.tsx
import React from 'react';
import ServiceCard from '../ServiceCard';

const EmergencyCardiac: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-gray-100">
      <ServiceCard
        title="Emergency Cardiac Care"
        image="/images/emergency.jpg"
        description="On-call services for chest pain, cardiac distress – handled with speed, skill, and support. Emergency care for acute cardiac events is crucial and time-sensitive. Our team ensures rapid response, immediate diagnosis, and stabilization to prevent complications. Equipped with state-of-the-art technology, we prioritize patient survival and post-emergency recovery with compassion and efficiency."
      />
    </div>
  );
};

export default EmergencyCardiac;
