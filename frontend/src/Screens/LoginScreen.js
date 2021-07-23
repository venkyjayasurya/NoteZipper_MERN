import React, { useState } from "react";
import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../components/MainScreen";
import "./LoginScreen.css"

const LoginScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const submitHandler = async function(e) {
        e.preventDefault()
        // console.log(email, password)
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            }

            setLoading(true)

            const { data } = await axios.post(
              "http://localhost:5000/api/users/login",
              {
                email,
                password,
              },
              config
            );
            console.log(data)

            setLoading(false)

            localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div>
            <MainScreen title="LOGIN">
                <div className="loginContainer">
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Row>
                        <Col className="py-3">
                            New User ? <Link to="/register">Register Here</Link>
                        </Col>
                    </Row>
                </div>
            </MainScreen>
        </div>
    );
};

export default LoginScreen;
