import React from 'react';
import {decrement, increment} from "./counter.slice";
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);

  const onUpClick = () => {
    dispatch(increment());
  };
  const onDownClick = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Counter Component</h1>

      <h2>Current Count: {count}</h2>
      <button onClick={onUpClick}>Up</button>
      <button onClick={onDownClick}>Down</button>
      
    </div>
  );
};

export default Counter;
