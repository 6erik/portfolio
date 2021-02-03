import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Projects() {
    return (
      <div>
          <Row>
            <Col className="projects-item">
              <span className="projects-item-content">PetRecs - A website to manage pet health records</span>
            </Col>

            <Col className="projects-item">
              <span className="projects-item-content">Craps Logger - A Python application that logs dice rolls for craps and gives statistics</span>
            
            </Col>

            <Col className="projects-item">
              <span className="projects-item-content">Parlay Blazer - A webapp that checks status of a parlay by scraping sports scores</span>
            </Col>
          </Row>
      </div>
    )
}

export default Projects