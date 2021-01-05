import Nav from "react-bootstrap/Nav"

function NavMenu() {
    return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/">About</Nav.Link>
        <Nav.Link eventKey="link-1">Projects</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav>
    )
}

export default NavMenu