import React, { Component } from 'react';
import './index.css';

import Navigation from '../Navigation';
import Banner from '../Banner';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Navigation />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
