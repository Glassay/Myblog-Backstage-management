/**
 * 2018-1-11 Jifeng Cheng
 */

import request from '../utils/request';

export async function createAdmin() {
  return request('http://10.0.0.48:8080/adminCreate', {
    method: 'POST',
    mode: 'cors',
    body: {
      name: 'wangriyu',
      password: '123456'
    },
  });
}


