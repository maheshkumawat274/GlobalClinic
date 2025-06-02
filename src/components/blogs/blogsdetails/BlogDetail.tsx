// BlogDetail.tsx
import React from "react";

const BlogDetail: React.FC = () => {
  return (
    <div className="py-10 px-4 sm:px-16 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-lg">
        <img
          src="/imgs/heart-attack.avif"
          alt="Heart Attack Warning"
          className="w-full h-64 sm:h-96 object-cover rounded-md mb-6"
        />

        <p className="text-sm text-[#046381] font-semibold uppercase mb-2">
          Heart Care
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Heart Attack Warning Signs You Should Never Ignore
        </h1>

        <p className="text-sm text-gray-500 mb-6">Published on 27 MAY 2025</p>

        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            A heart attack is a medical emergency that occurs when blood flow to the heart is suddenly blocked. Recognizing the warning signs early can save lives. Unfortunately, many people ignore these signs or mistake them for less serious conditions.
          </p>

          <h2 className="text-2xl font-semibold text-[#046381]">
            Common Warning Signs Include:
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Chest pain or discomfort, often in the center or left side</li>
            <li>Shortness of breath with or without chest discomfort</li>
            <li>Pain in arms, back, neck, jaw, or stomach</li>
            <li>Sudden cold sweat, nausea, or lightheadedness</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#046381]">
            When to Seek Immediate Help
          </h2>
          <p>
            If you or someone around you experiences any of these symptoms for more than a few minutes, call emergency services immediately. Time is muscle — the faster you get treatment, the better the chances of survival.
          </p>

          <h2 className="text-2xl font-semibold text-[#046381]">
            Prevention Tips
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Maintain a healthy diet low in saturated fats</li>
            <li>Exercise regularly (at least 30 minutes a day)</li>
            <li>Avoid smoking and limit alcohol consumption</li>
            <li>Manage stress and maintain regular check-ups</li>
          </ul>

          <p className="italic text-gray-600">
            Your heart health is in your hands. Be aware, stay informed, and
            act early.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
