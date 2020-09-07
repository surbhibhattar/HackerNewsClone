import React from "react";
import {
  Container,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Dropdown,
  Col,
} from "react-bootstrap";

import "./HackerNewsHome.css";

export class HackerNewsHome extends React.Component {
  render() {
    return (
      <div style={{ width: "90%" }}>
        <Navbar bg="light" expand="lg" id="navBar">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid className="mainBody">
          <Row className="filters">
            <Col>
              <span>Search</span>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Stories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Stories</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Comments</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <span>by</span>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Popularity
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Popularity</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Date</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <span>for</span>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  All time
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-2">All time</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Last 24h</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Past Week</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Past Month</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Past Year</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Custom Range</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <span>22,054,607 results (0.006 seconds)</span>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Social Media
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Share on Twitter
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Share on Facebook
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Share on Email
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>List of Posts</Row>
          <Row>Pagination</Row>
        </Container>
        <Container>
          <Navbar
            expand="lg"
            variant="light"
            bg="light"
            fixed="bottom"
            id="footer"
          >
            <Navbar.Brand href="#">
              <ul>
                <li>About</li>
                <li>•</li>
                <li>Setting</li>
                <li>•</li>
                <li>Help</li>
                <li>•</li>
                <li>API Documentation</li>
                <li>•</li>
                <li>Hacker News</li>
                <li>•</li>
                <li>Fork/Contribute</li>
                <li>•</li>
                <li>Cool Apps</li>
              </ul>
            </Navbar.Brand>
          </Navbar>
        </Container>
      </div>
    );
  }
}
