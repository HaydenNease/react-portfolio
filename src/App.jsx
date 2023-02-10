import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";

import './App.css'
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import Projects from './components/pages/projects';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to={'/resume'}>'Resume'</Link>
        <Link to={'/contact'}>'Contact'</Link>
        <Link to={'/projects'}>'Projects'</Link>
      </nav>

      <Routes>
        <Route
          element={<Resume />}
          path="/resume">
        </Route>
        <Route
          element={<Contact />}
          path="/contact">
        </Route>
        <Route
          element={<Projects />}
          path="/projects">
        </Route>
      </Routes>
    </div>
  )
}

export default App
