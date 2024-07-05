import React, { useState } from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 cursor-pointer ${
            (hovered || rating) >= star ? 'text-yellow-500' : 'text-gray-300'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onRatingChange(star)}
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.906 1.452 8.288L12 18.896 4.612 23.5l1.452-8.288L0 9.306l8.332-1.151z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
