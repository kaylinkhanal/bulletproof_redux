import React, {useEffect, useState} from 'react';
import {decrement, increment} from "./counter.slice";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom'
//functional component: stateless


const Counter = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {count,age} = useSelector(state=>state.count)
  //if count is greater thann 10, navigate to /box
  useEffect(()=>{
    if(count >10){
      navigate('/box')
    }
  },[count])


  



  return (
    <div>
      {count}<br/>
      {age}
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button>decrement</button>
      <h1>Counter Component</h1>
    </div>
  );
};

export default Counter;
