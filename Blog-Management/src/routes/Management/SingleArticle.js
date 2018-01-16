/**
 * 2018-1-10 Jifeng Cheng
 * single article info
 */

import React from 'react';
import { connect } from 'dva';
import { Tag, Button, Card } from 'antd';
import styles from './ArticleManagement.less';

class SingleArticle extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: 'article/showArticle',
    })
  }
  render() {
    const { Article } = this.props;
    console.log('结果。。。。。111', Article.data);
    console.log('结果。。111', Article);
    return(
      <div>
        {
          Article.data === undefined ? null : Article.data.map(item => (
            <div key={item.Id} style={{ margin: '10px'}}>
              <Card>
                <div>
                  <div>
                    <h2>{item.Title}</h2>
                    <div className={styles.tag}>
                      <Tag color="#2db7f5">{item.Label}</Tag>
                      <Tag color="#87d068">{item.Label}</Tag>
                    </div>
                  </div>
                  <hr />
                  <p>{item.content}</p>
                </div>
                <div className={styles.tag}>
                  <div>
                    <Button type="primary" size="small" className={styles.button}>删除</Button>
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
}))(SingleArticle);