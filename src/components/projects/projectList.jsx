import React from "react";
import Project from "./project";
import Row from "react-bootstrap/Row";

function ProjectList() {
  const projects = [
    {
      name: 'Which to Read?',
      githubUrl: 'https://github.com/Saidou25/Print-or-Film',
      liveExampleUrl: 'https://saidou25.github.io/Print-or-Film/',
      screenShotFile: '/which-to-read.png',
    },
    {
      name: 'Battle Jots',
      githubUrl: 'https://github.com/shmuushmuu/battle-jots',
      // liveExampleUrl: '',
      screenShotFile: '/which-to-read.png',
    }
  ]

  return (
    <div>
      <h1>Projects</h1>
      <Row>
        {projects.map(currentProject => (
          <Project key={currentProject.name} currentProject={currentProject} />
        ))}
      </Row>
    </div>
  )
}

export default ProjectList