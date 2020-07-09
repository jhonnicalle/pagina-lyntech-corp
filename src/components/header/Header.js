import React, { Component } from 'react';
import './header.css';
import logo from '../../images/lyntech_logo.png'

class Header extends Component {
  render() {

    return(
      <header>
        <div className="overlay">
          <img className='logo-empresa' src={logo} alt='Logo'/>
          <p><strong>LYNTECH CORP</strong> tiene por objeto, apoyar a su organización con servicios especializados de consultoría en los sectores del transporte marítimo, servicios portuarios y en la cadena intermodal.</p>
          <p>Su equipo garantiza independencia, un amplio conocimiento y experiencia probada en la gestión de proyectos.</p>
        </div>
      </header>
    )
  }
}

export default Header