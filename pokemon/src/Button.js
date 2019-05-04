import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    // MUST remember to bind(this) for any function call OR use ARROW FUNCTION
    // this.handleClick = this.handleClick.bind(this);
  }
  // use arrow function without using bind(this)
  handleClick = () => this.setState({ clicked: true });

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Clicked!!!' : 'Not Clicked!'}</h1>

        {/* don't call handleClick(), because we want to wait until it CLICK */}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
