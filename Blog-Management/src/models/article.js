/**
 * 2018-1-14 Jifeng Cheng
 */

import { getArticle } from '../services/article';

export default {
  namespace: 'article',

  state: {
    Article: [],
    loading: false,
  },

  effects: {
    *showArticle({payload}, { call, put }) {
      // const params = getArticle.data
      console.log('adasdasdsada')
      const response = yield call(getArticle);
      console.log('response......', response);
      yield put({
        type: 'getArticles',
        payload: response,
      })
    },
  },

  reducers: {
    getArticles(state, action) {
      return{
        ...state,
        Article: action.payload,
      }
    }
  }
}