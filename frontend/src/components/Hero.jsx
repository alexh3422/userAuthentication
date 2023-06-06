import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <Container className="text-center">
      <Card className="mt-5 py-5 px-5">
        <Card.Body>
          <Card.Title>MERN Auth Demo</Card.Title>
          <Card.Text>
            This is a demo app for MERN stack authentication
          </Card.Text>
          <div className="heroButtons">
            <LinkContainer to="/login">
              <Button variant="primary">Login</Button>
            </LinkContainer>
            <br></br>
            <LinkContainer to="/signup">
              <Button variant="primary">Register</Button>
            </LinkContainer>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Hero;
