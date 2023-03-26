import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavTabs from '../NavTabs';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import './style.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
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
    <Container className="bg-white border-dark border-0 rounded">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <Row>
        <Col className='container-fluid'>
          {/* Here we are calling the renderPage method which will return a component  */}
          {renderPage()}
        </Col>
      </Row>
    </Container>
  );
}
