import React, { useState, useEffect } from "react";

export const Quotes = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const jsonData = await response.json();
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        setQuote(jsonData[randomIndex].text);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {quote && <p>{quote}</p>}
    </>
  );
};

export default Quotes;