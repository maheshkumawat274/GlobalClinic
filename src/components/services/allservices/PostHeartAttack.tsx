// PostHeartAttack.tsx
import React from 'react';
import ServiceCard from '../ServiceCard';

const PostHeartAttack: React.FC = () => {
  return (
    <div className="py-10 px-4 md:px-10 bg-gray-100">
      <ServiceCard
        title="Post-Heart Attack Care"
        image="/images/post_heart_attack.jpg"
        description="Structured recovery and lifestyle guidance post-heart event to prevent recurrence. Our post-heart attack care includes cardiac rehabilitation, medication adherence, mental health support, and lifestyle adjustments. We work closely with patients and their families to reduce the risk of another heart event while helping patients return to normal life with confidence and control."
      />
    </div>
  );
};

export default PostHeartAttack;
