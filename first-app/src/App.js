import React, { Component } from 'react';
// import Profile from "./sudo";
import ToDoApp from "./todoapp";
import data1 from './jsondata.json';
import Additems from "./form";

// import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data1 }
  }
  addNewJson = (newdata) => {
    let newDataArray = this.state.data;
    if (newdata !== "") {
      newDataArray.push({ name: newdata, checked: false })
    }
    this.setState({ data: newDataArray })
  }
  checkedJson = (checked) => {
    let checkedData = this.state.data;
    console.log(this.event.target.checked);
  }
  handleChange = event => {
    this.setState({
      "data": this.state.data.map((val, index) => {
        if (index == event.target.id) {
          val.checked = !val.checked
        }
        return val
      })
    })
  }
  render() {
    return (
      <div>
        <ToDoApp data={this.state.data} handleChange={this.handleChange} />
        <Additems addNewJson={this.addNewJson} />
      </div>
    )
  }
}
export default App;


