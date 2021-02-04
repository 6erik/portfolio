import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import petrecs1 from '../img/petrecs_corner.png'
import crapslogger1 from '../img/crapslogger_corner.png'

function Projects() {
    return (
      <div>
          <Row>
            <Col className="projects-item">
              <span className="projects-item-content">
                <img src={petrecs1} width="342" height="250" alt="Screenshot of Pet Recs app"/>
                <strong>PetRecs</strong><br />
                A web app made with ReactJS, used by pet owners and vets to upload, track, and share pet healthcare documents and data online
              </span>
            </Col>

            <Col className="projects-item">
              <span className="projects-item-content">
                <img src={crapslogger1} width="342" height="250" alt="Screenshot of Craps Logger app"/>
                <strong>Craps Logger</strong><br />
                A Python GUI app made with Tkinter, used to log dice rolls for Craps to generate various game statistics
              </span>
            
            </Col>

            <Col className="projects-item">
              <span className="projects-item-content">
                <strong>Parlay Blazer</strong><br />
                A web app made with ReactJS, used to track each game of a bettor's NHL and/or NBA parlay
              </span>
            </Col>
          </Row>
      </div>
    )
}

export default Projects