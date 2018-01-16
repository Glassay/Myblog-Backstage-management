/**
 * 2018-1-14 Jifeng Cheng
 */

import request from '../utils/request';

export async function getArticle(params) {
  return request({
    url: '/readAll',
    method: 'get',
    data: params,
  })
}

// import axios from 'axios';

// export async function getArticles(payload) {
//   const response = await axios.post('http://10.0.0.48:8080/readAll', {
//     page: payload.current,
//   });
//   return response.data;
// }