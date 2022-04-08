import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Home></Home>
        <About></About>
      </main>
    </div>
  );
}

export default App;
