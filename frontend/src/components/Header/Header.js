import React from 'react'
import { Container, Navbar, Nav, NavDropdown, FormControl, Form } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <header>
                <Navbar bg="primary" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="m-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav className='m-auto'>
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
                                    <Nav.Link href="#notes">My Notes</Nav.Link>
                                    <NavDropdown title="Venkatesh" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action4">My Profile</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    )
}

export default Header
