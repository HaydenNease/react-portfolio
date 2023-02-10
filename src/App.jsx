import { useState } from 'react'
import "bootswatch/dist/lux/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import { Navbar, Nav, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import ProjectList from './components/projects/projectList';
import Home from './components/pages/home';

function App() {

  return (
    <div className="App">
      <Navbar>
        <Nav>
          <Nav.Link href='/react-portfolio'>Home</Nav.Link>
          <Nav.Link href='/react-portfolio/resume'>Resume</Nav.Link>
          <Nav.Link href='/react-portfolio/contact'>Contact</Nav.Link>
          <Nav.Link href='/react-portfolio/projects'>Projects</Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route
          element={<Home />}
          path="/react-portfolio">
        </Route>
        <Route
          element={<Resume />}
          path="/react-portfolio/resume">
        </Route>
        <Route
          element={<Contact />}
          path="/react-portfolio/contact">
        </Route>
        <Route
          element={<ProjectList />}
          path="/react-portfolio/projects">
        </Route>
      </Routes>
    </div>
  )
}

export default App
