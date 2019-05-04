import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}
