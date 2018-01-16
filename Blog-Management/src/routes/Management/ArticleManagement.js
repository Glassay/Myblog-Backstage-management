/**
 * 2018-1-10 Jifeng Cheng
 * management the article of my article
 */

import React from 'react';
// import { connect } from 'dva';
import SingleArticle from './SingleArticle';

class ArticleManagement extends React.Component {
  // componentWillMount() {
  //   this.props.dispatch({
  //     type: 'article/showArticle',
  //   })
  // }
  render() {
    console.log('测试..........')
    // const { Article } = this.props;
    // console.log('ddddddddddddddd', Article);
    return(
      <div>
        <SingleArticle />
      </div>
    )
  }
}

export default ArticleManagement;
// export default connect(({ article }) => ({ article }))(ArticleManagement);
// export default connect(state => ({
//   Article: state.article.Article,
// }))(ArticleManagement);

