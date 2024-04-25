import React, { useState } from 'react'
import "./Search.css"
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate : startDate,
    endDate: endDate,
    key: "selection"
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  
return (
  <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Number of Guests <PeopleIcon /></h2>
      <input type="number" min={0} defaultValue={2}/>
      <Button onClick={() => navigate('/search')}>Search Airbnb</Button>
  </div>
 )
}

export default Search