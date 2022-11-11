import React, {useEffect, useState} from 'react';
import {nextItem} from './lazyload.slice'
import {useSelector, useDispatch} from 'react-redux'
const LazyLoadPage = () => {
const [name, setName] = useState('')
const [address, setAddress] = useState('')
const [password, setPassword] = useState('')


const handleSignUp= ()=> {
  const requestOptions = {
    method: 'POST',
    body:JSON.stringify({name,address,password}),
    headers: {'Content-Type': 'application/json'}
  } 
  fetch('http://localhost:3000/register',requestOptions)
}
useEffect(()=>{
  fetch('http://localhost:3000/me').then((res)=>res.json())
  .then((data)=>setName(data.name))
  },[])
  
  return (
    <div>
    <input placeholder="name" value={name} onKeyUp={(e)=>setName(e.target.value)}/>
    <input placeholder="address" onKeyUp={(e)=>setAddress(e.target.value)}/>
    <input placeholder="password" onKeyUp={(e)=>setPassword(e.target.value)}/>
    <button onClick={()=> handleSignUp()}> Sign Up</button>
    </div>
  );
};

export default LazyLoadPage;
