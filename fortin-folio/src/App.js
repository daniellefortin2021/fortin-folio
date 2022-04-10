import React, {useState} from 'react';
import About from './components/pages/About';
import NavTabs from './components/Nav/NavTabs'
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Footer from './components/Footer';
import Portfolio from './components/pages/Portfolio';


function App() {

  const [currentPage, setCurrentPage] = useState ('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
      </main>
      <Footer></Footer>
    </div >
  );
}

export default App;
