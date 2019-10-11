import axios from '../http';


//登录
export const login = data => {
    return axios({
        url: '/login',
        method: 'post',
        data
    })
}