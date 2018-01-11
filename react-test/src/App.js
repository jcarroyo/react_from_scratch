import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Intro from './Intro';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Joseeeeeee"
    }
  }
  componentDidMound(){
    console.log("Component just loaded");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.name}, welcome to React</h2>
        </header>
        <Intro user={this.state.name}/>        
      </div>
    );
  }
}

export default App;
