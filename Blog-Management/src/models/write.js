/**
 * 2018-1-11 Jifeng Cheng
 */

import { uploadArticle } from "../services/write";
import { message } from 'antd';

export default {
  namespace: 'write',
  
  state: {
  },

  effects: { 
    *articleSubmit({payload}, { call, put }) {
      console.log('article.......', payload)
      const params = {
        title: payload.data.titleInput,
        label: payload.data.labelInput,
        content: payload.data.contentInput,
      }
      const response = yield call(uploadArticle, params);
      console.log('1111111', response);
      if (response.status === 'success') {
        message.success('成功！')
      } else {
        message.error('失败')
      }
    }
  },

  reducers: {
    // writeTitle(state, { payload }) {
    //   return {
    //     ...state,
    //     articleTitle: payload.target.value,
    //   };
    // },

    // writeLabel(state, { payload }) {
    //   return {
    //     ...state,
    //     articleLabel: payload.target.value,
    //   };
    // },

    // writeContent(state, { payload }) {
    //   return {
    //     ...state,
    //     articleContent: payload.target.value,
    //   };
    // },
  },
};
