import React, { useEffect, useState } from "react";
import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { useParams } from "react-router-dom";
import { getAllUser } from "../../api/UserRequests";
import User from "../User/User";

const Posts = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  if(!posts) return 'No Posts';
  if(params.id) posts = posts.filter((post)=> post.userId===params.id)
  return (
    <div className="Posts">
      {/* {persons.map((person, id) => {
        if (person._id == posts.userId) return <User person={person} key={id} />;
      })} */}
      {loading
        ? "Fetching posts...."
        : 
        posts.map((post, id) => {
          return <Post data={post} key={id} />;
          })}
    </div>
  );
};

export default Posts;
