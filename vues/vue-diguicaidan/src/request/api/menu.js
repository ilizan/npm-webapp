import axios from '../http';


//登录
export const menu = data => {
    return axios({
        url: './menudata.json',
        method: 'get',
        data
    })
}