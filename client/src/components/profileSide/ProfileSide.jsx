import React from "react";
// import FollowersCard from "../FollowersCard/FollowersCard";
import "./ProfileSide.css";
import NavIcons from "../NavIcons/NavIcons";
// import "../RightSide/RightSide.css";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <div>
      <h1>MakeiT</h1>
      <NavIcons />
      </div>

      {/* <FollowersCard /> */}
    </div>
  );
};

export default ProfileSide;
