// https://www.cnblogs.com/webBlog-gqs/p/9799445.html
module.exports = {
  pages: {
    index: {
      // 页面入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      title: 'Markdown 编辑器',
      // 在这个页面中包含的块，默认情况下会包含提取出来的通用 chunk 和 vendor chunk
      chunks: [ 'chunk-vendors', 'chunk-common', 'index']
    }
  }
}