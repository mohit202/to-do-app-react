import React, { Component } from 'react';
// import Profile from "./sudo";
import ToDoApp from "./todoapp";
// import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
      {/* <Profile text="hello props"/> */}
      {/* <Profile /> */}
      <ToDoApp />
     
    </div>
    ) 
}
}
export default App;


