import {Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css'
import Footer from './Footer'
import { useState } from "react";
import Home from './Home'
import SearchPage from './SearchPage';
import Header2 from "./Header2";
import Filter from "./Filter/Icons"
import { list, list2 } from "./assets/cards-list"
import Cards from "./Cards/Cards"
import Rentals from "./rentalBook/Rentals";
import Bot from "./chatbot/bot";


function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Header2/>
        <Filter
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
        />
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/search" element = {<SearchPage/>} />
          <Route path="/hotels" element = {selectedFilter == 0 ? <Cards list= {list} /> : <Cards list={list2} />} />
          <Route path="/rentalHomes" element = {<Rentals/>} />
          <Route path="/ItineraryPlanner" element = {<Bot/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
