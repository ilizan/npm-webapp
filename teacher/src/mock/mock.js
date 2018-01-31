//导入模块
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Users } from './data/user';
import { Kcbs } from './data/course';

let _Kcbs = Kcbs;
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

mock.onGet('/tvInfo').reply(config => {
    console.log(config)
    let { userid } = config.params;
    console.log(userid)
    let obj = {
        count:0,
        notCount:0,
        thisDayCount:0,
        enrollUser:0,
        totalMin:0,
        thisDayMin:10
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, obj]);
        }, 1000);
    });
})
mock.onGet('/kcblist').reply(config => {
    let { page, name } = config.params;
    // console.log(state)
    let mockKcbs = _Kcbs;
    // let mockKcbs = mockKcbs.filter(course => {
    //     if (name && course.name.indexOf(name) == -1) return false;
    //     return true;
    // });

    let total = mockKcbs.length;
    mockKcbs = mockKcbs.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
    let obj = {};
    obj.total = total;
    obj.users = mockKcbs;
    // console.log(JSON.stringify(obj));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, obj]);
        }, 1000);
    });
});
mock.onGet('/peoplelist').reply(config => {
    let { page, name } = config.params;
    // let mockUsers = _Users;
    let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
    });
    let total = mockUsers.length;
    mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
    let obj = {};
    obj.total = total;
    obj.users = mockUsers;
    // console.log(JSON.stringify(obj));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, obj]);
        }, 1000);
    });
});


mock.onGet('/userlist').reply(config => {
    let { page, name } = config.params;
    let mockUsers = _Users;
    // let mockUsers = _Users.filter(user => {
    //     if (name && user.name.indexOf(name) == -1) return false;
    //     return true;
    // });
    let total = mockUsers.length;
    mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
    let obj = {};
    obj.total = total;
    obj.users = mockUsers;
    // console.log(JSON.stringify(obj));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([200, obj]);
        }, 1000);
    });
});

export default mock;