import React, { Component } from 'react';
class Additems extends Component {
  constructor(props) {
    super(props);
    this.state = { items: '', warning: false }
  }
  handlerChange = (event) => {
    this.setState({items: event.target.value});
  }
  render() {
    return (
      <div className="forms" >
        <form onSubmit={this.handleSubmit}>
          <div className="group-group">
            <label>ToDo</label>
            <input type="text" className="form-control" className={this.state.warning ? 'border1': 'border'}
              value={this.state.items} placeholder="your todo" onChange={this.handlerChange}></input><br />
            <input type="submit" id="submit"></input>
          </div>
        </form>
      </div>
    )
  }
}
export default Additems;
