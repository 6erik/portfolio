import './App.css';

import Header from './Components/Header.js'
import Homepage from './Components/Homepage.js'
import NavMenu from './Components/NavMenu.js'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function App() {
  return (
    <Container>
      <Row>
        <Col> <Header /> </Col>
      </Row>
      <Row>
        <Col> <NavMenu /> </Col>
        <Col> <Homepage /> </Col>
      </Row>
    </Container>
  );
}

export default App;
