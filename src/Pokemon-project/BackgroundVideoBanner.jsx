import React from 'react';
import BannerVideo from "../assets/BannerVideo.mp4"
import PokemonSearch from './PokemonSearch';
import { Link } from 'react-router-dom';

const BackgroundVideoBanner = () => {
  return (
    <div className="video-banner-container">
      {/* Navigation Bar - Added at the top */}
      <nav className="pokemon-navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Video Background */}
      <video autoPlay muted loop playsInline>
        <source src={BannerVideo} type="video/mp4" />
      </video>
      
      {/* PokemonSearch Component */}
      <div className='video-overlay'>
        <PokemonSearch/>
      </div>
    </div>
  );
}

export default BackgroundVideoBanner;