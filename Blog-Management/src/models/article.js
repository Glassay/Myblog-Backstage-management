/**
 * 2018-1-14 Jifeng Cheng
 */

import { getArticle } from '../services/article';

export default {
  namespace: 'article',

  state: {
    Article: [],
  },

  effects: {
    *showArticle({payload}, { call, put }) {
      const params = getArticle.data
      console.log('adasdasdsada', params)
      const response = yield call(getArticle, params);
      console.log('response......', response);
      yield put({
        type: 'getArticles',
        payload: response,
      })
    },
  },

  reducers: {
    getArticles(state, {payload}) {
      return{
        ...state,
        Article: payload,
      }
    }
  }
}