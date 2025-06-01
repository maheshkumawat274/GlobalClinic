// TMTTest.tsx
import React from 'react';
import ServiceCard from '../../ServiceCard';

const TMTTest: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-gray-100">
      <ServiceCard
        title="TMT (Stress Test)"
        image="/imgs/TMT.jpg"
        description="Track heart performance under physical exertion – crucial for assessing blocked arteries or angina. This test evaluates how well your heart handles work, revealing conditions that might not be detected at rest. By analyzing heart rate, rhythm, and oxygen flow during controlled physical activity, TMT helps diagnose coronary artery disease and other exercise-induced heart issues."
      />
    </div>
  );
};

export default TMTTest;
