import React, { Component } from 'react';
import './about.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import mission from '../../images/mision.svg'
import vision from '../../images/vision.svg'
import values from '../../images/diamante.svg'



class About extends Component {
  render() {
    return(
      <div className='about'>
        <Fade bottom cascade>
          <h2>¿Quiénes somos?</h2>
        </Fade>
        <Container>
          <Row xs={1} md={1} lg={3}>
            <Flip left> 
              <Col>
                <div className='tarjeta-1'>
                  <img className='symbol' src={mission} alt={'Mision'} />
                  <h3>Misión</h3>
                  <p>La misión de Lyntech Corp. es apoyar a nuestros clientes desde una perspectiva de negocio, en la optimización de sus operaciones, en la adecuación de su estructura, y en la puesta en marcha y desarrollo de nuevas oportunidades en el negocio marítimo, portuario y en procesos multimodales.</p>
                </div>
              </Col>
              <Col>
                <div className='tarjeta-2'>
                  <img className='symbol' src={vision} alt={'Vision'}/>
                  <h3>Visión</h3>
                  <p>Nuestra gestión abarca todos los procesos del negocio, de manera eficiente, con un enfoque eminentemente práctico, y en apoyo continuo al cliente, siempre enfocado en generar valor a su cadena de suministros.</p>
                </div>
              </Col>
              <Col>
                <div className='tarjeta-3'>
                  <img className='symbol' src={values} alt={'Valores'}/>
                  <h3>Valores</h3>
                  <p>Nuestro valor principal se encuentra en la capacidad para involucrarnos en el proyecto con el cliente, y para trabajar de forma conjunta; con altos estándares de calidad logrado durante nuestra experiencia y profesionalismo.</p>
                </div>
              </Col> 
            </Flip>           
          </Row>       
        </Container>
      </div>
    )
  }
}

export default About