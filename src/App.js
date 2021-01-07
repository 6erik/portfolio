import React, { useState } from "react";

import './App.css';

import Header from './Components/Header.js'
import Homepage from './Components/Homepage.js'
import NavMenu from './Components/NavMenu.js'
import { About } from './Components/About.js'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const App = () => {
  const [visible, setAboutVisibility] = useState(false);

  return (
    <Container>
      <Row>
        <Col> <Header /> </Col>
      </Row>
      <Row>
        <Col> <NavMenu /> </Col>
        <Col> <Homepage /> </Col>
        <Col> <Button color="primary" onClick={() => setAboutVisibility(true)}>
              Show Alert
            </Button> </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      <About visible={visible} />
      </Row>
    </Container>
  );
}

export default App;
