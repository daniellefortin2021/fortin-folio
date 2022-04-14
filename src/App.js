import React, {useState} from 'react';
import About from './components/pages/About';
import NavTabs from './components/Nav/NavTabs'
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
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
      <body>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage()}
        <footer>
        <div>
            <div><a className="footer-link" href="https://github.com/daniellefortin2021">GitHub</a>
            <a className="footer-link" href="https://www.linkedin.com/in/danielle-fortin-2899b266/">LinkedIn</a></div>
        </div>
      </footer>
      </main>
    </body >
  );
}

export default App;
