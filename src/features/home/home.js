import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addProducts, setFavItem} from './home.slice'
import Card from '../../components/card'
const Home = ()=> {
  const { products } = useSelector((state) => state.home);
  const dispatch = useDispatch()
  const fetchProducts = ()=> {
    fetch('http://localhost:3000/products').then((res)=> res.json())
    .then((data)=> dispatch(addProducts(data.productList)))
  }
  useEffect(()=>{
    fetchProducts()
  },[])

  const addFavorite=(name)=>{
    dispatch(setFavItem(name))
  }
  return( <div style={{display:'flex'}}>
    <input placeholder="your favorite list" onKeyUp={(e)=>{
      addFavorite(e.target.value)}}/>
    {products.length>0 && products.map((item,id)=>{
      return  <Card name={item.name}/> 
    })}
  </div>)
}

export default Home