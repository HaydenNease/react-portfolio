import React, { useState, useEffect } from 'react';
import './App.css'
import { NavTabs, Footer, Home, Projects, Resume, Contact  } from './components';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
    
    return scrollPosition;
  };
  console.log(useScrollPosition());

  const hideBody = () => {
    if (useScrollPosition() === 0) {
      return "hidden";
    } else {
      return "visible";
    }
  }
  hideBody();
  

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home hideBody={hideBody()} />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
    </div>
  );
};

export default App