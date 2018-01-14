/**
 * 2018-1-10 Jifeng Cheng
 * single article info
 */

import React from 'react';
import { Tag, Button, Card } from 'antd';
import styles from './ArticleManagement.less';

class SingleArticle extends React.Component {
  componentWillMount() {
    
  }
  render() {
    return(
      <div style={{ margin: '10px'}}>
        <Card>
          <div>
            <div>
              <h2>如何建立一个能发布markdown文章的博客</h2>
              <div className={styles.tag}>
                <Tag color="#2db7f5">标签</Tag>
                <Tag color="#87d068">标签</Tag>
              </div>
            </div>
            <hr />
            <p>最近在做一个个人博客，大家都知道markdown写的博客效果看着是非常好的。但我想厉害的应该是markdown的解析器吧，把我们的mkd语法解析并加上对应的样式。
  那么问题来了，如果我自己搭建博客，要怎么才能支持发表mkd的博客呢？或者说，现在支持mkd的博客都是怎么存放mkd文档的呢？像我以前是用在线编辑器(ueditor)写，自动生成html而且内嵌样式，然后提交存放到数据库，下次读出来就好了。
  找了很多在线编辑器，都支持导出html但导出的文件并没有样式，看起来就很尴尬。所以样式还是得我自己写吗……有木有现成的xxx.css可以用呢</p>
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
    )
  }
}

export default SingleArticle;