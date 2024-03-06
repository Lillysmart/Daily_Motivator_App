import React from 'react'
import { ReactDOM } from 'react'
import { useState } from 'react'
import './App.css'


 export const App =()=>{

const TodayDate = new Date
const time= TodayDate.getHours()
console.log(time)
const TimeofDay = ()=>{
if (time >= 12){
return "Afternoon"
}else
{return "Morning "
}
}

return(
  <>
  <h1 className='heading'>Good {TimeofDay()}!</h1>
  <p>Here's a quote for today :</p>

  </>
)
};
export default App 
