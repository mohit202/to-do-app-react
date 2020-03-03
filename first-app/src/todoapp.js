import React, { Component } from 'react';
class ToDoApp extends Component {
  constructor(props) {
    super(props)
    this.state = { changeValue: false }
  }
  handleChange = (event) => {
    this.props.handleChange(event.target.name)
  }
  handleOnClick = (event) => {
    this.props.checkedJson(event.target.value)
  }
  render() {
    return (
      <div className="ToDoApp">
        <div className="header"><h4>ToDo App</h4></div>
        {this.props.data.map((postDetail, index) => {
          return <ul>
            <li key={index}>
              <input type="checkbox" checked={postDetail.checked}
                onChange={this.props.handleChange} id={index} value={postDetail.checked} name={postDetail.name}></input>
              {postDetail.name} {postDetail.checked ? <span className="badge badge-pill badge-secondary">checked</span> : null}</li>
          </ul>
        })}
      </div>
    )
  }
}
export default ToDoApp;