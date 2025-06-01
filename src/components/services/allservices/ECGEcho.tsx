// ECGEcho.tsx
import React from 'react';
import ServiceCard from '../ServiceCard';

const ECGEcho: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-gray-100">
      <ServiceCard
        title="ECG and ECHO"
        image="/images/ecg_echo.jpg"
        description="Accurate and fast cardiac testing using Electrocardiogram and Echocardiography to assess heart rhythm and chamber function. These diagnostic tools provide critical insights into electrical activity and structural integrity of the heart, allowing early detection of abnormalities and timely treatment. Whether assessing arrhythmias or heart wall motion, these tests are essential in preventive and ongoing cardiac care."
      />
    </div>
  );
};

export default ECGEcho;
