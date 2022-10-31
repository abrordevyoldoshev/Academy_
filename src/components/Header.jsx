import React, {useState} from "react";
import { MdLanguage } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import ozim from '../assets/img/photo_2022-09-18_00-28-01.jpg'
import MenuToggle from "./MenuToggle";
const Header = () => {
  return (
    <header className="header-section">

      <div className="header-content">

        <div  className='trigger'>
         <MenuToggle/>
          <div className='search-dashboard'>
            <form>
              <input type="text" placeholder="search..." />
            </form>
          </div>
        </div>
            <div className="content-r">
          <i className='icon-logo'>
            <MdLanguage />
          </i>
          <i className='icon-logo'>
            <BsBell />
          </i>
          <div className="logo-img">
            <img src={ozim} alt="" />
          </div>
          <i className='icon-logo'>
            <FiSettings />
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
