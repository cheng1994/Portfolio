import React from 'react';
import './index.css';
import AnimateLoad from '../../animations/AnimateLoad'

const Navigation = () => (
    <div className="navigation">
      <div className="navigation__nav">
        <div className="navigation__item navigation__item--title">Gordon Chen</div>
        <div className="navigation__item">About Me</div>
        <div className="navigation__item">Tools</div>
        <div className="navigation__item">Portfolio</div>
        <div className="navigation__item">Contact</div>
      </div>
    </div>
)

export default (AnimateLoad(Navigation));
