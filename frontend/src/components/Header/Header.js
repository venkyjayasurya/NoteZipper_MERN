import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../actions/userActions";

const Header = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = ()=> {
    dispatch(logout())
    history.push("/")
  }


  return (
    <div>
      <header>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/">Note Zipper</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="m-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav className="m-auto">
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-2"
                      aria-label="Search"
                    />
                    {/* <Button variant="outline-success">Search</Button> */}
                  </Form>
                </Nav>
                <Nav>
                  <Nav.Link>
                    <Link to="/mynotes"> My Notes</Link>
                  </Nav.Link>
                  <NavDropdown title="Venkatesh" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action4">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
