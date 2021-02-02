import React, { useState } from "react";

import './App.css';

import Header from './Components/Header.js'
import Resume from './Components/Resume.js'
import About from './Components/About.js'
import Projects from './Components/Projects.js'
import Contact from './Components/Contact.js'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const App = () => {
  const [page, setPage] = useState("about")

  return (
    <span>
      <Container>
        <Row>
          <Col> <Header /> </Col>
        </Row>

        <Row>
          <Col>
            <div className="navbar">
              <span className="menu-item hover-link" onClick={() => setPage("about")}>About</span> <br />
              <span className="menu-item hover-link" onClick={() => setPage("resume")}>Resume</span> <br />
              <span className="menu-item hover-link" onClick={() => setPage("projects")}>Projects</span> <br />
              <span className="menu-item hover-link" onClick={() => setPage("contact")}>Contact</span> <br />
            </div>
            <br />
            <div>
              {page === "about" && <About />}
              {page === "resume" && <Resume />}
              {page === "projects" && <Projects />}
              {page === "contact" && <Contact />}
            </div>
          </Col>
        </Row>
      </Container>
    </span>
  );
}

export default App;
