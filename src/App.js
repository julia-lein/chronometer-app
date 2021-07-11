import React, { useState } from "react"
import './App.css'

function App() {

  const [ msecs, setMsecs] = useState(0);
  const [ secs, setSecs] = useState(0);
  const [ mins, setMins] = useState(0);
  const [ startedId, setStartedId ] = useState(0);

  const startTimer = () =>
  {
    const started = setInterval( () =>  setMsecs(prevMsecs => prevMsecs + 1), 10);
    setStartedId(started);
  }

  const stopTimer = () =>
  {
    clearInterval(startedId);
  }

  const resetTimer = () =>
  {
    setMsecs(0);
    setSecs(0);
    setMins(0);
  }

  const incrementMsecs = () =>
  {
    setMsecs(0);
    setSecs(prevSecs => prevSecs + 1);
  }

  const incrementSecs = () =>
  {
    setSecs(0);
    setMins(prevMins => prevMins + 1);
  }

  const countTime = () =>
  {

    const newMsecs = msecs === 100 ? incrementMsecs() : msecs < 10 ? `0${msecs}` : msecs;
    const newSecs = secs === 60 ? incrementSecs() : secs < 10 ? `0${secs}` : secs;
    const newMins = mins < 10 ? `0${mins}` : mins;
    return `${newMins}:${newSecs}:${newMsecs}`;
  }

  return (
    <div className="App">
      <h1>React Chrono</h1>
      <div className="timer">{countTime()}</div>
      <button onClick={ startTimer }>Start</button>
      <button onClick={ stopTimer }>Stop</button>
      <button onClick={ resetTimer }>Reset</button>
    </div>
  );
}

export default App;
