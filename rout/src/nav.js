import React from 'react';
import {Link} from 'react-router-dom';

export default class Navlink extends React.Component {
    render(){
        return(
            <div className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/message">Message</Link></li>
                </ul>
            </div>
        )
    }
}