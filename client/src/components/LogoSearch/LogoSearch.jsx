import React from "react";
import Logo from "../../img/MakeiT-logo.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      {/* <img src={Logo} alt="" className="makeit-logo" /> */}
      {/* <h1>MakeiT</h1> */}
      <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <UilSearch/>
          </div>
      </div>
    </div>
  );
};

export default LogoSearch;
