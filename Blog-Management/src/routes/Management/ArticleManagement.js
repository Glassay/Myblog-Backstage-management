/**
 * 2018-1-10 Jifeng Cheng
 * management the article of my article
 */

import React from 'react';
import { connect } from 'dva';
import SingleArticle from './SingleArticle';

class ArticleManagement extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'article/showArticle',
    })
  }
  render() {
    return(
      <div>
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
      </div>
    )
  }
}

export default connect(({ article }) => ({ article }))(ArticleManagement);

