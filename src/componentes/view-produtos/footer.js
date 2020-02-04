import React from 'react';

import Styles from '../../styles/principal.css'
import logoNodis from "../../assets/images/logo.png";

const Footer = () => {
  return(
    <footer className="page-footer teal darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <a className="link-logo" href="https://www.nodis.com.br">
                  <img src={logoNodis} target="_blank" alt="logo nodis" className="logo-principal"/>Nodis
                </a>
                <p className="grey-text text-lighten-4">Seu negócio, agora digital.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center-align">
            © 2020 Copyright Text
            </div>
          </div>
        </footer>
  )
} 

export default Footer;