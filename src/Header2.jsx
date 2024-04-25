import React, { useState } from 'react';
import "./Header.css";
import logo from "./assets/logo/long-logo.png";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function Header2() {
    const [showToSearch, setShowToSearch] = useState(false);
    const nav = useNavigate()

    return (
        <>
            {!showToSearch && (
                <div className='navbar'>
                        <img src={logo} alt="logo" className="navbar-logo" onClick={() => nav("/")}/>
                    <div className="search-bar" onClick={() => setShowToSearch(!showToSearch)}>
                        <div className="search-bar-text">Any Week</div>
                        <div className="search-bar-text">Any Where</div>
                        <div className="search-bar-text2">Add Guests</div>
                        <div className="search-icon-div">
                            <SearchRoundedIcon className="search-icon" />
                        </div>
                    </div>
                    <div className="profile-container">
                        <div className="airbnb-your-home" onClick={() => nav("/search")}>Airbnb your home</div>
                        <div className="airbnb-your-home">
                            <LanguageIcon sx={{ fontSize: "1.3rem" }} onClick={() => nav("/hotels")}/>
                        </div>
                        <div className="profile-div">
                            <BasicMenu/>
                        </div>
                    </div>
                    <SimpleBottomNavigation/>
                </div>
            )}
            {showToSearch && <Header/>}
        </>
    );
}

export default Header2;
