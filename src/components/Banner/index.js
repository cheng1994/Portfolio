import React from 'react';
import Particles from 'react-particles-js';
import './index.css';

const scrollTo = () => {
  let element = document.getElementById("about");
  element.scrollIntoView({ block: "start", behavior: "smooth" });
}

const Banner = () => (
  <section className="banner">
    <Particles className="banner__particles" />
    <div className="banner__about">
      <div className="banner__description">
        Hello, I'm <span className="banner__name">Gordon Chen</span>.<br/>
        Frontend Developer with a passion for building engaging UI
      </div>
      <div className="banner__social">
        <a href="https://github.com/cheng1994" target="_blank" class="banner__link"><i className="banner__icons fab fa-github fa-3x"></i></a>
        <a href="https://www.linkedin.com/in/gordon-chen-20461762/" target="_blank" class="banner__link"><i className="banner__icons fab fa-linkedin fa-3x"></i></a>
        <a href="https://www.instagram.com/gordawn94/" target="_blank" class="banner__link"><i className="banner__icons fab fa-instagram fa-3x"></i></a>
      </div>
      <button className="banner__button" onClick={scrollTo}>My Work <i className="fas fa-arrow-right"></i></button>
    </div>
  </section>
)

export default Banner;
