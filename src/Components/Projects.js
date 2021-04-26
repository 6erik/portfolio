import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

import petrecs1 from '../img/petrecs_corner.png';
import crapslogger1 from '../img/crapslogger_corner.png';
import typingtest1 from '../img/typingtest_corner.png';

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


        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>
              PetRecs
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Carousel>
                <Carousel.Item>
                  test image 1
                </Carousel.Item>
                <Carousel.Item>
                  test image 2
                </Carousel.Item>
                <Carousel.Item>
                  test image 3
                </Carousel.Item>
              </Carousel>
              <br />
              <strong>Tech used: </strong>
              <ul>
                <li>React</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>MySQL</li>
              </ul>
          </Modal.Body>

          <Modal.Footer className="modal-footer">
            <a href="https://petrecs.herokuapp.com/" target="_blank" rel="noopener noreferrer">[Webpage]</a> &nbsp;
            <a href="https://github.com/LeviRemi/PetRecs" target="_blank" rel="noopener noreferrer">[Repository]</a> &nbsp;
            <a href="https://www.youtube-nocookie.com/embed/SjbETH8Fx_k" target="_blank" rel="noopener noreferrer">[Presentation/Demo]</a>
            
          </Modal.Footer>
        </Modal>

        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Craps Logger
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Carousel>
                <Carousel.Item>
                  test image 1
                </Carousel.Item>
                <Carousel.Item>
                  test image 2
                </Carousel.Item>
                <Carousel.Item>
                  test image 3
                </Carousel.Item>
              </Carousel>
              <br />
              <strong>Tech used: </strong>
              <ul>
                <li>Python</li>
                <li>Tkinter</li>
              </ul>
          </Modal.Body>

          <Modal.Footer className="modal-footer">
            <a href="https://github.com/6erik/craps-logger" target="_blank" rel="noopener noreferrer">[Repository]</a>
          </Modal.Footer>
        </Modal>

        <Modal show={show3} onHide={handleClose3}>
          <Modal.Header closeButton>
            <Modal.Title>Java Typing Test</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Carousel>
                <Carousel.Item>
                  test image 1
                </Carousel.Item>
                <Carousel.Item>
                  test image 2
                </Carousel.Item>
                <Carousel.Item>
                  test image 3
                </Carousel.Item>
              </Carousel>
              <br />
              <strong>Tech used: </strong>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
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