import React from 'react';
import './App.css';
import Chatroom from './components/Chatroom'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Chatroom</h1>
      </header>
      <main className="App-main">
      <Chatroom/>
      <Login/>
      <Signup/>
      </main>
    </div>
  );
}

export default App;
