import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {
  const {name} = useSelector(state=>state.users) 
  return (
    <div>
    hi {name} this is profile
    {/* <Link to="home" >Go to profile</Link> */}
    </div>
  );
};

export default Profile;
