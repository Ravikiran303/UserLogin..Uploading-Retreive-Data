import axios from 'axios';

export const register = newUser => {
    return axios.post('users/Register',{
        first_name:newUser.first_name,
        last_name:newUser.last_name,
        email:newUser.email,
        password:newUser.password,
        address:newUser.address,
        mobile:newUser.mobile
    }).then(res => {
        console.log('Registered!');
    })
}
export const login = user => {
    return axios.post('users/login',{
        email:user.email,
        password:user.password
    }).then(res => {
        localStorage.setItem('usertoken',res.data);
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}
export const getProfile = token => {
    return axios
      .get('users/profile', {
        headers: { Authorization: ` ${token}` }
      })
      .then(response => {
        console.log(response)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
