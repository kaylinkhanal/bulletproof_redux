import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeWidth , changeShape, changeHeight,changeColor} from "./box.slice";

const Box = () => {
    const {width,height, backgroundColor, padding, borderRadius} =useSelector(state=>state.box)
    const dispatch = useDispatch()
  return (
      <>
    <div style={{
        width: width,
        height:height,
        padding: padding,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor
    }}>
 
    </div>
    <input placeholder="width"
     onKeyUp={(e)=>dispatch(changeWidth(e.target.value))}/>
      <input placeholder="height"
       onKeyUp={(e)=>dispatch(changeHeight(e.target.value))}/>
  <input placeholder ="color"
    onKeyUp={(e)=>dispatch(changeColor(e.target.value))}
  />
  <button onClick={()=> dispatch(changeShape())}> Change to circle</button>
    </>

  );
};

export default Box;
