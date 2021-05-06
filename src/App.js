import React, { useState, useEffect } from "react";
import './App.scss';
import Clock from "./Components/Clock"

function App() {
  const [clockMounted, setClockMounted] = useState(false);

  const toggleClock = () => {
    setClockMounted(!clockMounted)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>
            Welcome to Mili's time tracking app
        </h1>
        <h2>This is going to take a while, I'm not well versed in anything algorithm and I don't want to follow tutorials.</h2>
      </header>
      <section>
        {clockMounted && <Clock />}
        <button onClick={() => toggleClock()}>Toggle Clock!</button>
      </section>
    </div>
  );
}

export default App;
