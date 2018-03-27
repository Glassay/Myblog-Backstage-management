/**
 * 2018-1-10 Jifeng Cheng
 * single article info
 */

import React from 'react';
import { connect } from 'dva';
import { Tag, Button, Card, Spin } from 'antd';
import Loading from 'react-loading-bar';
import '../../../node_modules/react-loading-bar/dist/index.css';
import styles from './SingleArticle.less';
import '../../../node_modules/highlight.js/styles/atom-one-dark.css';

class SingleArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'article/showArticle',
    })
  }
  handleDelete = (Id) => {
    console.log('id111>>>>>>', Id);
    this.props.dispatch({
      type: 'article/deleteArticle',
      payload: Id,
    })
  }
  render() {
    const { Article, loading } = this.props;
    console.log('loading>>>>>>', loading)
    return(
      <div>
        <Loading
          show={loading}
          color="red"
        />
        {
          loading === true ? null :
          Article.data === undefined ? null : Article.data.map((item) => (
            item.State === 0 ? null :
            <div key={item.Id} style={{ margin: '10px'}}>
              <Card>
                <div>
                  <div>
                    <h2>{item.Title}</h2>
                    <div className={styles.tag}>
                      <Tag color="#2db7f5">{item.Label1}</Tag>
                      <Tag color="#2db7f5">{item.Label2}</Tag>
                    </div>
                  </div>
                  <hr />
                  <div>{item.Brief}</div>
                </div>
                <div className={styles.tag}>
                  <div>
                    <Button
                      type="primary"
                      size="small"
                      className={styles.button}
                      onClick={() => this.handleDelete(item.Id)}
                    >删除</Button>
                  </div>
                  <div>
                    <Button
                      type="primary"
                      size="small"
                      className={styles.button}
                    >修改</Button>
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
  loading: state.loading.models.article,
}))(SingleArticle);
