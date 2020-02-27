import React , { Component } from 'react';
import JsonData from './jsondata.json'

console.log(JsonData);

class ToDoApp extends Component{
   render(){
       return(
           <div class="ToDoApp">
               <div class="header"><h4>ToDo App</h4></div>
               {JsonData.map((postDetail, index)=>{
               return<ul> 
             <li> <input type="checkbox" checked={postDetail.checked}></input> 
             {postDetail.name}  {postDetail.checked ?<span class="badge badge-pill badge-secondary">checked</span>:null }</li>
               </ul>
                })}
           </div>
       )
            }
}
export default ToDoApp;