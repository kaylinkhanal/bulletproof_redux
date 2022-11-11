import React from "react";
import './App.css';
// import Counter from "./features/counter/counter";
// import Box from './features/box/box';
// import LazyLoadPage from './features/lazyloadpage/lazyload'
import Shape from './features/shape/shape'
import Home from './features/home/home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/shape" element={  <Shape/>}></Route>
      <Route path="/" element={  <Home/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

