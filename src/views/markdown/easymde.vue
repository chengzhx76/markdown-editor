<template>
  <div class="easy-mark-down">
    <div class="list">
      <div class="header"></div>
    </div>
    <div class="editor">
      <textarea ref="area" v-model="value"></textarea>
    </div>
  </div>
</template>

<script>
  // https://www.markdownguide.org/basic-syntax/
  import easyMDE from 'easymde'
  export default {
    name: 'easy-MarkDown',
    data() {
      return {
        value: 'easymde \n # 我的',
        mde: null,
        keystrokes: 0
      }
    },
    created() {
    },
    mounted() {
      this.mde = new easyMDE({
        // 挂载的元素
        element: this.$refs.area,
        // 拼写检查
        spellChecker: false,
        autoDownloadFontAwesome: false,
        toolbar: [
          'undo', 'redo', 'preview', 'side-by-side', 'fullscreen', 
          '|',
          {
              name: "save",
              action: (editor) => {
                console.log(editor)
                console.log(this.mde.value())
              },
              className: "fa fa-star",
              title: "保存",
          }, 
          '|',
          {
              name: "link",
              action: 'https://github.com/chengzhx76/markdown-editor',
              className: "fa fab fa-github",
              title: "GitHub",
          }
        ],
        // 状态栏
        // status: false,
        status: ['autosave', 'lines', 'words', 'cursor', {
          className: 'keystrokes',
          defaultValue: function(el) {
            this.keystrokes = 0
            el.innerHTML = '0 Keystrokes'
            console.log(el)
          },
          onUpdate: function(el) {
            el.innerHTML = ++this.keystrokes + ' Keystrokes'
            console.log(el)
          }
        }],
        initialValue: '# EasyMDE \n ## 试试 \n ### 试试 \n Go ahead, play around with the editor! Be sure to check out **bold**, *italic* and ~~strikethrough~~ styling, [links](https://google.com) and all the other features. You can type the Markdown syntax, use the toolbar, or use shortcuts like `ctrl-b` or `cmd-b`.'
      })
      // this.mde.value(this.value)
    },
    watch: {
      value(newVal) { 
        this.mde.value(newVal) 
      } 
    },
    beforeDestroy() {
      this.mde.toTextArea()
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  /*@import '~easymde/dist/easymde.min.css';*/
  @import "../../styles/easymde.css";

  .easy-mark-down {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .list {
    width: 240px;
    background-color: #ddd;
    .header {
      height: 50px;
      width: 100%;
      background-color: #C7C7C7;
    }
  }
  .editor {
    height: calc(100% - 1px);
    width: calc(100% - 240px);
    position: relative;
  }

</style>
<style rel="stylesheet/scss" lang="scss">
  .fa-w-16 {
    font-size: 18px;
  }
  .fa-w-18 {
    font-size: 18px;
  }

  // # 样式
  .cm-formatting-header {
    color: rgba(0, 0, 0, .28);
    font-style: normal;
    font-weight: 400;
  }

  // 状态栏
  .editor-statusbar {
    height: 20px;
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #007acc;
    padding: 0;
    color: #fff;
    z-index: 99;
    .words {
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: bold;
      &:before {
        content: '';
      }
      &:after {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        font-weight: normal;
        content: ' 词';
      }
    }
    .lines {
      font-size: 14px;
      font-weight: bold;
      &:before {
        content: '';
      }
      &:after {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        font-weight: normal;
        content: ' 行';
      }
    }
  }
  .keystrokes {
    margin-right: 50px;
  }
</style>
