import React from 'react';
import { Link } from 'react-router-dom'
import landingImg from '../../assets/images/university.jpg';
import './styles.css';





function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">    
        <img 
          src={landingImg} 
          alt="MagniUniversity" 
          className="hero-image"
        />
        <div className='title-content'>
          <h1>MagniUniversity</h1>
          <p className='title'>
            Faça  a Gestão da sua Universidade aqui!
          </p>
          <p className='title'>
           Esta plataforma tem duas funcionalidades dentre elas cadastrar dados e filtrar dados
           <br></br>
          </p>
        </div>
        <div className="buttons-container">
          <Link to="/data-list" className="findContact">
            Procurar dados
          </Link>
          <Link to="/add-data" className="add-contact">     
            Adicionar dados
          </Link>
        </div>      
      </div>
    </div>
  )
}

export default Landing;