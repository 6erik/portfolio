import React, { useState } from "react";

import './App.css';

import Header from './Components/Header.js'
import About from './Components/About.js'
import Projects from './Components/Projects.js'
import Contact from './Components/Contact.js'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const App = () => {
  const [page, setPage] = useState("about")

  return (
    <Container>
      <Row>
        <Col> <Header /> </Col>
      </Row>

      <Row>
        <Col>
        <li className="menu-item" onClick={() => setPage("about")}>About</li>
        <li className="menu-item" onClick={() => setPage("projects")}>Projects</li>
        <li className="menu-item" onClick={() => setPage("contact")}>Contact</li>
        </Col>
      </Row>

      <Row>
        <Col>
          {page === "about" && <About />}
          {page === "projects" && <Projects />}
          {page === "contact" && <Contact />}
        </Col>
      
      </Row>
    </Container>
  );
}

export default App;
