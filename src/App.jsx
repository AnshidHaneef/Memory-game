import { useState } from 'react'
import './App.scss'

function App() {

  return (
    <>
      <h1>Memory Game .. </h1>

      <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    </div>
    <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*UytexOPZKxpINEd_IBAf9A.png" alt="icon" style={{width:"250px" , height:"300px"}} />
    <div className="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
    </>
  )
}

export default App
