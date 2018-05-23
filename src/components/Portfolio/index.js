import React, { Component } from 'react';
import './index.css';

const INITIAL_STATE = {
  inView: false
}

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
    this.portfolio = React.createRef();
  }

  componentDidMount() {
    let distance = parseInt(this.portfolio.current.offsetHeight);
    window.addEventListener('scroll', this.calculateScroll.bind(this, distance));
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.calculateScroll);
  }

  calculateScroll = (distance) => {
    var _window = window;
    var heightDiff = parseInt(distance);
    var scrollPos = _window.scrollY;
    console.log(scrollPos);
    if (scrollPos > heightDiff - 500) {
        // here this means user has scrolled past your header,
        // you may rerender by setting State or do whatever
      this.setState({"inView": true});
      window.removeEventListener('scroll', this.calculateScroll);
    }
  }

  render() {
    const {
      inView
    } = this.state;

    return (
      <section className="portfolio" id="portfolio" ref={this.portfolio}>
        {
          inView &&
          <div className="portfolio__content">
            <h1 className="portfolio__title">My Work</h1>
            <div>
            </div>
          </div>
        }
      </section>
    )
  }
}

export default Portfolio;
