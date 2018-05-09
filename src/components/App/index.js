import React, { Component } from 'react';
import './index.css';

import Navigation from '../Navigation';
import Banner from '../Banner';
import About from '../About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Navigation />
        <About />
      </div>
    );
  }
}

export default App;
