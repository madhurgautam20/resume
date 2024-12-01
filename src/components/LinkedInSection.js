// src/components/LinkedInSection.js
import React from 'react';
import { Link } from 'react-router-dom';

const LinkedInSection = ({ linkedin }) => {
  // Only render the LinkedIn section if the linkedin URL is provided
  if (!linkedin) return null;

  return (
    <div className="py-8 w-full bg-blue-500">
      <Link to={linkedin} className="text-white text-xl">
        LinkedIn
      </Link>
    </div>
  );
};

export default LinkedInSection;
