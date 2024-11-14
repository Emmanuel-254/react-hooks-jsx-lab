// src/components/Home.js
import React from 'react';

const name = "Emmanuel";  // Replace with your name
const city = "Hurlingham";  // Replace with your city

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
