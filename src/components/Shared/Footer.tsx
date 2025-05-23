import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Section des liens et reseaux sociaux 
      <p>&copy; {new Date().getFullYear()} O'Artisan. Tous droits réservés.</p>*/}
      {/* --- Zone 1 : Liens & Réseaux & Boutons d'applications */}
      <div className="footer-top">
      <div className="footer-links">
          <a href="#" className="plus">Qui sommes-nous</a>
          <a href="#" className="plus">Nous contacter</a>
          <a href="#" className="plus">Actualités</a>
        </div>
        <div className="footer-apps">
          <img src="public\Google_Play_Store_badge_IT.svg.png" alt="Google Play" />
          <img src="public\Download_on_the_App_Store_Badge.svg.png" alt="App Store" />
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaWhatsapp /></a>
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTiktok /></a>
        </div>
      </div>

      {/* --- Zone 2 : Bannière artisan */}
      <div className="footer-middle">
        <div className="artisan-banner">
          <div className="artisan-text">
            <strong>Vous êtes un artisan ?</strong>
            <span>Accédez à votre espace dédié</span>
          </div>
          <button className="artisan-btn">Espace O'Artisan</button>
        </div>
      </div>

      {/* --- Zone 3 : Bas de page & drapeau & retour en haut */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} O'Artisan. Tous droits réservés.</p>
        {/*<div className="footer-country">
          <img src="/civ-flag.png" alt="Côte d'Ivoire" />
          <span>CIV</span>
        </div>*/}
      </div>
    </footer>
  );
};

export default Footer;