import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/formContainer";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            required
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>
        <Row className="py-3">
          <Col>
            Already have an account? <Link to="/login">Sign In</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default SignUpScreen;
