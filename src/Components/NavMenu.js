import React, { useState } from "react";

import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import { About } from './About.js'


const NavMenu = () => {
  const [visible, setAboutVisibility] = useState(false);


    return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <Button color="primary" onClick={() => setAboutVisibility(true)}>
              About
            </Button>
        <Nav.Link eventKey="link-1">Projects</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav>
    )
}

export default NavMenu