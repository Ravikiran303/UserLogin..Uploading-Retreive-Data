import axios from 'axios';

export const register = newUser => {
    return axios.post('users/Register',{
        email:newUser.email,
        password:newUser.password
    }).then(res => {
        console.log('Registered..!');
        return res.status;
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
       console.log(response);
       return response.data;
      })
      .catch(err => {
        console.log(err)
      })
  }
  export const threads = newThread => {
    return axios.post('users/thread',{
        email:newThread.email,
        title:newThread.title,
        description:newThread.description,
        tags:newThread.tags  
    }).then(res => {
        console.log('Thread Created..!',res);
        return res.status;
    })
}