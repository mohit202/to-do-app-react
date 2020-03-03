import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './home-page';
import About from './about-us';
import Message from './message';
import {BrowserRouter,Link, Route,Switch} from 'react-router-dom';
import Navlink from './nav';
class App extends React.Component {
  render(){
  return (
    <div>
     <BrowserRouter>
      <Navlink />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
      </Switch>
  </BrowserRouter> 

  </div>
  );
}
}

export default App;
