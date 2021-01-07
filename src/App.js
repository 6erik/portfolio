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
          <span className="menu-item" onClick={() => setPage("about")}>About</span>
          <span className="menu-item" onClick={() => setPage("projects")}>Projects</span>
          <span className="menu-item" onClick={() => setPage("contact")}>Contact</span>
        </Col>

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
