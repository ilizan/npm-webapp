import axios from 'axios';
import iView from 'iview';
import Qs from 'qs'
let base = '';

//免费接口地址https://www.jianshu.com/p/e6f072839282
// export const getWeather = params => {return axios.get(`https://www.apiopen.top/weatherApi?city=%E5%8C%97%E4%BA%AC`, { params: params });};

export const getWeather = params => { return axios.get(`https://www.apiopen.top/weatherApi`, { params: params }); };

export const postDemo = params => { return axios.post(`/post`, params).then(res => res.data); };



//设置超时等待时间
axios.defaults.timeout = 10000

// 请求时的拦截
axios.interceptors.request.use(function (config) {
    // 发送请求之前做一些处理
    // console.log("统一请求时"+JSON.stringify(config));
    if (config.method == "post") {
        config.headers.yy = 'en';
        //转换成formdata格式
        config.data = Qs.stringify(config.data);
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        // console.log(config)
    }
    iView.LoadingBar.start();
    return config;
}, function (error) {
    // 当请求异常时做一些处理
    iView.LoadingBar.finish();
    console.log("请求异常" + error)
    return Promise.reject(error);
});

// 响应时拦截
axios.interceptors.response.use(function (response) {
    // 返回响应时做一些处理
    // console.log("统一响应时"+JSON.stringify(response))
    iView.LoadingBar.finish();
    return response;
}, function (error) {
    // 当响应异常时做一些处理
    iView.LoadingBar.finish();
    console.log("响应异常" + error)
    iView.Notice.error({
        title: error
    });
    return Promise.reject(error);
});