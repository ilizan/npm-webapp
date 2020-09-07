module.exports = {
  publicPath: './',
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
       experimentalNativeDepCheck: true
    }
  }
}