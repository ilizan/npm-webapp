# teacher

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

安装elemeui：
npm i element-ui -S

//安装sass：（https://www.jianshu.com/p/8e60048baeb7）
$ cnpm install sass-loader node-sass vue-style-loader --D
webpack.base.config.js里添加：
{  //从这一段上面是默认的！不用改！下面是没有的需要你手动添加，相当于是编译识别sass!
    test: /\.scss$/,
    loaders: ["style", "css", "sass"]
}

安装vue-axios：
npm install --save axios vue-axios

安装mockjs模拟请求数据：（https://www.cnblogs.com/jasonwang2y60/p/7302449.html）
npm install mockjs --save-dev

axios-mock-adapter安装：
npm install axios-mock-adapter --save-dev
