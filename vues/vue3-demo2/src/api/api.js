import axios from 'axios';

let base = '';

export const getFn = params => {return axios.get(`/get`, { params: params });};

export const postFn = params => { return axios.post(`/post`, params).then(res => res.data); };
