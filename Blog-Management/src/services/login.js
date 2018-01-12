/**
 * 2018-1-10 Jifeng Cheng
 */
// import request from '../utils/request';
import axios from 'axios';

// export async function AdminLogin(params) {
//   return request({
//     url: '/adminLogin',
//     method: 'post',
//     data: params,
//   });
//   console.log('params.....',params);
// }

export async function AdminLogin(payload) {
  const response = await axios.post('http://10.0.0.48:8080/adminLogin', {
    name: payload.username,
    password: payload.passward,
  })

  return response.data
}

