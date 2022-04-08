import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Home></Home>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
