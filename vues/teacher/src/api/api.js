import axios from 'axios';

let base = '';

export const getTvInfo = params => {return axios.get(`/tvInfo`, { params: params });};

export const requestLogin = params => { return axios.post(`/login`, params).then(res => res.data); };

export const getKcbListPage = params => {return axios.get(`/kcblist`, { params: params });};

export const getUserListPage = params => {return axios.get(`/userlist`, { params: params });};

export const getPeopleListPage = params => {return axios.get(`/peoplelist`, { params: params });};
