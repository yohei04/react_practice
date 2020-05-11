import React, { Component } from 'react'

class Button2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ken'
    }
  }

  changeName = () => {
    this.setState({
      name: 'name changed!'
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeName()}>button</button>
        <h1>Hello, {this.state.name}</h1>
      </div>
    )
  }
}

export default Button2

