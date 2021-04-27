import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

import petrecs1 from '../img/petrecs_corner.png';
import petrecs_ss1 from '../img/petrecs/1_addpet.png';
import petrecs_ss2 from '../img/petrecs/2_petprofile.png';
import petrecs_ss3 from '../img/petrecs/3_records.png';
import petrecs_ss4 from '../img/petrecs/4_health.png';

import crapslogger1 from '../img/crapslogger_corner.png';
import crapslogger_ss1 from '../img/craps/1_newgame.png';
import crapslogger_ss2 from '../img/craps/2_postgame.png';

import typingtest1 from '../img/typingtest_corner.png';
import typingtest_ss1 from '../img/typing/1_complete.png';
import typingtest_ss2 from '../img/typing/2_typos.png';

function Projects() {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

    return (
      <div className="animate-fade">
          <Row>
            <Col className="projects-item">
              <span className="projects-item-content" onClick={handleShow1}>
                <img src={petrecs1} width="342" height="250" alt="Screenshot of Pet Recs app"/>
                <strong>PetRecs</strong><br />
                A web app made with ReactJS, for pet owners and vets to upload, track, and share pet healthcare documents and data online
              </span>
            </Col>

            <Col className="projects-item">
              <span className="projects-item-content" onClick={handleShow2}>
                <img src={crapslogger1} width="342" height="250" alt="Screenshot of Craps Logger app"/>
                <strong>Craps Logger</strong><br />
                A Python GUI app made with Tkinter, used to log dice rolls for Craps to generate various game statistics
              </span>
            
            </Col>

            <Col className="projects-item">
              <span className="projects-item-content" onClick={handleShow3}>
              <img src={typingtest1} width="342" height="250" alt="Screenshot of Typing Test app"/>
                <strong>Java Typing Test</strong><br />
                A web app made with JavaScript, where users can practice typing the common formatting, syntax, and symbols used in Java code
              </span>
            </Col>
          </Row>


        <Modal show={show1} onHide={handleClose1} dialogClassName="modal-wide">
          <Modal.Header closeButton>
            <Modal.Title>
              PetRecs
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Carousel indicators="false" interval="8000" className="centered-carousel" >
                <Carousel.Item>
                  <img src={petrecs_ss1} width={630} height={235} alt="Screenshot showing pet profiles"/><br />
                  <strong>Each pet profile is displayed to the user upon login.</strong>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={petrecs_ss2} width={630} height={310} alt="Screenshot showing details of a pet profile"/><br />
                  <strong>Notes can be added to a pet profile for vets and caretakers to see.</strong>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={petrecs_ss3} width={630} height={310} alt="Screenshot showing list of uploaded records"/><br />
                  <strong>Information such as pet records can be uploaded to a profile for easy viewing and sharing.</strong>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={petrecs_ss4} width={630} height={220} alt="Screenshot showing health page"/><br />
                  <strong>The health section can be used to keep track of your pets weight over time.</strong>
                </Carousel.Item>
              </Carousel>
              <br />
              <Row>
                <Col>
                  <strong>Description: </strong> <br />
                  PetRecs is an account-based web application for pet owners and veterinarians to upload, track and share
                  pet-healthcare documents and data online. Application was developed by a team of 3, utilizing Agile sprints
                  and the Scrum framework. 
                </Col>
                <Col md={3}>
                  <strong>Tech used: </strong>
                  <ul>
                    <li>React</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                  </ul>
                </Col>
              </Row>
              
          </Modal.Body>

          <Modal.Footer className="modal-footer">
            <a href="https://petrecs.herokuapp.com/" target="_blank" rel="noopener noreferrer">[Webpage]</a> &nbsp;
            <a href="https://github.com/LeviRemi/PetRecs" target="_blank" rel="noopener noreferrer">[Repository]</a> &nbsp;
            <a href="https://www.youtube-nocookie.com/embed/SjbETH8Fx_k" target="_blank" rel="noopener noreferrer">[Presentation/Demo]</a>
            
          </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2} dialogClassName="modal-wide">
          <Modal.Header closeButton>
            <Modal.Title>Craps Logger
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Carousel indicators="false" interval="8000" className="centered-carousel" >
                <Carousel.Item>
                  <img src={crapslogger_ss1} width={520} height={380} alt="Screenshot showing UI before any use"/><br />
                  <strong>Screenshot of the application before any rolls have been logged.</strong>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={crapslogger_ss2} width={520} height={380} alt="Screenshot showing UI after games have been logged"/><br />
                  <strong>Frequencies of all outcomes are updated after each submitted roll.</strong>
                </Carousel.Item>
                </Carousel>
              <br />
              <Row>
                <Col>
                  <strong>Description: </strong> <br />
                  Craps Logger is a Python application utilizing the Tkinter GUI package. 
                </Col>
                <Col md={3}>
                  <strong>Tech used: </strong>
                  <ul>
                    <li>Python</li>
                    <li>Tkinter</li>
                  </ul>
                </Col>
              </Row>
              
              
          </Modal.Body>

          <Modal.Footer className="modal-footer">
            <a href="https://github.com/6erik/craps-logger" target="_blank" rel="noopener noreferrer">[Repository]</a>
          </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={handleClose3} dialogClassName="modal-wide">
          <Modal.Header closeButton>
            <Modal.Title>Java Typing Test
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Carousel indicators="false" interval="8000" className="centered-carousel" >
                <Carousel.Item>
                  <img src={typingtest_ss1} width={520} height={380} alt="Screenshot showing a completed typing test"/><br />
                  <strong>After completion of the test, total time taken and WPM are displayed.</strong>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={typingtest_ss2} width={520} height={380} alt="Screenshot showing UI after games have been logged"/><br />
                  <strong>When the user commits typing errors, incorrect characters are highlighted.</strong>
                </Carousel.Item>
              </Carousel>
              <br />
              <Row>
                <Col>
                  <strong>Description: </strong> <br />
                  Java Typing Test is a basic web application, using HTML and JavaScript, to practice typing text
                  that is commonly used in the Java language. Code blocks are randomly generated, ensuring that users
                  get practice with the formatting of different loops and all of the various symbols used when coding.
                </Col>
                <Col md={3}>
                <strong>Tech used: </strong>
                  <ul>
                   <li>JavaScript</li>
                   <li>HTML</li>
                   <li>CSS</li>
                  </ul>
                </Col>
              </Row>
              
          </Modal.Body>

          <Modal.Footer className="modal-footer">
            <a href="https://6erik.github.io/typing-test" target="_blank" rel="noopener noreferrer">[Webpage]</a> &nbsp;
            <a href="https://github.com/6erik/typing-test" target="_blank" rel="noopener noreferrer">[Repository]</a>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default Projects