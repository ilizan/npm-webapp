import axios from 'axios';

let base = '';

//免费接口地址https://www.jianshu.com/p/e6f072839282
export const getFn = params => {return axios.get(`https://www.apiopen.top/weatherApi?city=%E5%8C%97%E4%BA%AC`, { params: params });};

export const postFn = params => { return axios.post(`/post`, params).then(res => res.data); };
