import React from "react";
import "./NavIcons.css"
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Chat from "../../img/chat.png";
import Explore from "../../img/binocular.jpg";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      <img src={Explore} alt="" />
      <img src={Noti} alt="" />
      <Link to="../chat">
        <img src={Chat} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
