import React from 'react';
import bannerImage from './architect.jpg';
import './App.css';

const App = () => {
  return (
   <div>
    {/* NavBar */}

    <header id="navbar-top">
      <nav className="navbar-container">
        <a href="#home" className="logo"><b>BR</b> Architects</a>
        <div className="menu-links">
          <a href="#projects" className="menu-item">Projects</a>
          <a href="#about" className="menu-item">About</a>
          <a href="#contact" className="menu-item">Contact</a>
        </div>
      </nav>
    </header>

    {/* End of NavBar */}

            {/* Start of Banner Section */}
            <section className="banner" id="home-banner">
                <img src={bannerImage} alt="Banner Image" className="banner-image"/>
                <div className="banner-text-container">
                    <h1 className="banner-title">
                        <span className="title-bold">BR</span>
                        <span className="title-light"> Architects</span>
                    </h1>
                </div>
            </section>
            {/* End of Banner Section */}
        </div>
  );
} 
export default App;