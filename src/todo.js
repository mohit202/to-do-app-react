import React from 'react';

export default class ToDo extends React.Component{
    render(){
        return(
            <div className="ToDoApp">
              <div className="header"><h2>ToDoApp by Using Redux</h2></div>
              <ul>
                  <li>
                      <input type="checkbox"></input>
                      <span className="badge badge-pill badge-secondary float-right">checked</span>
                  </li>
              </ul>      
            </div>
        )
    }
}