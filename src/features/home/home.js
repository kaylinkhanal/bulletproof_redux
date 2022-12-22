import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const {name} = useSelector(state=>state.users) 
  return (
    <div>
    hi {name} this is home
    <Link to="/profile"><span>GO TO PROFILE</span></Link>
    </div>
  );
};

export default Home;
