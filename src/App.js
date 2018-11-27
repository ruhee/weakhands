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
        <div className="text">
          <p>
            we play punk rock
          </p> 
          <p>
            find us on <a href="http://facebook.com/weakhandsband">facebook</a>, <a href="http://twitter.com/weakhandsband">twitter</a> and <a href="http://instagram.com/weakhands">instagram</a>
          </p>
          <p>next show: <a href="https://www.facebook.com/events/290911961550193/"><b>january 5th</b> at the <b>monarch tavern (dan burke's class of 2019!)</b> with gloin, orville peck, nikki fierce, the effens</a></p>
        </div>
      </div>
    );
  }
}

export default App;
