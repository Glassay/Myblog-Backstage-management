/**
 * 2017-1-10 Jifeng CHeng
 * the markdown editor by marked && simplemde && highlight.js
 */

import React from 'react';
import SimpleMDE from 'simplemde'
import marked from 'marked';
import highlight from 'highlight.js';
import styles from './MyEdtor.less';

class MyEditor extends React.Component {
  componentDidMount() {
    this.smde = new SimpleMDE({
      element: document.getElementById('editor').childElementCount,  
      // autofocus: true,
      autosave: true,
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

    this.input.focus();
  }
  render() {
    return(
      <div>
        <div className={styles.head}>
          <input
            placeholder="标题"
            ref={(input) => {this.input = input}}
          />
        </div>
        <textarea id="editor" placeholder="在此处写文章！"></textarea>
      </div>
    )
  }
}

export default MyEditor;
