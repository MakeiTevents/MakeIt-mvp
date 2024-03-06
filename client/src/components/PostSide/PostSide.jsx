import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";
import LogoSearch from "../LogoSearch/LogoSearch";

const PostSide = () => {
  return (
    <div className="PostSide">
      <LogoSearch />
      <PostShare/>
      <Posts/>
    </div>
  );
};

export default PostSide;
