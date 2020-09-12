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

import { NewsArticlesList } from "./NewsArticlesList.js";
// import { articles } from "./NewsArticlesData.js";
import { PaginationComp } from "./PaginationComp";
import "./HackerNewsHome.css";

export class HackerNewsHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pNo: 1,
    };
    this.setPNo = this.setPNo.bind(this);
  }

  setPNo(currentPage) {
    this.setState({ pNo: currentPage });
  }

  render() {
    return (
      <div style={{ width: "90%" }}>
        {/**HEADER */}
        <Container fluid id="navigationBar" style={{ height: "2em" }}>
          <Row xs={12}>
            {/* <Navbar bg="light" expand="lg" id="navBar"> */}
            <Col xs={2}>
              <a href="#home">
                <img
                  src="HackerNewsLogo.png"
                  alt="Hacker News Logo"
                  style={{ width: "48px" }}
                />
              </a>
              <a href="#" style={{ color: "black" }}>
                Search Hacker News
              </a>
            </Col>
            <Col xs={8} style={{ marginLeft: "10px" }} id="searchInput">
              <input
                type="text"
                placeholder="Search stories by title, url or author"
                className="mr-sm-2"
              />
            </Col>
            <Col xs={1}>
              <a href="#" style={{ color: "black" }}>
                Settings
              </a>
            </Col>
            {/* </Navbar> */}
          </Row>
        </Container>

        {/**MAIN BODY */}

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
          <Row>
            <NewsArticlesList pNo={this.state.pNo} />
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <PaginationComp pNo={this.state.pNo} setPNo={this.setPNo} />
          </Row>
        </Container>

        {/**FOOTER */}

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
