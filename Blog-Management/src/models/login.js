/**
 * 2018-1-10 Jifeng Cheng
 */

import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { AdminLogin } from '../services/login';

export default {
  namespace: 'login',

  state: {
  },

  effects: {
    *adminLogin({ payload }, { call, put, select}) {
      const login = yield select(state => state.login);
      console.log('login+++++', login)
      const result = yield call(AdminLogin, login);
      console.log('result....', result.status)
      if (result.status === 'success') {
        yield put(routerRedux.push('/main'))
      } else if (result.status === 'not found user'){
        message.error('用户名不存在！')
      } else {
        message.error('密码错误！')
      }
    }

  },

  reducers: {
  },
}

