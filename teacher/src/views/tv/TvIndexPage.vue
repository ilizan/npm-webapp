<template>
  <div  class="tvindex">
      <div class="main">
        <el-row>
          <el-col :span="16">
            <el-row class="tvLeft">
              <el-col :span="8">
                <div class="tag">
                  <h2>总课时</h2>
                  <p>
                    <span>{{tvInfo.count}}</span>
                  </p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="tag">
                  <h2>未完成课时</h2>
                  <p>
                    <span>{{tvInfo.notCount}}</span>
                  </p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="tag">
                  <h2>今日课时</h2>
                  <p>
                    <span>{{tvInfo.thisDayCount}}</span>
                  </p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="tag">
                  <h2>报名用户</h2>
                  <p>
                    <span>{{tvInfo.enrollUser}}</span>
                  </p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="tag">
                  <h2>直播时长</h2>
                  <p>
                    <span>{{tvInfo.totalMin}}</span>分钟
                  </p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="tag">
                  <h2>今日时长</h2>
                  <p>
                    <span>{{tvInfo.thisDayMin}}</span>分钟
                  </p>
                </div>
              </el-col>
              
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-row class="tvRight">
              <el-col :span="24">
                <div class="tag">
                  <h2>直播提醒</h2>
                  <p class="date">{{time}}</p>
                  <p>系列名称</p>
                  <p>课时5名称</p>
                  <p>10:00~12:00</p>
                  <p>
                    <el-button type="primary" size="mini">发起直播</el-button>
                  </p>
                </div>
              </el-col>
            </el-row>
          </el-col>
          
        </el-row>
        <el-row class="source">
          <el-col :span="24">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="课程表" name="first">
                      <el-col :span="24">
                        <el-form :inline="true" :model="formInline" class="demo-form-inline">
                          <el-form-item label="系列名称">
                            <el-input style="width:200px;" v-model="formInline.name" placeholder="系列名称"></el-input>
                          </el-form-item>
                          <el-form-item label="直播日期">
                            <el-date-picker style="width:200px;"
                              v-model="formInline.startdate"
                              type="date"
                              placeholder="开始日期" id="startDate">
                            </el-date-picker>
                            -
                            <el-date-picker
                              v-model="formInline.enddate"
                              type="date" style="width:200px;"
                              placeholder="截止日期" id="endDate">
                            </el-date-picker>
                          </el-form-item>
                          
                          <el-form-item label="直播状态">
                            <el-col :span="24">
                            <el-select style="width:200px;" v-model="formInline.state" placeholder="直播状态">
                              <el-option label="全部" value=""></el-option>
                              <el-option label="已直播" value="0"></el-option>
                              <el-option label="未直播" value="1"></el-option>
                            </el-select>
                            </el-col>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" v-on:click="getCourses">查询</el-button>
                          </el-form-item>
                        </el-form>
                      </el-col>

              <el-table :data="courses" v-loading="listLoading" style="width: 100%;">
              <el-table-column type="index" width="60" label="序号" align="center">
              </el-table-column>
              <el-table-column
                prop="seriesname"
                label="系列名称">
              </el-table-column>
              <el-table-column
                prop="coursename"
                label="课时名称">
              </el-table-column>
              <el-table-column
                prop="tvdate"
                label="直播日期">
              </el-table-column>
              <el-table-column
                prop="tvtime"
                label="直播时段">
                <!-- <template slot-scope="scope">
              <img  :src="scope.row.img" alt="" style="width: 10px;height: 10px">
            </template> -->
              </el-table-column>
              <el-table-column prop="" label="直播状态">
                <template slot-scope="scope">
                  <el-tag v-if="scope.row.state=='0'" type="danger">已直播</el-tag>
                  <el-tag v-else>未直播</el-tag>
                </template>
              </el-table-column>
              <el-table-column
                prop="enrollsize"
                label="报名人数">
              </el-table-column>
              <el-table-column label="基本操作" width="150">
                <template slot-scope="scope">
                  <el-button size="small" @click="handleView(scope.$index, scope.row)">详情</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="margin-top: 10px;">
              <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="form1.total" style="float:right;">
              </el-pagination>
            </el-col>


          </el-tab-pane>
              <el-tab-pane label="报名用户" name="second">
                <el-col :span="24">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="系列名称">
                    <el-col :span="24">
                    <el-select style="width:200px;" v-model="formInline2.name" placeholder="系列名称">
                      <el-option label="全部" value="0"></el-option>
                    </el-select>
                    </el-col>
                  </el-form-item>
                  
                  <el-form-item>
                    <el-button type="primary" v-on:click="getUsers">查询</el-button>
                  </el-form-item>
                </el-form>
              </el-col>

              <el-table :data="users" v-loading="listLoading" style="width: 100%;">
              <el-table-column type="index" width="60" label="序号" align="center">
              </el-table-column>
              <el-table-column
                prop="seriesname"
                label="系列名称">
              </el-table-column>
              <el-table-column
                prop="seriestype"
                label="类型">
              </el-table-column>
              <el-table-column
                prop="size1"
                label="预售期数量">
              </el-table-column>
              <el-table-column
                prop="size2"
                label="开课期数量">
              </el-table-column>
              <el-table-column
                prop="size3"
                label="节课后数量">
              </el-table-column>
              <el-table-column
                prop="size4"
                label="报名人数">
              </el-table-column>
            </el-table>
            <!--工具条-->
            <el-col :span="24" class="toolbar" style="margin-top: 10px;">
              <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChangeUser" :page-size="20" :total="form2.total" style="float:right;">
              </el-pagination>
            </el-col>
              </el-tab-pane>
              <el-tab-pane label="基本信息" name="third">基本信息</el-tab-pane>
            </el-tabs>
          </el-col>
          
        </el-row>
      </div>
  </div>
</template>

<script>
import { getTvInfo, getKcbListPage, getUserListPage } from "../../api/api";
export default {
  name: "TvIndexPage",
  data() {
    return {
      tvInfo:{
        count:0,
        notCount:0,
        thisDayCount:0,
        enrollUser:0,
        totalMin:0,
        thisDayMin:0
      },
      userInfo: sessionStorage.getItem("user"),
      activeName: "first",
      courses: [],
      formInline: {
        name: "",
        startdate: "",
        enddate: "",
        state: ""
      },
      form1: {
        total: 0,
        page: 1
      },

      series: [], //系列列表
      users: [],
      formInline2: {
        name: ""
      },
      form2: {
        total: 0,
        page: 1
      },
      listLoading: false,

      time: "", //倒计时
      timeflag: false,
      endTime: ''
    };
  },
  methods: {
    getTvInfo(){//获取当前登录教师直播信息
      let para = {
        userid:JSON.parse(this.userInfo).id
      }
      getTvInfo(para).then(res =>{
        this.tvInfo = res.data;
        console.log(this.tvInfo)
      })
    },
    /*课程表 */
    //:formatter="formatState"
    formatState: function(row, column) {
      console.log(row.state);
      return row.state == 1
        ? "<label>已直播</label>"
        : row.state == 0 ? "未直播" : "未知";
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    handleCurrentChange(val) {
      console.log(val);
      this.form1.page = val;
      this.getCourses();
    },
    //获取列表
    getCourses() {
      let para = {
        name: this.formInline.name,
        startdate: this.formInline.startdate,
        enddate: this.formInline.enddate,
        state: this.formInline.state,
        page: this.form1.page
      };
      this.listLoading = true;
      //NProgress.start();
      getKcbListPage(para).then(res => {
        this.form1.total = res.data.total;
        this.courses = res.data.users;
        this.listLoading = false;
        //NProgress.done();
      });
    },
    handleView(index, row) {
      console.log(row.id);
      this.$router.push({ path: "/tvView/" + row.id });
    },
    /*课程表 */

    /*报名用户 */
    handleCurrentChangeUser(val) {
      console.log(val);
      this.form2.page = val;
      this.getUsers();
    },
    //获取列表
    getUsers() {
      let para = {
        name: this.formInline2.name,
        page: this.form2.page
      };
      this.listLoading = true;
      //NProgress.start();
      console.log(para);
      getUserListPage(para).then(res => {
        this.form2.total = res.data.total;
        this.users = res.data.users;
        this.listLoading = false;
        //NProgress.done();
      });
    },
    /*报名用户 */

    /*倒计时 */
    timeDown() {
      const endTime = new Date(this.endTime);
      const nowTime = new Date();
      let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
      let d = parseInt(leftTime / (24 * 60 * 60));
      let h = this.formate(parseInt((leftTime / (60 * 60)) % 24));
      let m = this.formate(parseInt((leftTime / 60) % 60));
      let s = this.formate(parseInt(leftTime % 60));
      if (leftTime <= 0) {
        this.flag = true;
        this.$emit("time-end");
      }
      this.time = `${d}天${h}小时${m}分${s}秒`;
    },
    formate(time) {
      if (time >= 10) {
        return time;
      } else {
        return `0${time}`;
      }
    }
    /*倒计时 */
  },
  mounted() {
    this.getCourses();
    this.getTvInfo();//获取当前登录教师直播信息
    //获取系列列表
    this.series = [
      {
        id: 1,
        name: "系列1"
      },
      {
        id: 2,
        name: "系列2"
      },
      {
        id: 3,
        name: "系列3"
      }
    ];
    this.getUsers();
    this.endTime = "2019-01-12 16:05:00"
    let time = setInterval(() => {
      if (this.flag == true) {
        clearInterval(time);
      }
      this.timeDown();
    }, 1000);
  },
  
};
</script>
<style lang='scss' scoped>
.tvindex {
  .tvLeft .tag {
    height: 120px;
    margin: 5px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #409eff;
    h2 {
      padding-top: 30px;
      font-size: 20px;
      font-weight: initial;
    }
    p {
      padding-top: 5px;
      span {
        font-size: 18px;
        color: red;
      }
    }
  }
  .tvRight {
    .tag {
      height: 252px;
      margin: 5px;
      border: 1px solid #409eff;
      border-radius: 4px;
      h2 {
        text-align: center;
        padding-top: 30px;
        font-size: 22px;
        font-weight: initial;
      }
      p {
        text-align: center;
        margin: 5px 0;
      }
      p.date {
        color: red;
      }
    }
  }
  .main {
    width: 1000px;
    margin: 0 auto;
  }
  .source {
    padding: 20px;
  }
}
</style>