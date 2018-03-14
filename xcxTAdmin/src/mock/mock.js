//导入模块
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers,Users } from './data/user';
let _Users = Users;
// 设置模拟调试器实例 
let mock = new MockAdapter(axios);
// 模拟任意GET请求到 /users 
//reply的参数为 (status, data, headers) 
mock.onPost('/login').reply(config => {
    let { username, password } = JSON.parse(config.data);
    return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
            let hasUser = LoginUsers.some(u => {
                if (u.username === username && u.password === password) {
                    user = JSON.parse(JSON.stringify(u));
                    user.password = undefined;
                    return true;
                }
            });

            if (hasUser) {
                resolve([200, { code: 200, msg: '请求成功', user }]);
            } else {
                resolve([200, { code: 500, msg: '账号或密码错误' }]);
            }
        }, 1000);
    });
});
//获取用户列表（分页）
mock.onGet('/user/list').reply(config => {
    let { page, name } = config.params;
    let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
    });
    let total = mockUsers.length;
    mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, {
                total: total,
                users: mockUsers
            }]);
        }, 1000);
    });
});
export default mock;