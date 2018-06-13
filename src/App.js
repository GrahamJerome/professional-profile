import React, { Component } from 'react';
import Navigation from './Navigation';
import Intro from './Intro';
import Content from './Content';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Navigation />
        <Intro />
        <Content />
      </div>
    );
  }
}

export default App;
