import { Container, Card, Button } from "react-bootstrap";

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
            <Button variant="primary" href="/register">
              Register
            </Button>
            <span className="px-2"></span>
            <br></br>
            <Button variant="primary" href="/login">
              Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Hero;
