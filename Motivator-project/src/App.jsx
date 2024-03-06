import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import "./App.css";
import {Quotes} from "./Qoutes.jsx"

export const App = () => {
  const [showQuotes, setShowQuotes] = useState(false);

  const TodayDate = new Date();
  const time = TodayDate.getHours();

  const TimeofDay = () => {
    if (time >= 12) {
      return "Afternoon";
    } else {
      return "Morning";
    }
  };

  const handleNewQuote = () => {
    setShowQuotes(true);
  };

  return (
    <>
      <h1 className="heading">
        Good {TimeofDay()}! <img src="./happy.png" alt="Happy Icon" width={50} />
      </h1>
      <p className="p_First">ARE YOU ...</p>
      <ul>
        <li>Struggling to find the drive to push through challenges?</li>
        <li>Feeling stuck in a rut and in need of a mental pick-me-up?</li>
        <li>Looking for a spark to reignite your passion and enthusiasm?</li>
      </ul>
      <img src="./click (1).png" alt="Click Icon" width={100} onClick={handleNewQuote} />

      {showQuotes && <Quotes />}
    </>
  );
};

export default App;
