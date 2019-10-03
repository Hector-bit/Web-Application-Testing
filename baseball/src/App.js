import React from 'react';
import logo from './logo.svg';
import './App.css';
import Strikes from './components/Strikes';
import Balls from './components/Balls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>the baseball scores will be displayed right below this line of text</h2>
        <Strikes></Strikes>
        <Balls></Balls>
      </header>
    </div>
  );
}

export default App;
