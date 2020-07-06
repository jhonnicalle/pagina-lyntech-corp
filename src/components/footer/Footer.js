import React, { Component } from 'react';
import './footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';


class Footer extends Component {
  render() {
    return(
      <Fade>
        <footer className="site-footer">
          <h2>Contactanos</h2>
          <Container>
            <Row xs={1} md={1} lg={2}>
              <Col>
                <h6>Direccion</h6>
                <p>Calle 2 Sur #33-29. Medellín. Colombia.</p>
              </Col>
              <Col>
                <h6>Correo Electronico</h6>
                <p>gerencia@lyntechcorp.com</p>
              </Col>
            </Row>
            <hr></hr>
          </Container>
          <Container>
            <Row>
              <Col>
                <p class="copyright-text">Copyright &copy; 2020 Todos los derechos reservados </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </Fade>
    )
  }
}

export default Footer