import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';

export class Navbar extends Component {
    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }
  render() {
      const userLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="/" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
            </li>
           
        </ul>
      );
      const loginRegLink = (
        <ul className="navbar-nav" >
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                    login
                </Link>
                </li>
                <li className="nav-item">
                <Link to="/Register" className="nav-link">
                    Register
                </Link>
            </li>        
        </ul>
      );
      return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
            aria-controls="navbar1"
            aria-expanded="false"
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar1">
                <ul className="navbar-nav mr-auto text-white" >
                    D-Coder
                </ul>
                {localStorage.usertoken ? userLink : loginRegLink}
            </div>
          </nav>
      )
  }
}

export default withRouter(Navbar)
