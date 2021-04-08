import http from '../http'


export const authLogin = () => {
    return http({
        url: './data/authLogin.json',
        method: 'get',
    })
}