import React from 'react';
import logo from './logo.svg';
import './App.css';
import LukeHeader from './components/LukeHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LukeHeader />
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
    </div>
  );
}

export default App;
