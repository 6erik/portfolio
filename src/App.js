import React, { useState } from "react";

import './App.css';

import Header from './Components/Header.js'
import About from './Components/About.js';
import Projects from './Components/Projects.js';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const App = () => {
  const [page, setPage] = useState("about");

  return (
    <span>
      <Container>
        <Row>
          <Col> <Header /> </Col>
        </Row>

        <Row>
          <Col>
            <div id="navbar" className="animate-fade">
              <span className="navbar-item" onClick={() => setPage("about")}>About</span>
              <span className="navbar-item" onClick={() => setPage("projects")}>Projects</span>
            </div>

            <br />

            <div id="page-content">
              {page === "about" && <About />}
              {page === "projects" && <Projects />}
            </div>
          </Col>
        </Row>
      </Container>
    </span>
  );
}

export default App;
