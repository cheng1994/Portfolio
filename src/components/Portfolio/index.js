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
            <div class="portfolio__items">
              {/* Under Construction
              <i class="fas fa-code"></i> */}
              <div class="portfolio__item portfolio__item--gradelink">
                <div class="portfolio__description">
                  <h1>Gradelink</h1>
                  <div>Mobile App and SPAs created for usage within Gradelink student information system</div>
                  <div>
                    <a href="https://play.google.com/store/apps/details?id=com.gradelink.parent&hl=en" target="_blank" className="portfolio__link"><i className="portfolio__icons fab fa-android fa-3x"></i></a>
                    <a href="https://itunes.apple.com/us/app/gradelink-student-parent/id1091381333?mt=8" target="_blank" className="portfolio__link"><i className="portfolio__icons fab fa-apple fa-3x"></i></a>
                  </div>
                </div>
              </div>
              <div class="portfolio__item portfolio__item--entrepe">
                <div class="portfolio__description">
                  <h1>Entrepe Valuation</h1>
                  <div>Valuation tool that allows users to view a business valuation of their business based on their Quickbooks data.</div>
                  <div>
                    <a href="https://play.google.com/store/apps/details?id=entrepe.valuation" target="_blank" className="portfolio__link"><i className="portfolio__icons fab fa-android fa-3x"></i></a>
                    <a href="https://itunes.apple.com/app/id1416399180?mt=8&ign-mpt=uo%3D4" target="_blank" className="portfolio__link"><i className="portfolio__icons fab fa-apple fa-3x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </section>
    )
  }
}

export default Portfolio;
