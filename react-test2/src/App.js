import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import firebase from 'firebase'
import _ from 'lodash'

const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      name: "Jose Arroyo",
      currentTitle: '',
      currentDetails: ''
    }
  }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCPWgW7n5FlhTWjH4puHFVRjO56yam_QaQ",
      authDomain: "notepad-99f42.firebaseapp.com",
      databaseURL: "https://notepad-99f42.firebaseio.com",
      projectId: "notepad-99f42",
      storageBucket: "",
      messagingSenderId: "644870005287"
    });
    console.log('Firebase success!!!');

    firebase.database().ref('/notes')
      .on('value', snapshot => {
        const fbstore = snapshot.val();
        const store = _.map(fbstore, (value, id) => {
          return {
            id: id,
            title: value.title,
            details: value.details
          };
        });
        this.setState({
          notes: store
        });
      });      
  }



  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    //alert(`Your note ${this.state.currentTitle} has been added!!!`);    
    const data = {
      title: this.state.currentTitle,
      details: this.state.currentDetails
    };

    firebase.database().ref('/notes').push(data, response => response);
    this.setState({
      currentTitle: '',
      currentDetails: ''
    });

    event.preventDefault();
  }

  deleteNote(id){
    firebase.database().ref(`/notes/${id}`)
    .remove();
  }
  
  render() {
    return (
      <div className="App">        
        <Header name={this.state.name} />  
        <Form
          currentTitle={this.state.currentTitle}
          currentDetails={this.state.currentDetails}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}          
        />

        <Grid notes={this.state.notes} deleteNote={this.deleteNote.bind(this)} />
      </div>
    );
  }
}

export default App;
