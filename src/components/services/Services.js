import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './services.css'

class Services extends Component {
  render() {
    const settings = {
      dots: true,
      // infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
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
      <div className='service'>
        <Slider {...settings}>
          <div className='card'>
            <h3>Servicios Maritimos</h3>
            <ul>
              <li>Modelos Estratégicos de Gestión</li>
              <li>Optimización de Flota y Operaciones</li>
              <li>Desarrollo de nuevos negocios</li>
              <li>Planes de negocios</li>
              <li>Operaciones corporativas</li>
              <li>Concursos y Ofertas</li>
              <li>Financiación de activos</li>
              <li>Reestructuración de flotas</li>
            </ul>
          </div>
          <div className='card'>
            <h3>Servicios Portuarios</h3>
            <ul>
              <li>Licitación de nuevas terminales</li>
              <li>Planificación de equipos y superficies</li>
              <li>Reordenación de espacios</li>
              <li>Operaciones corporativas</li>
              <li>Concursos y Ofertas</li>
              <li>Servicios Portuarios</li>
              <li>Operaciones de financiación</li>
              <li>Planes de negocios</li>
            </ul>
          </div>
          <div className='card'>
            <h3>Servicios Intermodales</h3>
            <ul>
              <li>Elaboración de proyectos</li>
              <li>Operativa cadenas intermodales -SSS</li>
              <li>Desarrollo de autopistas del mar</li>
              <li>Proyectos para grandes cargadores</li>
              <li>Participación en proyectos TEN-T</li>
              <li>Valoraciones económicas</li>
            </ul>
          </div>
          <div className='card'>
            <h3>Para el conjunto del sector</h3>
            <ul>
              <li>Elaboración de Planes estratégicos</li>
              <li>Restructuraciones y optimización de costes</li>
              <li>Adaptación de ERPs a las necesidades del sector</li>
              <li>Modelización de herramientas de gestión</li>
              <li>Estudios y optimización de procesos</li>
            </ul>
          </div>          
        </Slider>
      </div>
    )
  }
}

export default Services