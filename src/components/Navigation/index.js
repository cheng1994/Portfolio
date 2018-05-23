import React from 'react';
import './index.css';
import AnimateLoad from '../../animations/AnimateLoad'

const scrollTo = (value) => {
  let element = document.getElementById(value);
  element.scrollIntoView({ block: "start", behavior: "smooth" });
}

const Navigation = () => (
    <div className="navigation">
      <div className="navigation__nav">
        <div className="navigation__item navigation__item--title">Gordon Chen</div>
        <div className="navigation__item" onClick={() => scrollTo("about")}>About Me</div>
        <div className="navigation__item" onClick={() => scrollTo("portfolio")}>Portfolio</div>
        <div className="navigation__item" onClick={() => scrollTo("contact")}>Contact</div>
      </div>
    </div>
)

export default (AnimateLoad(Navigation));
