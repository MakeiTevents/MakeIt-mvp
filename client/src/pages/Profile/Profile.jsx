import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileRightSide from "../../components/RightSide/ProfileRightSide";
import ProfileSide from "../../components/profileSide/ProfileSide";

import "./Profile.css";
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileSide />
      <div className="Profile-center">
        <ProfileCard location = 'profilePage'/>
      <PostSide/>
      </div>
      <ProfileRightSide/>
    </div>
  );
};

export default Profile;
