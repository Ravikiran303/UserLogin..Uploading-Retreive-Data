import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Profie from './Components/Profile'
import Register from './Components/Register';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Landing}/>
          <div className="container">
          <Route exact path='/' component={Register}/>
          <Route exact path='/' component={Login}/>
          <Route exact path='/' component={Profie}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
