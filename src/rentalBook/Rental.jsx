import React from "react";

import StarIcon from '@mui/icons-material/Star';
import './Rental.css'; // Import your CSS file

const Rental = ({ title, image, price }) => {
  return (
    <div className="rental-container">
      <div className="grad"></div>
      <div className="flex">
        {/* Background */}
        <img
          src={image}
          alt=""
          className="rental-image"
        />
        {/* Title */}
        <div className="rental-title">
          {title}
          <span>&#x2022;</span>
          <p className="text-slate-200 rental-price"> ₹{price}</p>
        </div>
      </div>
      {/* Description */}
      <div className="rental-description">
        {/* Left */}
        <div className="rental-description-left">
          <p className="font-semibold">This is a rare find</p>
          <p className="-mt-1 text-gray-500">Jan 28 - Aug 9</p>
          <p className="font-semibold rental-price">₹{price}</p>
        </div>
        {/* Right */}
        <div className="rental-rating">
          <StarIcon />
          <p>5.0</p>
        </div>
      </div>
    </div>
  );
};

export default Rental;
