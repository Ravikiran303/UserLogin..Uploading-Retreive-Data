import React, { Component } from 'react';
import {getProfile} from './UserFunctions';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          address:'',
          mobile:'',
          errors: {}
        }
      }
    
      componentDidMount() {
        const token = localStorage.usertoken
        getProfile(token).then(res => {
          this.setState({
            first_name: res.first_name,
            last_name: res.last_name,
            email: res.email,
            address:res.address,
            mobile:res.mobile
          })
        })
      }
    
      render() {
        return (
          <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-8 mx-auto">
                <h1 className="text-center">PROFILE</h1>
              </div>
              <table className="table col-md-6 mx-auto">
                <tbody>
                  <tr>
                    <td>Fist Name</td>
                    <td>{this.state.first_name}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>{this.state.last_name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{this.state.email}</td>
                  </tr>
                  <tr>
                    <td>Adress</td>
                    <td>{this.state.address}</td>
                  </tr>
                  <tr>
                    <td>Mobile</td>
                    <td>{this.state.mobile}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      }
}

export default Profile
