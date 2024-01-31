import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Mianbar_1 from "./Mianbar_1";
import Dropdown from 'react-bootstrap/Dropdown';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

export default function () {
  return (
    <Navbar expand="lg" className="nav_baground" >
      <Container fluid>
        {/* <FontAwesomeIcon icon="fa-solid fa-check-square" /> */}
        {["start"].map((placement, idx) => (
          <Mianbar_1
            key={idx}
            placement={placement}
            name={placement}
            className="d-lg-none d-block"
          />
        ))}
        <Navbar.Brand href="#" className="text-white">
          HR-CODE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/About" className="text-white">
              about
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form> */}
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Admin
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Setting</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
