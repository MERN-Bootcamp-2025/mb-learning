import React from "react";

function App(){
  const currentDate = new Date().toDateString();
  return(
    <div className="app-container">
        <h1>Arzoo Jain</h1>
        <p>Hey, I am Arzoo, I am a passionate software engineer trainee. I love building web pages using React js and to explore more web technoloies.
          Let me introduce you to some of my tech skills: 
        </p>
        <ul>
          <li>HTML, CSS</li>
          <li>Javascript</li>
          <li>React JS</li>
          <li>Node JS</li>
          <li>UI/UX</li>
        </ul>
        <p><strong>Today's Date:</strong> {currentDate}</p>
    </div>
  )
}

export default App;