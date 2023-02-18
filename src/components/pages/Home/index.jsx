import React from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {

  return (
    <div>
      <h1>Hayden Nease </h1>
      <Row>
        <Col sm={8}>
          <p>
            Hi! My name is Hayden and I'm 30 years old. I was born, raised, and continue to reside in Charlotte, NC. I've spent most of my adult life working in the food industry and in custom metal fabrication. This is my first experience with coding or web development and I'm planning to make it a career change - and have fun while doing it!
          </p>
          <p>
            When I'm not doing coursework you can usually find me playing music with my band <a href="http://www.dipstickonline.net/"><em>Dipstick</em></a> or making music videos with my buddy <a href="https://www.oschua.com/">Joshua</a>.
          </p>
        </Col>
        <Col sm={4}>
          <Image
            src="https://avatars.githubusercontent.com/u/117599421?v=4"
            className="rounded-circle border border-5"
            alt="Hayden Nease" />
        </Col>
      </Row>
    </div>
  )
}

export default Home