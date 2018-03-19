/**
 * 2018-1-10 Jifeng Cheng
 * single article info
 */

import React from 'react';
import { connect } from 'dva';
import marked from 'marked';
import highlight from 'highlight.js';
import { Tag, Button, Card } from 'antd';
import styles from './SingleArticle.less';
import '/Users/a8/github/React/Myblog-Backstage-management/Blog-Management/node_modules/highlight.js/styles/atom-one-dark.css';

class SingleArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'article/showArticle',
    })
    marked.setOptions({
      highlight: code => highlight.highlightAuto(code).value,
    });
  }

  handleDelete = () => {
    const articleId = this.props.Article.data.Id;
    console.log('articleId......', articleId)
    console.log('this.props.article.data......', this.props.Article.data)
    const params = {
      data: articleId,
    }

    this.props.dispatch({
      type: 'article/deleteArticle',
      payload: params,
    })
  }
  render() {
    const { Article } = this.props;
    console.log('Article.data .......', Article.data);
    console.log('Article....', Article);
    // const singleLabel = this.props.Article
    return(
      <div>
        {
          Article.data === undefined ? null : Article.data.map(item => (
            console.log('item.Label......', item.Label),
            <div key={item.Id} style={{ margin: '10px'}}>
              <Card>
                {/* { item.Label === '' ? 
                <div>
                  <div>
                    <h2>{item.Title}</h2>
                  </div>
                  <hr />
                  <p className={styles.article}>{item.Content}</p>
                </div> : 
                <div>
                  <div>
                    <h2>{item.Title}</h2>
                    <div className={styles.tag}>
                      <Tag color="#2db7f5">{item.Label}</Tag>
                    </div>
                  </div>
                  <hr />
                  <p className={styles.article}>{marked(item.Content)}</p>
                </div>
                } */}
                <div>
                  <div>
                    <h2>{item.Title}</h2>
                    <div className={styles.tag}>
                      <Tag color="#2db7f5">{item.Label1}</Tag>
                      <Tag color="#2db7f5">{item.Label2}</Tag>
                    </div>
                  </div>
                  <hr />
                  <div dangerouslySetInnerHTML={{ __html: marked(item.Content) }}/>
                </div>
                <div className={styles.tag}>
                  <div>
                    <Button
                      type="primary"
                      size="small"
                      className={styles.button}
                      onClick={this.handleDelete}
                    >删除</Button>
                  </div>
                  <div>
                    <Button type="primary" size="small" className={styles.button}>修改</Button>
                  </div>
                </div>
              </Card>
            </div>
          ))
        }
      </div>
    )
  }
}

export default connect(state => ({
  Article: state.article.Article,
  loading: state.loading.global,
}))(SingleArticle);