import { useEffect, useState } from "react";
import "./App.scss";

const gameIcons = [
  "🌍",
  "🔎",
  "🔥",
  "🐱‍🏍",
  "✨",
  "👀",
  "🎈",
  "🛒",
  "🍔",
  "🍌",
  "🚽",
  "🚀",
];

function App() {

  const [pieces, setPieces] = useState([]);
  const gameLogic = () => {
    const duplicateGameIcons = [...gameIcons, ...gameIcons];

    const newGameIcons = [];
    while (newGameIcons.length < gameIcons.length * 2) {
      const randomIndex = Math.floor(Math.random() * duplicateGameIcons.length);
      newGameIcons.push({
        emoji: duplicateGameIcons[randomIndex],
        flipped: false,
        solved: false,
        position: newGameIcons.length,
      });
      duplicateGameIcons.splice(randomIndex, 1);
    }
    setPieces(newGameIcons);
  };

  useEffect(() => {
    gameLogic();
  }, []);

  function handleActive(data) {
    const newPices = pieces.map((piece) => {
      if (piece.position === data.position) {
        piece.flipped = !piece.flipped;
      }
      return piece;
    });
    setPieces(newPices);
  }


  const gameLogicForFlipped = ()=>{
     const flippedData = pieces.map(data => data.flipped )
     console.log(flippedData);
     if(flippedData.length ===  2){
      setTimeout(() => {
        if(flippedData[0].emoji === flippedData[1].emoji ){
          // success
        
        }else{
            setPieces( pieces.map(data =>{
              if(data.position ===  flippedData[0].position||
                data.position ===  flippedData[1].position){
                  data.flipped = false
                }
                return data
            }) )
        } 
      }, 800);
     }
  }

  useEffect(()=>{
    gameLogicForFlipped()
  },[pieces])

// console.log('pieces',pieces);

return (
    <>
      <h2> Memory Game Using React </h2>
      <div className="container">
        {pieces.map((data, index) => (
          <div
            className={`flip-card ${data.flipped ? "active" : ""} `}
            key={index}
            onClick={() => handleActive(data)}
          >
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
