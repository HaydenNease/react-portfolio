import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function Project({ currentProject }) {

  return (
    <Col style={{
      backgroundImage: `url(${currentProject.screenShotFile})`,
      backgroundSize: 'cover'
    }} lg={4}>
      <h3>{currentProject.name}</h3>
      <p><Link to={currentProject.githubUrl}>Github Link</Link></p>
        {currentProject.liveExampleUrl && (
            <p>
              <Link to={currentProject.githubUrl}>
                <Button variant="dark">Live Example Link</Button>
              </Link>
            </p>
        )}
    </Col>
  )
}

export default Project