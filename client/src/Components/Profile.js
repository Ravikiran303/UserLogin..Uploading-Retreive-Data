import React, { Component } from 'react';
import {getProfile} from './UserFunctions';
import { Link } from 'react-router-dom';



class Profile extends Component {
  
    constructor() {
        super()
        this.state = {
          email: '',
          threads:[]
        }
      }
      componentDidMount() {
        const token = localStorage.usertoken
        getProfile(token).then(res => {
          this.setState({
            email: res.email,
            threads: res.threads
          })
        })
      }
      todoList() {
        return this.state.threads.map(function(currentTodo, i) {
            return (
              <div className="jumbotron mt-S" style={{marginTop:10}}>
            <div className="col-sm-8 mx-auto">
            <ul>
                  <li >
                    Title = {currentTodo.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Tags = {currentTodo.tags}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Date = {currentTodo.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                    User = {currentTodo.email}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Description  = {currentTodo.description}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </li>
              </ul>
            </div>
        </div>
            );

        });
    }

    
    
      render() {
        return (
          <div className="container">
            <p style={{float:"right",marginRight:-70}}>Hi..{this.state.email}</p>
            
            {this.todoList()}
            <ul className="btn btn-lg btn-primary text-white" style={{posistion:"absolute",float:"right",marginRight:-50}}>
              <Link to={{pathname:'/addingTo',email:this.state.email}}>+</Link>
            </ul>
          </div>
        )
      }
}

export default Profile
