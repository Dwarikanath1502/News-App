import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name = "Dwarikanath"
  render() {
    return (
      <div>Hello {this.name}</div>
    )
  }
}

