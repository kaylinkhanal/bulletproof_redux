import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeWidth} from "./box.slice";

const Box = () => {
    const {width, backgroundColor, padding} =useSelector(state=>state.box)
    const dispatch = useDispatch()
  return (
      <>
    <div style={{
        width: width,
        padding: padding,
        backgroundColor: backgroundColor
    }}>
 
    </div>
    <input placeholder="width"
     onKeyUp={(e)=>dispatch(changeWidth(e.target.value))}/>
      <input placeholder="height"
  />
  <input placeholder ="color"/>
  <button> Change to circle</button>
    </>

  );
};

export default Box;
