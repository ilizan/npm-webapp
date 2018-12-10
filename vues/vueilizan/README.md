# vueilizan

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```
## 说明

已集成iview，
注意：根据官方定制主题新建index.less方法,启动会报错,两种方法：

一、自定义样式需要新建vue.config.js添加某配置文件：

```
css: {
    loaderOptions: {
        less: {
            javascriptEnabled: true,
        }
    }
}
```
二、换less版本（注意版本号）;

package.json文件中修改版本号后重新安装项目依赖也可。
```
cnpm install less@2.7.3 --save-dev
```