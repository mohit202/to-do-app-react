
import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodo, addTodo } from "./Actions/addItems";
import 'bootstrap/dist/css/bootstrap.min.css';
import Additems from './login';
import './App.css';
import ToDo from './todo'
import { Checkbox } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props)
    this.props.getTodoRequest()
    this.state = {
      getValue: " ",
      data: [],
      onclicked: false
    }
  }
  handleSubmit = (event) => {
    this.setState({ getValue: '' })
    this.props.addTodoRequest();
    event.preventDefault();

    let id = this.props.getTodo.data.length;
    let updatedValue = [
      ...this.props.getTodo.data,
      ...[{
        id: id,
        name: this.state.getValue,
        Checked: false
      }
      ]
    ];
    this.props.addTodoRequest(updatedValue);
    console.log(this.props.addTodoRequest(updatedValue));
    if (this.state.getValue === " ") {
      this.setState({ onclicked: true });
    } else {
      this.setState({ onclicked: false });
    }
  }
  handlerChange = (e) => {
    this.setState({ getValue: e.target.value });
  }
  handleEventClick = (event) => {
    let checkValue = event.target.name;
    console.log(checkValue);
    let data =
      this.props.getTodo.data.map(val => {
        if (val.name === checkValue) {
          val.checked = !val.checked;
        }
        return val;

      })
    this.props.addTodoRequest(data);
  }
  render() {
    if (!this.props.getTodo.data) return null;
    return (
      <div className="ToDoApp">
        <div className="header"><h2>ToDoApp by Using Redux</h2></div>
        <ul>
          {this.props.getTodo.data.map((val, key) => {
            return (
              <li>
                <input type="Checkbox" checked={val.checked} id={val.id} value={val.checked} name={val.name} onClick={this.handleEventClick} />
                {val.name}
                {val.checked ? (
                  <span className="badge badge-pill badge-secondary float-right">Checked</span>
                ) : null
                }
              </li>
            )
          }
          )}
        </ul>
        <div className="group-group">
          <label>ToDo</label>
          <input type="text"
            className={this.state.onclicked ? 'border1' : 'border'}
            placeholder="your todo"
            onChange={this.handlerChange}
            value={this.state.getValue}
          ></input><br />
          <input type="submit" id="submit" onClick={this.handleSubmit}></input>
        </div>
      </div>
    )
  }
}
const getProps = state => {
  return { getTodo: state.getTodo, addTodo: state.getValue };
};
const dispatchProps = dispatch => ({
  getTodoRequest: () => dispatch(getTodo()),
  addTodoRequest: (data) => dispatch(addTodo(data))
});
export default connect(getProps, dispatchProps)(App);
