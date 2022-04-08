import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Home></Home>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
