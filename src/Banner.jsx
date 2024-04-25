import React, { useState } from 'react'
import "./Banner.css"
import "./index.css"
import Button from '@mui/material/Button';
import Search from './Search';
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false)

  return (
    <>
      <div className="banner__search">
            {showSearch && <Search />}
            <Button onClick={() => navigate("/hotels")} className="banner__searchButton" variant = "outlined">{showSearch ? "Luxury Hotels" : "Luxury Hotels" }</Button>
            <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant = "outlined">{showSearch ? "Hide" : "Search Dates" }</Button>
            <Button onClick={() => navigate("/rentalHomes")} className="banner__searchButton" variant = "outlined">{showSearch ? "Rental Homes" : "Rental Homes" }</Button>
            <Button onClick={() => navigate("/ItineraryPlanner")} className="banner__searchButton" variant = "outlined">{showSearch ? "Itinerary Planner" : "Itinerary Planner" }</Button>
      </div>
      <div className='banner'>
          {!showSearch && (
            <div className="banner__info">
              <h1>Get out and stretch your imagination</h1>
              <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
              <Button onClick={() => navigate('/search')} variant='outlined'>Explore World</Button>
            </div>
          )}
          {showSearch && <Search />}
      </div>
    </>
  )
}

export default Banner