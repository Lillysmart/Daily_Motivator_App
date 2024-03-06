import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import "./App.css";
import {Quotes} from "./Qoutes.jsx"

export const App = () => {
  const  {data , setData}= useState()
  const TodayDate = new Date();
  const time = TodayDate.getHours();
  console.log(time);
  const TimeofDay = () => {
    if (time >= 12) {
      return "Afternoon";
    } else {
      return "Morning ";
    }
  };
const handleNewQUote =()=>{
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  const setData= data
  
  });}
 
  
 
  return (
    <>
      <h1 className="heading">
        Good {TimeofDay()}! <img src="./happy.png" width={50} />
      </h1>
      <p className="p_First">ARE YOU ...</p>
      <ul>
        <li>Struggling to find the drive to push through challenges?</li>
        <li>Feeling stuck in a rut and in need of a mental pick-me-up?</li>
        <li>Looking for a spark to reignite your passion and enthusiasm?</li>
      </ul>
      <img src></img>="./click (1).png" width={100} onClick={handleNewQUote} />
      <Quotes/>
    
    </>
  );
};
export default App;
