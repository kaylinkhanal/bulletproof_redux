import React from "react";
import './App.css';
import Home from "./containers/home";
import Box from './features/box/box';
import Counter from './features/Counter/counter'
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />

      <Route path="/box" element={<Box />} />
    </Routes>
    </div>
  );
}

export default App;

//1 install and setup routing using react-router-dom
//2 /box