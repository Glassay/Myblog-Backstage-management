/**
 * 2018-1-14 Jifeng Cheng
 */

import { message } from 'antd';
import { routerRedux } from 'dva/router';

import { getArticle } from '../services/article';
import { deleteArticle } from '../services/article';
import { modifyArticle } from '../services/article';

export default {
  namespace: 'article',

  state: {
    Article: [],
    loading: false,
    keys: null,
    modifyResult: null,
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
      
      if(response.status === 'ErrMysql') {
        message.error('删除失败！')
      } else {
        message.success('删除成功!')
        const res = yield call(getArticle)
        console.log('deleteRes>>>>>>', res)
        yield put({
          type: 'udpateArticle',
          payload: res,
        })
        // setTimeout(this.setState({
        //   Article: res
        // }), 300)
      }
    },

    *getModifyInfo({ payload }, { put }) {
      yield put({
        type: 'modifyId',
        payload: payload,
      });
      yield put(routerRedux.push('/main/modify'))
    },

    *modifyArticle({ payload }, { call, put, select }) {
      console.log('payload>>>>>>>', payload)
      const params = {
        id: +payload.IdInput,
        title: payload.titleInput,
        label1: payload.label1Input,
        label2: payload.label2Input,
        brief: payload.briefInfoInput,
        content: payload.contentInput,
      }
      console.log('params???????', params)
      console.log('id>>>>>>>', params.id)
      const response = yield call(modifyArticle, params);
      console.log('modify answer+++++++', response);
      if (response.status === 'success') {
        message.success('asd')
      } else {
        message.error('xzc')
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

    updateArticle(state, { payload }) {
      return {
        ...state,
        Article: payload.Article.slice(),
      }
    },

    deleteId(state, action) {
      return {
        ...state,
        DeleteId: action.payload,
      }
    },

    modifyId(state, action) {
      return {
        ...state,
        keys: action.payload,
      }
    },

    modifyInfo(state, action) {
      return {
        ...state,
        modifyResult: action.payload,
      }
    }
  }
}