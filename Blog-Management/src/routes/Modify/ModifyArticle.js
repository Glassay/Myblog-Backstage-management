/**
 * 2018-04-01 Jifeng Cheng
 */

/**
 * 2017-1-10 Jifeng CHeng
 * the markdown editor by marked && simplemde && highlight.js
 */

import React from 'react';
import SimpleMDE from 'simplemde'
import marked from 'marked';
import highlight from 'highlight.js';
import { Button } from 'antd';
import { connect } from 'dva';

import styles from './ModifyArticle.less';
import '/Users/a8/github/React/Myblog-Backstage-management/Blog-Management/node_modules/highlight.js/styles/atom-one-dark.css';

class ModifyArticle extends React.Component {
  componentDidMount() {
    this.smde = new SimpleMDE({
      element: document.getElementById('editor'), 
      indentWithTabs: false,
      tabSize: 4,
      status: ["autosave", "lines", "words", "cursor"],
      previewRender: function(plainText) {
        return marked(plainText,{
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) {
            return highlight.highlightAuto(code).value;
          }
        });
      },
    })
    this.node.scrollIntoView();
  }

  handleModify = () => {
    const modifyResult = {
      IdInput: document.getElementById('Id').value,
      titleInput: document.getElementById('title').value,
      label1Input: document.getElementById('label1').value,
      label2Input: document.getElementById('label2').value,
      briefInfoInput: document.getElementById('briefInfo').value,
      contentInput: this.smde.value(),
    }
    console.log('modifyResult>>>>>>>', modifyResult)
    this.props.dispatch({
      type: 'article/modifyArticle',
      payload: modifyResult,
    })
  }
  render() {
    const { Article, keys } = this.props;
    console.log('Article>>>>>.', Article)
    return(
      Article.data === undefined ? null :
      <div ref={node => (this.node = node)}>
        <div className={styles.head}>
          <input
            style={{ marginBottom: 30 }}
            // type="number"
            defaultValue={Article.data[keys].Id}
            ref={(input) => {this.input = input}}
            id="Id"
          />
        </div>
        <div className={styles.head}>
          <input
            style={{ marginBottom: 30 }}
            defaultValue={Article.data[keys].Title}
            id="title"
          />
        </div>

        <div className={styles.head}>
          <input
            style={{ marginBottom: 30 }}
            defaultValue={Article.data[keys].Label1}
            id="label1"
          />
          <input
            style={{ marginBottom: 30 }}
            defaultValue={Article.data[keys].Label2}
            id="label2"
          />
          <input
            style={{ marginBottom: 30 }}
            defaultValue={Article.data[keys].Brief}
            id="briefInfo"
          />
        </div>

        <div>
          <textarea
            id="editor"
            defaultValue={Article.data[keys].Content}
          />
        </div>
        <div>
          <Button
            type="primary"
            size="small"
            onClick={this.handleModify}
          >确认修改</Button>
          <Button
            type="primary"
            size="small"
            className={styles.btnLayout}
          >取消</Button>
        </div>
      </div>
    )
  }
}

export default connect(({ article }) => ({
  ...article,
}))(ModifyArticle);
