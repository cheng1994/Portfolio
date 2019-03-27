import React, { Component } from 'react';
import './index.css';

const INITIAL_STATE = {
  inView: false
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
    this.contact = React.createRef();
  }

  componentDidMount() {
    let distance = parseInt(this.contact.current.offsetHeight);
    window.addEventListener('scroll', this.calculateScroll.bind(this, distance));
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.calculateScroll);
  }

  calculateScroll = (distance) => {
    var _window = window;
    var heightDiff = parseInt(distance);
    var scrollPos = _window.scrollY;
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
      <section className="contact" id="contact" ref={this.contact}>
        {
          inView &&
          <div className="contact__content">
            <h1>Contact</h1>
            <div>
              <a href={process.env.PUBLIC_URL + '/resume.pdf'} download>
                Resume
              </a>
              <div>
                gordon.chen94@gmail.com
              </div>
              <div>
                (949) 342-4170
              </div>
            </div>
          </div> 
        }
      </section>
    )
  }
}

export default Contact;
