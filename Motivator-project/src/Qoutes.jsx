import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

export const Quotes =()=>{
    const {data , setData}= useState()
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
    const setData= data
    
    });
    return(
        <>
       <p>Hello</p>
        </>
    )
}
export default Quotes