/**
 * 2018-1-10 Jifeng Cheng
 */
// import request from '../utils/request';
import axios from 'axios';

// export async function AdminLogin(params) {
//   return request({
//     url: '/adminLogin',
//     method: 'post',
//     data: {
//       name: params.username,
//       passward: params.passward,
//     },
//   });
//   console.log('params.....',params.data);
// }

export async function AdminLogin(payload) {
  const inputUsername = document.getElementById('username').value;
  const inputPassward = document.getElementById('passward').value;
  const response = await axios.post('http://10.0.0.48:8080/adminLogin', {
    name: inputUsername,
    password: inputPassward,
  })

  return response.data
}

