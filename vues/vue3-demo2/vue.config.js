module.exports = {
    // 基本路径
    baseUrl: './',//打包生成index.html里引入cssjs文件相对路径
    devServer: {
        // host: 'localhost', // can be overwritten by process.env.HOST
        port: 8081,//本地开发启动端口
        https: true,//是否开启https
        open: true, //配置自动启动浏览器
    }
}