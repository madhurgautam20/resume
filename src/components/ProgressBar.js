// src/components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ completionPercentage }) => {
  return (
    <div className="mb-6">
      <span className="text-red-500 font-semibold">{completionPercentage}% </span>
      <span>Profile Completion</span>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
        <div
          className="bg-red-600 h-1.5 rounded-full"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
