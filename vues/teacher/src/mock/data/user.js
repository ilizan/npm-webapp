import Mock from 'mockjs';
const LoginUsers = [
    {
        id: 1,
        username: 'admin',
        password: '123456',
        avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
        name: '张某某'
    }
];


const Users = [];

for (let i = 0; i < 101; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1),
    img: Mock.Random.image(),

    seriesname: "系列名"+Mock.Random.natural(0,10),
    seriestype: "大课堂",
    size1:Mock.Random.natural(0,300),
    size2:Mock.Random.natural(0,300),
    size3:Mock.Random.natural(0,300),
    size4:Mock.Random.natural(0,300)
  }));
}

export { LoginUsers,Users }