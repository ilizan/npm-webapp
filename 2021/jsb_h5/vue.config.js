const css = {
  loaderOptions: {
    postcss: {
      plugins: [
        require("autoprefixer")({
          // 配置使用 autoprefixer
          // browsers: ['Android >= 4.0', 'iOS >= 8']
          overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
        }),
        require("postcss-pxtorem")({
          rootValue: 37.5,
          propList: ['*']
        })
      ]
    }
  }
}

module.exports = {
  publicPath: './',
  lintOnSave: false,
  css
}