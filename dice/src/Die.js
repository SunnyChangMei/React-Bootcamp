import React, { Component } from 'react';
import './Die.css';

export default class Die extends Component {
  render() {
    return (
      <div>
        {/* we can add as many className in the { we got 4 className here } */}
        <i
          className={`Die fas fa-dice-${this.props.face} ${
            this.props.rolling ? 'shaking' : ''
          }`}
        />
      </div>
    );
  }
}
