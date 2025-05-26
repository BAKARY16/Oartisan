import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaTools, FaShoppingBag, FaBuilding, FaPhoneAlt, FaUser, FaBell, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import NotificationsDropdown from './NotificationsDropdown';
import CartDropdown from './CartDropdown';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNotificationsToggle = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsCartOpen(false); // Ferme le panier si ouvert
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
    setIsNotificationsOpen(false); // Ferme les notifications si ouvertes
  };

  return (
    <header className="header">
      {/* Bande noire d'assistance */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-center items-center">
        <span>Vous avez besoin d'aide ?</span>
        <a
          href="tel:+2250575422615"
          className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md text-white text-sm font-medium transition"
        >
          cliquez ici
        </a>
        <span>
          ou appelez le{' '}
          <a
            href="tel:+2250575422615"
            className="text-orange-500 font-bold hover:underline transition"
          >
            +225 05 75 42 26 15
          </a>
        </span>
      </div>

      {/* Barre de navigation principale */}
      <div className="navbar-container grid grid-cols-3 items-center px-6">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="O'Artisan" className="navbar-logo" />
            <span className="font-bold text-orange-logo text-2xl">O'Artisan</span>
          </Link>
        </div>

        {/* Menu principal */}
        <nav>
          <Link to="/" className={`menu-link ${location.pathname === '/' ? 'active' : ''}`}>
            <FaHome className="icon" /> Accueil
          </Link>
          <Link to="/services" className={`menu-link ${location.pathname === '/services' ? 'active' : ''}`}>
            <FaTools className="icon" /> Trouver un artisan
          </Link>
          <Link to="/shop" className={`menu-link ${location.pathname === '/shop' ? 'active' : ''}`}>
            <FaShoppingBag className="icon" /> Boutique
          </Link>
          <Link to="/about" className={`menu-link ${location.pathname === '/about' ? 'active' : ''}`}>
            <FaBuilding className="icon" /> A propos
          </Link>
          <Link to="/contact" className={`menu-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            <FaPhoneAlt className="icon" /> Contactez
          </Link>
        </nav>

        {/* Icônes utilisateur, notifications et panier */}
        <div className="icons flex items-center justify-end gap-8">
          {/* Notifications */}
          <div className="relative">
            <button
              className="text-gray-800 hover:text-orange-500 transition"
              onClick={handleNotificationsToggle}
            >
              <FaBell className="text-xl" />
            </button>
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
            <NotificationsDropdown isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
          </div>

          {/* Panier */}
          <div className="relative">
            <button
              className="text-gray-800 hover:text-orange-500 transition"
              onClick={handleCartToggle}
            >
              <FaShoppingCart className="text-xl" />
            </button>
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              6
            </span>
            <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          </div>

          {/* Connexion / Inscription */}
          <Link to="/login" className="flex items-center gap-2 text-gray-800 hover:text-orange-500 transition hidden-on-mobile">
            <button className="hidden md:inline text-sm explore-n">Connexion</button>
          </Link>

          {/* Menu hamburger pour mobile */}
          <button
            className="menu-button md:hidden text-gray-800 hover:text-orange-500 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="menu-link" onClick={() => setIsMenuOpen(false)}>
          <FaHome className="mr-2" /> Accueil
        </Link>
        <Link to="/services" className="menu-link" onClick={() => setIsMenuOpen(false)}>
          <FaTools className="mr-2" /> Trouver un artisan
        </Link>
        <Link to="/shop" className="menu-link" onClick={() => setIsMenuOpen(false)}>
          <FaShoppingBag className="mr-2" /> Boutique
        </Link>
        <Link to="/about" className="menu-link" onClick={() => setIsMenuOpen(false)}>
          <FaBuilding className="mr-2" /> A propos
        </Link>
        <Link to="/contact" className="menu-link" onClick={() => setIsMenuOpen(false)}>
          <FaPhoneAlt className="mr-2" /> Contactez-nous
        </Link>
        <Link to="/login" className="menu-link" onClick={() => setIsMenuOpen(false)}>
          <FaUser className="mr-2" /> Connexion / Inscription
        </Link>
      </div>
    </header>
  );
};

export default Navbar;