
    // import React, { Component } from 'react';
    // class Person extends Component{
    //     render(){
    //   return(
    //     <h1 class="heading">I'm a person</h1>
      
    //   )}
    // }
    // export default Person;
import React ,{Component} from 'react';

export default class Profile extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      name:'mohit yadav',
      email:'mky@gamil.com',
      count:0
    }
  }
  updateState()
  {
    this.setState({
      name:'sandeep sharma',
      count:this.state.count+2
    })
  }
  render()
  {
    console.warn("render");
    return(
      <div>
  <h2>name: {this.state.name} email :{this.state.email},count is  {this.state.count}</h2>
  <button onClick ={()=>{this.updateState()}}>Update Name</button>
      </div>
    )
  }
}