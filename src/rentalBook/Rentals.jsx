import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import Rental from "./Rental";
import "./Rentals.css"; // Import your CSS file

const Rentals = () => {
  const rentals = [
    { title: "Mumbai, India", image: house1, price: "15000" },
    { title: "Mumbai, India", image: house2, price: "12000" },
    { title: "Mumbai, India", image: house3, price: "13000" },
    { title: "Mumbai, India", image: house4, price: "4000" },
    { title: "Mumbai, India", image: house5, price: "3500" },
    { title: "Mumbai, India", image: house1, price: "7000" },
    { title: "Mumbai, India", image: house2, price: "7000" },
    { title: "Mumbai, India", image: house3, price: "7000" },
    { title: "Mumbai, India", image: house4, price: "7000" },
    { title: "Mumbai, India", image: house5, price: "7000" },
    { title: "Mumbai, India", image: house1, price: "7000" },
    { title: "Mumbai, India", image: house2, price: "7000" },
    { title: "Mumbai, India", image: house3, price: "7000" },
    { title: "Mumbai, India", image: house4, price: "7000" },
    { title: "Mumbai, India", image: house5, price: "7000" },
  ];

  return (
    <div className="rentals-container py-3 sm:py-5">
      {rentals.map((rental, index) => (
        <div key={index} className="rental-item">
          <Rental
            title={rental.title}
            image={rental.image}
            price={rental.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Rentals;
