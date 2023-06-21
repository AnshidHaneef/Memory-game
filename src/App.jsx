import { useState } from "react";
import "./App.scss";

const gameIcons = ['🌍','🔎','🔥','🐱‍🏍','✨','👀','🎈','🛒','🍔','🍌','🚽','🚀']


function App() {
  console.log(gameIcons);
  return (
    <>
      <h1>Memory Game .. </h1>
      <div className="container">
       {gameIcons.map((data,index)=>(
        <div className="flip-card" key={index} >
        <div className="flip-card-inner">
          <div className="flip-card-front" />
          <div className="flip-card-back"> {data} </div>
        </div> 
      </div>
      ))}
      </div>
    </>
  );
}

export default App;
