import React, { Component } from 'react';
import band from './band.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Weak Hands</h1>
        </header>
        <img src={band} alt="Weak Hands, the band" />
        <p>
          we play punk rock
        </p> 
        <p>
          find us on <a href="http://facebook.com/weakhandsband">facebook</a>, <a href="http://twitter.com/weakhandsband">twitter</a> and <a href="http://instagram.com/weakhands">instagram</a>
        </p>
        <p>
          next show: <b>april 21st</b> at <b>handlebar</b>
        </p>
      </div>
    );
  }
}

export default App;
