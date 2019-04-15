import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
//  import Landing from './Components/Landing';
import Login from './Components/Login';
import Profie from './Components/Profile'
import Register from './Components/Register';
import addingTo from './Components/addingTo';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          
          <div className="container">
          <Route exact path='/addingTo' component={addingTo}/>
          <Route exact path='/Register' component={Register}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/profile' component={Profie}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
