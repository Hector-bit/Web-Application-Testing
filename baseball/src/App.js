import React, {useState} from "react";
import "./App.css";
import HitButton from './components/buttons/HitButton';
import FoulButton from './components/buttons/FoulButton';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  if(strikes === 3){
    setStrikes(0);
    setBalls(0);
  }

  if(balls === 4){
    setStrikes(0);
    setBalls(0);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Strikes</h2>
            <div className="home__score">{strikes}</div>
          </div>
          {/* <div className="timer">00:03</div> */}
          <div className="away">
            <h2 className="away__name">Balls: </h2>
            <div className="away__score">{balls}</div>
          </div>
        </div>
        {/* <BottomRow /> */}
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button className="strikeButton" onClick={() => setStrikes(strikes + 1)}>Strike</button>
          <button className="ballButton" onClick={() => setBalls(balls + 1)}>Ball</button>
          <button className="foulButton" onClick={() => FoulButton(setStrikes, strikes)}>Foul</button>
          <button className="hitbutton" onClick={() => HitButton(setStrikes, setBalls)}>Hit</button>
        </div>
      </section>
    </div>
  );
}

export default App;
