import Project from "./index";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const ProjectList = () => {
  const projects = [
    {
      name: 'Which to Read?',
      githubUrl: 'https://github.com/Saidou25/Print-or-Film',
      liveExampleUrl: 'http://placeimg.com/640/360/any',
      screenShotFile: '/which-to-read.png',
    },
    {
      name: 'Battle Jots',
      githubUrl: 'http://placeimg.com/640/360/any',
      // liveExampleUrl: '',
      screenShotFile: '/which-to-read.png',
    }
  ]

  return projects.map((project, index) => { 
    return (
      <Col key={index} style={{
        backgroundImage: `url(${project.screenShotFile})`,
        backgroundSize: 'cover'
      }} lg={4}>
        <h3>{project.name}</h3>
        <p><Link to={project.githubUrl}>Github Link</Link></p>
        {project.liveExampleUrl && (
          <p>
            <Link to={project.githubUrl}>
              <Button variant="dark">Live Example Link</Button>
            </Link>
          </p>
        )}
      </Col>
    )  
  })
}

// return <h1 key={index}>{project.name}</h1>



export default ProjectList