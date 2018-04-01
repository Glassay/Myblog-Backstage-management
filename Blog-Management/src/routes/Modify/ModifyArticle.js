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
import styles from './ModifyArticle.less';
import '/Users/a8/github/React/Myblog-Backstage-management/Blog-Management/node_modules/highlight.js/styles/atom-one-dark.css';
import { Button } from 'antd';

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
  }
  render() {
    return(
      <div>
        <div className={styles.head}>
          <input
            style={{ marginBottom: 30 }}
            placeholder="标题"
            ref={(input) => {this.input = input}}
            id="title"
          />
        </div>

        <div className={styles.head}>
          <input
            style={{ marginBottom: 30 }}
            placeholder="文章标签1"
            id="label1"
          />
          <input
            style={{ marginBottom: 30 }}
            placeholder="文章标签2"
            id="label2"
          />
          <input
            style={{ marginBottom: 30 }}
            placeholder="文章简介"
            id="briefInfo"
          />
        </div>

        <div>
          <textarea
            id="editor"
            placeholder="在此处写文章！"
          />
        </div>
        <div>
          <Button
            type="primary"
            size="small"
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

export default ModifyArticle;
