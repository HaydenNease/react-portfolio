import React from 'react';
import './style.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import topImg from "../../../public/top.png"

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="headerContainer" style={{ backgroundImage: `url(${topImg})` }}>
        <Row>
          <Nav className="nav-tabs bg-dark p-0 flex-nowrap">
            <Nav.Item>
              <Nav.Link
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link border-start rounded-top'}
              >About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row >
      </div>
    </header>
  );
}

export default NavTabs;
