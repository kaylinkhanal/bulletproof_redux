import React from "react";
import './App.css';
import Counter from "./features/counter/counter";
import Users from "./features/counter/users/users";


function App() {
  return (
    <div className="App">
      <Counter/>
      <Users/>
    </div>
  );
}

export default App;
