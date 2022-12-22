import React from "react";
import './App.css';
import Counter from "./features/counter/counter";
import Box from './features/box/box';
import Home from './features/home/home';
import Profile from './features/home/profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
