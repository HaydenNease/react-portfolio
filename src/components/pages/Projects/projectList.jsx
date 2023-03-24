import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import './style.css';


const ProjectList = () => {
  const projects = [
    {
      name: 'Which to Read?',
      githubUrl: 'https://github.com/Saidou25/Print-or-Film',
      liveExampleUrl: 'https://saidou25.github.io/Print-or-Film/',
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
      <a key={index} href={project.liveExampleUrl} target="_blank" className="py-4">
        <Card className="bg-dark text-white">
          <Card.Img src={`${project.screenShotFile}`} alt={`${project.name}`+ " image"}/>
          <Card.ImgOverlay>
            <Card.Title>{project.name}</Card.Title>
            <Button href={project.githubUrl} target="_blank">GitHub</Button>
          </Card.ImgOverlay>
        </Card>
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