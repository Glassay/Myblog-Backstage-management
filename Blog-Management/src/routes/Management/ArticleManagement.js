/**
 * 2018-1-10 Jifeng Cheng
 * management the articles
 */

import React from 'react';
import { connect } from 'dva';
import SingleArticle from './SingleArticle';

class ArticleManagement extends React.Component {
  render() {
    console.log('测试..........')
    return(
      <div>
        <SingleArticle />
      </div>
    )
  }
}

export default connect(({ article }) => ({
  ...article,
}))(ArticleManagement);
