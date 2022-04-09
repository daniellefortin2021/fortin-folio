import React, { useState} from 'react';
import NavTabs from './NavTabs';
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio';

export default function Nav() {
    const [currentPage, setCurrentPage ] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home/>;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
};
 
// function Nav () {
//     return (
//         <nav className="nav">
//             <ul className='flex-row'>
//                 <li><a href="#about">About Me</a></li>
//                 <li>Portfolio</li>
//                 <li>Resume</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     );
// }