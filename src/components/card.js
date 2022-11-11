import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

const Card = (props) => {
  const { favItem } = useSelector((state) => state.home);

  return (
      <>
     <div style={{padding:'50px', margin:'34px', width:'50px', backgroundColor: props.name === favItem ? 'red': '#00cc66'}}>
        {props.name}
        </div>
    </>

  );
};

export default Card;
