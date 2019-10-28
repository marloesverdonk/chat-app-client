import React from 'react';
import './App.css';
import Chatroom from './components/Chatroom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Chatroom</h1>
      </header>
      <main className="App-main">
      <Chatroom/>
      </main>
    </div>
  );
}

export default App;
