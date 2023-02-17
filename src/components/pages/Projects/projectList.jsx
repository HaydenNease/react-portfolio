import Project from "./index";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import './style.css';

const ProjectList = () => {
  const projects = [
    {
      name: 'Which to Read?',
      githubUrl: 'https://github.com/Saidou25/Print-or-Film',
      liveExampleUrl: 'http://placeimg.com/640/360/any',
      screenShotFile: 'http://placeimg.com/640/320/people',
    },
    {
      name: 'Battle Jots',
      githubUrl: 'https://github.com/HaydenNease/jattle-bots',
      liveExampleUrl: 'https://powerful-crag-21824.herokuapp.com/',
      screenShotFile: 'http://placeimg.com/640/320/tech',
    },
    {
      name: 'Daily Planner',
      githubUrl: 'https://github.com/HaydenNease/daily-planner',
      liveExampleUrl: 'https://haydennease.github.io/daily-planner/',
      screenShotFile: 'http://placeimg.com/640/320/nature',
    }
  ]

  return projects.map((project, index) => {
    return (
      <a style={{ cursor: 'pointer' }} onClick={siteSelectedCallback}>
        <Col key={index}>
          <Card className="bg-dark text-white" href={`${project.liveExampleUrl}`}>
            <Card.Img src={`${project.screenShotFile}`} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>{project.name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </a>
    )
  })
}

{/* <Col key={index} style={{
        backgroundImage: `url(${project.screenShotFile})`,
        backgroundSize: 'cover'
      }} lg={12}>
        <h3>{project.name}</h3>
        <p><Link to={project.githubUrl}>Github Link</Link></p>
        {project.liveExampleUrl && (
          <p>
            <Link to={project.githubUrl}>
              <Button variant="dark">Live Example Link</Button>
            </Link>
          </p>
        )}
      </Col> */}



export default ProjectList