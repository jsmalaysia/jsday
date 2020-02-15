import React from "react"
// import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.css';

import {
  Jumbotron,
  Button,
  Badge,
  Navbar,
  Nav,
  Card,
  Container,
  Row,
  Col,
  Media,
  Image,
} from 'react-bootstrap';

const IndexPage = () => (
  <>
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Speakers</Nav.Link>
          <Nav.Link href="#home">Schedule</Nav.Link>
          <Nav.Link href="#link">Tickets</Nav.Link>
          <Nav.Link href="#home">Venue</Nav.Link>
          <Nav.Link href="#link">Sponsors</Nav.Link>
          <Nav.Link href="#link">
            <Badge variant="primary" pill>Get Tickets</Badge>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
    </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>

    <Container>
      <h3>Speakers</h3>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://placekitten.com/180/100" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://placekitten.com/180/100" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://placekitten.com/180/100" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container>
      <h3>Schedule</h3>
      <Row>
        <Col xs={2}>
          <p>9:00 - 9:30</p>
          <Image
            src="http://placekitten.com/64/64"
            alt="Generic placeholder"
            className="mr-3"
            roundedCircle
          />
          <p>Random Person</p>
        </Col>
        <Col>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={2}>
          <p>9:00 - 9:30</p>
          <Image
            src="http://placekitten.com/64/64"
            alt="Generic placeholder"
            className="mr-3"
            roundedCircle
          />
          <p>Random Person</p>
        </Col>
        <Col>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={2}>
          <p>9:00 - 9:30</p>
          <Image
            src="http://placekitten.com/64/64"
            alt="Generic placeholder"
            className="mr-3"
            roundedCircle
          />
          <p>Random Person</p>
        </Col>
        <Col>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={2}>
          <p>9:00 - 9:30</p>
          <Image
            src="http://placekitten.com/64/64"
            alt="Generic placeholder"
            className="mr-3"
            roundedCircle
          />
          <p>Random Person</p>
        </Col>
        <Col>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={2}>
          <p>9:00 - 9:30</p>
          <Image
            src="http://placekitten.com/64/64"
            alt="Generic placeholder"
            className="mr-3"
            roundedCircle
          />
          <p>Random Person</p>
        </Col>
        <Col>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>
        </Col>
      </Row>
    </Container>

    <Container>
      <h3>Tickets</h3>
      <Row>
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
        </div>
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary">Get started</button>
          </div>
        </div>
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary">Contact us</button>
          </div>
        </div>
      </div>
      </Row>
    </Container>

    <Container>
      <h3>Venue</h3>
      <Row>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.76345515388!2d101.71011431487591!3d3.1569539539847002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d6b251fabd%3A0x39afe1fabbf1aeec!2sKuala%20Lumpur%20City%20Centre!5e0!3m2!1sen!2smy!4v1581771538278!5m2!1sen!2smy" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
      </Row>
    </Container>

    <Container>
      <h3>Sponsors</h3>
      <Row>
      </Row>
    </Container>

    <Container>
      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <img class="mb-2" src="http://placekitten.com/24/24" alt="" width="24" height="24" />
            <small class="d-block mb-3 text-muted">© 2017-2018</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </Container>
  </>
)

export default IndexPage
