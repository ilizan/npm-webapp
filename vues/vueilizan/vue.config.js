module.exports = {
    // 基本路径
    baseUrl: './',//打包生成index.html里引入cssjs文件相对路径
    devServer: {
        // host: 'localhost', // can be overwritten by process.env.HOST
        // port: 8081,//本地开发启动端口
        https: true,//是否开启https
        // open: true, //配置自动启动浏览器
        // proxy: {
        //     '/api': {
        //         target: 'http://api.ilizan.cn',//设置你调用的接口域名
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': '/'//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://m.kugou.com/rank/info/?rankid=23784&page=1&json=true'，直接写‘/api/rank/info/?rankid=23784&page=1&json=true’即可  
        //         }
        //     }
        // }
        disableHostCheck: true//用于云端编辑器云端启动配置
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        }
    }

}