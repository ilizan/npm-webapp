console.log(process.env.NODE_ENV);

module.exports = {
  publicPath: "./",
  lintOnSave: false,

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("autoprefixer")({
            browsers: ["Android >= 4.0", "iOS >= 8"]
          }),
          require("postcss-pxtorem")({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  }
};
