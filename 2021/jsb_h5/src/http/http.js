import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true

axios.create({
  timeout: 3*1000,
})


/**
 * 请求拦截
 */
axios.interceptors.request.use(config => {
  config.baseURL = process.env.VUE_APP_BASE_API;//process.env.NODE_ENV== 'development'?process.env.VUE_APP_BASE_API:'http://sd.shengbangtec.com'

  if(config.method == 'post'){
    config.data = qs.stringify(config.data);
  }
//   if(localStorage.getItem('userId'))//搜索plus.uploader.createUpload，上传文件类接口，添加userId请求头+App.vue中login/valid接口
    // config.headers['userId'] = localStorage.getItem('userId')
//   config.headers['flag'] = '2'
//   removePending(config)
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
axios.interceptors.response.use(response => {
  return response.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
          console.log('错误请求')
        break;
      case 401:
          console.log('未授权，请重新登录')
        break;
      case 404:
        console.log('请求错误,未找到该资源')
        break;
      case 408:
        console.log('请求超时')
        break;
      case 500:
        console.log('服务器端出错')
        break;
      default:
        console.log(`连接错误${err.response.status}`)
    }
  } else {
    console.log('连接到服务器失败')
  }
  return Promise.reject(err)
})

export default axios