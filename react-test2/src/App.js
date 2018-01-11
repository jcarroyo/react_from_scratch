import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: "Add course notes",
          details: "Need to add more details to the course"
        },
        {
          id: 2,
          title: "Add course notes 2",
          details: "Detailsssssssssss"
        },
        {
          id: 3,
          title: "No more ideas",
          details: "oki"
        }
      ],
      name: "Jose Arroyo"
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header name={this.state.name} />  
        <Grid notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
