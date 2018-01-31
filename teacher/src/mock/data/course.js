import Mock from 'mockjs';

const Kcbs = [];

for (let i = 0; i < 101; i++) {
  Kcbs.push(Mock.mock({
    id: Mock.Random.guid(),
    seriesname: "系列名"+Mock.Random.natural(0,10),
    coursename: "课时名"+Mock.Random.natural(0,50),
    tvdate: Mock.Random.date('yyyy-MM-dd'),
    tvtime: "xx:xx~xx:xx",
    state: Mock.Random.integer(0, 1),
    enrollsize: Mock.Random.natural(0,300)
  }));
}

export { Kcbs }