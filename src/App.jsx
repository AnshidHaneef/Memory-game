import { useEffect, useState } from "react";
import "./App.scss";

const gameIcons = ['🌍','🔎','🔥','🐱‍🏍','✨','👀','🎈','🛒','🍔','🍌','🚽','🚀']

function App() {
const [pieces,setPieces]=useState([])


  const gameLogic = ()=>{
    const duplicateGameIcons = gameIcons.concat(gameIcons)

    const newGameIcons = []
    while(newGameIcons.length<duplicateGameIcons.length*2){
      const randomIndex = Math.floor(Math.random()*duplicateGameIcons.length)
         
      newGameIcons.push({
        emoji:duplicateGameIcons[randomIndex],
        flipped:false,
        solved:false,
        position:newGameIcons.length
      }) 
      duplicateGameIcons.splice(randomIndex,1)
    }
    setPieces(newGameIcons)
  }

  useEffect(()=>{
    gameLogic()
  },[])

  return (
    <>
      <h2> Memory Game Using React </h2 >
      <div className="container">
       {pieces.map((data,index)=>(
        <div className="flip-card" key={index} >
        <div className="flip-card-inner">
          <div className="flip-card-front" />
          <div className="flip-card-back"> {data.emoji} </div>
        </div> 
      </div>
      ))}
      </div>
    </>
  );
}

export default App;
