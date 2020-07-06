import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './services.css'

import Fade from 'react-reveal/Fade'
import Container from 'react-bootstrap/Container'


class Services extends Component {
  render() {
    //This const is to set the values settings of the carousel
    const settings = {
      dots: true,
      // infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      // arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2 ,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return(
      <Fade bottom cascade>
        <div className='service'>
          <Container>
            <Slider {...settings}>
              <div className='card-1'>
                <div className='card'>
                  <h3>Servicios Marítimos</h3>
                  <ul>
                    <li>Modelos Estratégicos de Gestión</li>
                    <li>Optimización de Flota y Operaciones</li>
                    <li>Desarrollo de Nuevos Negocios</li>
                    <li>Planes de Negocios</li>
                    <li>Operaciones Corporativas</li>
                    <li>Concursos y Ofertas</li>
                    <li>Financiación de Activos</li>
                    <li>Reestructuración de Flotas</li>
                  </ul>
                </div>
              </div>
              <div className='card-2'>
                <div className='card'>
                  <h3>Servicios Portuarios</h3>
                  <ul>
                    <li>Licitación de Nuevas Terminales</li>
                    <li>Planificación de Equipos y Superficies</li>
                    <li>Reordenación de Espacios</li>
                    <li>Operaciones Corporativas</li>
                    <li>Concursos y Ofertas</li>
                    <li>Servicios Portuarios</li>
                    <li>Operaciones de Financiación</li>
                    <li>Planes de Negocios</li>
                  </ul>
                </div>
              </div>
              <div className='card-3'>
                <div className='card'>
                  <h3>Servicios Intermodales</h3>
                  <ul>
                    <li>Elaboración de Proyectos</li>
                    <li>Operativa Cadenas Intermodales -SSS</li>
                    <li>Desarrollo de Autopistas del Mar</li>
                    <li>Proyectos para Grandes Cargadores</li>
                    <li>Participación en Proyectos TEN-T</li>
                    <li>Valoraciones Económicas</li>
                  </ul>
                </div>
              </div>
              <div className='card-4'>
                <div className='card'>
                  <h3>Para el Conjunto del Sector</h3>
                  <ul>
                    <li>Elaboración de Planes estratégicos</li>
                    <li>Restructuraciones y Optimización de Costes</li>
                    <li>Adaptación de ERPs a las Necesidades del Sector</li>
                    <li>Modelización de Herramientas de Gestión</li>
                    <li>Estudios y Optimización de Procesos</li>
                  </ul>
                </div>
              </div>
            </Slider>
          </Container>
        </div>
      </Fade>
    )
  }
}

export default Services