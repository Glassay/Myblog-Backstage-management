/**
 * 2018-1-14 Jifeng Cheng
 */

import { getArticle } from '../services/article';
import { deleteArticle } from '../services/article';
import { message } from 'antd';

export default {
  namespace: 'article',

  state: {
    Article: [],
    loading: false,
  },

  effects: {
    *showArticle({ payload }, { call, put }) {
      // const params = getArticle.data
      console.log('adasdasdsada')
      const response = yield call(getArticle);
      console.log('response......', response);
      yield put({
        type: 'getArticles',
        payload: response,
      })
    },

    *deleteArticle({ payload }, { call, put }) {
      console.log('payload+++++', payload)
      const id = [];
      id.push(payload);
      const response = yield call(deleteArticle, id)
      
      if(response === 'ErrMysql') {
        message.error('删除失败！')
      } else {
        message.success('删除成功!')
      }
    },
  },

  reducers: {
    getArticles(state, action) {
      return {
        ...state,
        Article: action.payload,
      }
    },

    updateArticle(state, action) {
      return {
        ...state,
        Article: action.payload,
      }
    },

    deleteId(state, action) {
      return {
        ...state,
        DeleteId: action.payload,
      }
    }
  }
}