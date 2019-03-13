import React, { Component } from 'react';
import './index.css';

const INITIAL_STATE = {
  inView: false
}

const skills = [
  {
    name: 'Angular',
    percentage: 95,
    style: {
      width: 'calc(95% - 10rem)'
    }
  },
  {
    name: 'Ionic',
    percentage: 95,
    style: {
      width: 'calc(95% - 10rem)'
    }
  },
  {
    name: 'React',
    percentage: 70,
    style: {
      width: 'calc(70% - 10rem)'
    }
  },
  {
    name: 'CSS',
    percentage: 95,
    style: {
      width: 'calc(95% - 10rem)'
    }
  },
  {
    name: 'Sass',
    percentage: 65,
    style: {
      width: 'calc(65% - 10rem)'
    }
  },
  {
    name: 'Javascript',
    percentage: 85,
    style: {
      width: 'calc(85% - 10rem)'
    }
  },
  {
    name: 'Meteor',
    percentage: 60,
    style: {
      width: 'calc(60% - 10rem)'
    }
  },
  {
    name: 'HTML',
    percentage: 95,
    style: {
      width: 'calc(95% - 10rem)'
    }
  },
  {
    name: 'Web API',
    percentage: 75,
    style: {
      width: 'calc(75% - 10rem)'
    }
  },
  {
    name: 'ASP.NET',
    percentage: 70,
    style: {
      width: 'calc(70% - 10rem)'
    }
  },
  {
    name: 'C#',
    percentage: 75,
    style: {
      width: 'calc(75% - 10rem)'
    }
  },
  {
    name: 'MongoDB',
    percentage: 40,
    style: {
      width: 'calc(40% - 10rem)'
    }
  },
  {
    name: 'Firebase',
    percentage: 40,
    style: {
      width: 'calc(40% - 10rem)'
    }
  },
  {
    name: 'XML/XSLT',
    percentage: 60,
    style: {
      width: 'calc(60% - 10rem)'
    }
  }
]

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
    this.about = React.createRef();
  }

  componentDidMount() {
    let distance = parseInt(this.about.current.offsetHeight);
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
      <section className="about" id="about" ref={this.about}>
        {
          inView &&
          <div className="about__content">
            <h1 className="about__title">About</h1>
            <div className="about__icons">
              <div className="about__detailIcon">
                <div className="hex-wrap">
                  <div className="hex">
                    <i className="about__faIcon fas fa-sliders-h fa-5x"></i>
                  </div>
                </div>
                <h2>Dynamic</h2>
              </div>
              <div className="about__detailIcon">
                <div className="hex-wrap">
                  <div className="hex">
                    <i className="about__faIcon far fa-lightbulb fa-5x"></i>
                  </div>
                </div>
                <h2>Intuitive</h2>
              </div>
              <div className="about__detailIcon">
                <div className="hex-wrap">
                  <div className="hex">
                    <i className="about__faIcon fas fa-laptop fa-5x"></i>
                  </div>
                </div>
                <h2>Responsive</h2>
              </div>
              <div className="about__detailIcon">
                <div className="hex-wrap">
                  <div className="hex">
                    <i className="about__faIcon fas fa-bolt fa-5x"></i>
                  </div>
                </div>
                <h2>Quick</h2>
              </div>
            </div>
            <div className="about__details">
              <div className="about__text">
                I'm a Fronted Developer for Gradelink in Foothill Ranch, CA.<br/>
                I can bring full projects to life from the entire stack but my passion lies in building intuitive and dynamic interfaces for users to enjoy.
              </div>
              <div>
                <h2>Languages I speak</h2>
                {
                  Object.keys(skills).map(key => {
                    return (
                      <div className="about__skills" key={key}>
                        <div className="about__skillTitle">{skills[key].name}</div>
                        <div className="about__skillPercentage" style={skills[key].style}>{skills[key].percentage}%</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        }
      </section>
    )
  }
}

export default About;
