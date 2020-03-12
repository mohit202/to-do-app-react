import React from 'react';
import { getTodo } from "../Actions/addItems";
export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: ''
        }
    }
    render() {
        if (!this.props.getTodo) return null;
        console.log("jalska");
        return (
            <div class="ListItem">
                <ul>
                </ul>
            </div>
        )
    }
}