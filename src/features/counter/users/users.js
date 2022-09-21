import {reset, assignName} from "./users.slice";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from 'react';
const Users = () => {
    const dispatch = useDispatch();
    const [inputName, setInputName] = useState('')
    const {name, width} = useSelector((state) => state.users);
  
    const resetName = () => {
        dispatch(reset());
    }
    const assignNewName = () => {
        dispatch(assignName(inputName));
    }
  return (
    <div>
      <h2>Current User: {name}</h2>
      <div
      style={{
          backgroundColor: 'red',
          padding: '10px',
          height: '30px',
          width: width,
      }}
      />
 <input placeholder= "width" />
 <input placeholder= "height" />
 <input placeholder= "color" />

      <button onClick={()=>resetName()}>Reset</button>
        

        <input placeholder= "name" onKeyUp={(e)=> setInputName(e.target.value)}/>
      <button  onClick={()=>assignNewName()}>Change name</button>
    </div>
  );
};

export default Users;