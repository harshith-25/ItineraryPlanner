import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import { useNavigate } from 'react-router';
import SimpleBottomNavigation from './BottomNav';

function Header() {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <a href="/">
        <img title= "Get back to home page" className = "header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
      </a>
        <div>
          <form action="" className='header__center' onSubmit={() => navigate("/search")}>
            <input type="text" onSubmit={() => navigate("/search")} placeholder='Search Destination for Your Vacation'/>
            <SearchIcon onClick={() => navigate("/search")}/>
          </form>
        </div>
        <div className="profile-container" onClick={() => navigate("/")}>
          <div className="airbnb-your-home">Airbnb your home</div>
          <div className="airbnb-your-home"  onClick={() => navigate("/search")}>
            <LanguageIcon sx={{ fontSize: "1.3rem" }}/>
          </div>
          <div className="profile-div">
              <BasicMenu/>
          </div>
        </div>
        <SimpleBottomNavigation/>
    </div>
  )
}

export default Header