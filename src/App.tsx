import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  const arr = [1,2,3]
  const time = new Date();
  console.log(typeof time);
  return (

    <div className="App">
      <h1>24 Hour Live Custom Component Clock</h1>
      <Clock/>
      <List1 initialValues={[1,2,3]} label="List1" />
      <List2 initialValues={[4,5]} label="List2"/>
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
