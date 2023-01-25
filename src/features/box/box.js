import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeWidth, changeHeight,changeShape} from "./box.slice";

const Box = () => {
    const {width,height, borderRadius, backgroundColor, padding} =useSelector(state=>state.box)

    console.log(borderRadius)
    const dispatch = useDispatch()
  return (
      <>
    <div style={{
        width: width,
        height:height,
        padding: padding,
        backgroundColor: backgroundColor,
        borderRadius:borderRadius
    }}>

    </div>
    <input placeholder="width"
     onKeyUp={(e)=>dispatch(changeWidth(e.target.value))}/>
      <input placeholder="height"
      onKeyUp={(e)=>dispatch(changeHeight(e.target.value))}
  />
  <input placeholder ="color" />
  <button onClick={()=> dispatch(changeShape())}> Change to circle</button>
    </>

  );
};

export default Box;
