import React, { useState, useEffect } from 'react';
import './Home.css';
import { FaSearch } from "react-icons/fa";

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://img.freepik.com/photos-premium/attrayante-vendeuse-africaine-au-stand-fruits-bras-croises_536628-1325.jpg?semt=ais_hybrid&w=740',
    'https://media.istockphoto.com/id/484799032/fr/photo/hommes-au-travail-dans-le-domaine-de-la-menuiserie-atelier-afrique-du-sud.jpg?s=612x612&w=0&k=20&c=X5n0yQVvzlgJKtaCerfRX4tk00eaJIugVTPAVzX6VJ8=',
    'https://img.freepik.com/photos-premium/chef-cuisinier-tranche-du-filet-poulet-dans-cuisine-du-restaurant_1003394-1707.jpg?semt=ais_hybrid&w=740',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        <div
          className="carousel-images"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
        <button className="carousel-button next" onClick={nextSlide}>
          &#8250;
        </button>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <div className="hero-banner" data-v-8d4d8d3a data-v-0b83107a>
          <div className="carousel-overlay">
            <div className="row justify-content-center" data-v-8d4d8d3a="">
              <div className="col-lg-12" data-v-8d4d8d3a="">
                <div className="banner-content" data-v-8d4d8d3a="">
                  <h2 className="title-big" data-v-8d4d8d3a="">
                    <div className="message_parent" data-v-8d4d8d3a="">
                      <span className="message" data-v-8d4d8d3a="">Optez pour le
                        meilleur pour vos besoins
                      </span>
                    </div>
                  </h2>
                  <p className="title-small" data-v-8d4d8d3a="">
                    Des artisans qualifiés pour vos

                    &nbsp;
                    <span className="rotating-words">
                      <span className="word">travaux </span>
                      <span className="word">projets </span>
                      <span className="word">services </span>
                      <span className="word">besoins </span>
                    </span>
                  </p>
                  <div className="container top-230 display-desktop"data-v-8d4d8d3a="">
                    <form action="/app/recherche/recherche.php" className="m-btn m-btn-theme2" data-v-8d4d8d3a="" method="GET">
                      <input
                        type="text"
                        className="search-bar"
                        placeholder="Recherchez ici..."
                      />
                      <button className="icon" type="submit" data-v-8d4d8d3a="">
                        <i className="fa-solid fa-magnifying-glass" data-v-8d4d8d3a="">
                          <span className="material-symbols-outlined"><FaSearch />
                          </span>
                        </i>
                      </button>
                    </form>
                  </div>
                  <div className="container top-230 display-mobile" data-v-8d4d8d3a="">
                    <button className="m-btn m-btn-theme2" data-v-8d4d8d3a="">
                      <div data-v-8d4d8d3a="">
                        <span className="typed-text" data-v-8d4d8d3a=""></span>
                        <span className="blinking-cursor" data-v-8d4d8d3a=""></span>
                        <span className="cursor" data-v-8d4d8d3a=""></span>
                      </div>
                      <span className="icon" data-v-8d4d8d3a="">
                        <i className="fa-solid fa-magnifying-glass" data-v-8d4d8d3a="">
                          <span className="material-symbols-outlined"><FaSearch />
                          </span>
                        </i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Bienvenue sur notre site</h1>
      <p>Explorez nos fonctionnalités et découvrez nos services.</p>
      <button className="explore-button">Explorer</button>
    </div>
  );
};

/*<div className="carousel-overlay">
<h1 className="title">Bienvenue sur O'artisan</h1>
<p>Explorez nos fonctionnalités et découvrez nos services.</p>
<input
  type="text"
  className="search-bar"
  placeholder="Recherchez ici..."
/>
</div>*/
export default Home;