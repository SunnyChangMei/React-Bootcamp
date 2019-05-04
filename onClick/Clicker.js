import React, { Component } from 'react';

export default class Clicker extends Component {
  constructor(props) {
    super(props);
    // this.state is Object = {}
    this.state = {
      num: 1
    };
    this.genRandom = this.genRandom.bind(this);
  }

  //! this.setState() is function()
  genRandom() {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({
      num: rand
    });
  }

  render() {
    return (
      <div>
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h2>YOU WIN!</h2>
        ) : (
          <button onClick={this.genRandom}>Click HERE for Random#</button>
        )}
      </div>
    );
  }
}
