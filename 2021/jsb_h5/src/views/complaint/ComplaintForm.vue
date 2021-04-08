<template>
  <div class="home">
    <h2 class="title">拖欠农民工工资线索反映</h2>
    <van-form
      label-width="4rem"
      error-message-align="right"
      input-align="right"
      @submit="onSubmit"
      ref="forms"
    >
      <van-field
        v-model="form.projectName"
        name="拖欠工资项目名称"
        placeholder="请输入项目名称"
        :rules="[{ required: true, message: '' }]"
        @blur="projectSearchFn()"
      >
        <template #label>
          <span class="ts">*</span>
          拖欠工资项目名称
        </template>
      </van-field>
      <van-field
        v-model="form.projectAddress"
        name="拖欠工资项目地址"
        placeholder="请输入地址"
        :rules="[{ required: true, message: '' }]"
      >
        <template #label>
          <span class="ts">*</span>
          拖欠工资项目地址
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        :value="form.projectCityName"
        name="所在市"
        right-icon="arrow"
        placeholder="请选择"
        :rules="[{ required: true, message: '' }]"
        @click="cityShow = true"
      >
        <template #label>
          <span class="ts">*</span>
          所在市
        </template>
      </van-field>

      <van-field
        readonly
        clickable
        :value="form.projectAreaName"
        name="所在区县"
        right-icon="arrow"
        placeholder="请选择"
        :rules="[{ required: true, message: '' }]"
        @click="areaShowFn()"
      >
        <template #label>
          <span class="ts">*</span>
          所在区县
        </template>
      </van-field>

      <van-field
        readonly
        clickable
        :value="form.projectTypeName"
        name="行业主管部门"
        right-icon="arrow"
        placeholder="请选择"
        @click="industryShow = true"
      >
        <template #label>
          <span class="ts"></span>
          行业主管部门
        </template>
      </van-field>
      <van-field
        v-model="form.projectOwerName"
        name="建设单位名称"
        placeholder="请输入单位名称"
      >
        <template #label>
          <span class="ts"></span>
          建设单位名称
        </template>
      </van-field>
      <van-field
        v-model="form.projectCompanyName"
        name="总承包单位名称"
        placeholder="请输入单位名称"
      >
        <template #label>
          <span class="ts"></span>
          总承包单位名称
        </template>
      </van-field>
      <van-field
        v-model="form.projectManagerName"
        name="总承包单位项目经理名称"
        label-width="5rem"
        placeholder="请输入经理名称"
      >
        <template #label>
          <span class="ts"></span>
          总承包单位项目经理名称
        </template>
      </van-field>
      <van-field
        v-model="form.projectLabcompanyName"
        name="分包单位名称"
        placeholder="单位名称(没有则填无)"
      >
        <template #label>
          <span class="ts"></span>
          分包单位名称
        </template>
      </van-field>
      <van-field
        v-model="form.projectGroupleaderName"
        name="班组长姓名"
        placeholder="请输入姓名"
      >
        <template #label>
          <span class="ts"></span>
          班组长姓名
        </template>
      </van-field>
      <van-field
        v-model="form.reflectName"
        name="反映人姓名"
        placeholder="请输入姓名"
        :rules="[{ required: true, message: '' }]"
      >
        <template #label>
          <span class="ts">*</span>
          反映人姓名
        </template>
      </van-field>
      <van-field
        v-model="form.reflectTel"
        name="反映人电话"
        placeholder="请输入电话"
        :rules="[
          { required: true, message: '' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
        ]"
      >
        <template #label>
          <span class="ts">*</span>
          反映人电话
        </template>
      </van-field>
      <!-- 验证码 -->
      <!-- <tel-code ref="telCode"></tel-code> -->
      <van-field
        v-model="form.reflectIdcard"
        name="反映人身份证号"
        placeholder="请输入身份证号"
        :rules="[
          { required: true, message: '' },
          {
            pattern: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
            message: '身份证号格式错误！',
          },
        ]"
      >
        <template #label>
          <span class="ts">*</span>
          反映人身份证号
        </template>
      </van-field>
      <van-field
        v-model="form.newAddress"
        name="反映人现居住地址"
        placeholder="请输入地址"
      >
        <template #label>
          <span class="ts"></span>
          反映人现居住地址
        </template>
      </van-field>

      <van-field
        v-model="form.backPayPerson"
        name="欠薪人数(单位:人)"
        placeholder="请输入人数"
      >
        <template #label>
          <span class="ts"></span>
          欠薪人数(单位:人)
        </template>
      </van-field>
      <van-field
        v-model="form.backPayMoney"
        name="欠薪金额(单位:元)"
        placeholder="请输入金额"
      >
        <template #label>
          <span class="ts"></span>
          欠薪金额(单位:元)
        </template>
      </van-field>
      <van-field
        readonly
        clickable
        v-model="backPayDate"
        name="欠薪发生时间"
        placeholder="请选择日期"
        right-icon="arrow"
        @click="calenderShow = true"
      >
        <template #label>
          <span class="ts"></span>
          欠薪发生时间
        </template>
      </van-field>
      <van-field
        class="texts"
        v-model="form.backPaySummary"
        rows="3"
        type="textarea"
        autosize
        name="backPaySummary"
        placeholder="(请将欠薪过程描述清楚，并控制在500字以内)"
        maxlength="500"
        show-word-limit
        :rules="[{ required: true, message: '' }]"
        input-align="left"
      >
        <template #label>
          <span class="ts">*</span>
          欠薪基本情况摘要
        </template>
      </van-field>

      <div class="info">（注：带“<span class="ts">*</span>”为必填项）</div>
      <div class="btns">
        <van-button
          color="#4967B7"
          class="submitBtn"
          type="info"
          native-type="submit"
          >提交</van-button
        >
        <van-button
          color="#4967B7"
          plain
          class="resetBtn"
          @click="resetFn()"
          native-type="button"
          >重置</van-button
        >
      </div>
    </van-form>
    <!-- //市 -->
    <van-popup v-model="cityShow" round position="bottom">
      <van-picker
        show-toolbar
        :columns="cityList"
        value-key="cityname"
        :default-index="citySelectIndex"
        @cancel="cityShow = false"
        @confirm="onCityConfirm"
      />
    </van-popup>

    <!-- //区 -->
    <van-popup v-model="areaShow" round position="bottom">
      <van-picker
        show-toolbar
        :columns="areaList"
        value-key="areaname"
        :default-index="areaSelectIndex"
        @cancel="areaShow = false"
        @confirm="onAreaConfirm"
      >
        <template #title>
          <div class="tag">请先选择市后再选择区</div>
        </template>
      </van-picker>
    </van-popup>

    <!-- 主管部门 -->
    <van-popup v-model="industryShow" round position="bottom">
      <van-picker
        show-toolbar
        :columns="industryList"
        :default-index="industrySelectIndex"
        value-key="name"
        @cancel="industryShow = false"
        @confirm="onIndustryConfirm"
      />
    </van-popup>

    <van-calendar
      color="#4967B7"
      v-model="calenderShow"
      :min-date="new Date(2017, 1, 1)"
      @confirm="onDateConfirm"
    />
    <!-- 根据项目名称查询项目 -->
    <projectSearch ref="projectsearch" @say="getSelectProject"></projectSearch>
  </div>
</template>

<script>
let form = {
  projectId: "", //选填 项目id
  projectName: "", //必填	项目名称
  projectAddress: "", //必填	项目地址
  projectCityCode: "", //必填	项目所在市： 济南市， 青岛市 地域编码
  projectCityName: "", //必填	项目所在市： 济南市， 青岛市 地域名称
  projectAreaCode: "", //必填	项目所在区： 历下区， 高新区 地域编码
  projectAreaName: "", //必填	项目所在区： 历下区， 高新区 地域名称
  projectTypeCode: "", //必填	项目类型 ： 住建，交通 传编码
  projectTypeName: "", //必填	项目类型 ： 住建，交通 传名称
  projectOwerId: "", //选填	项目建设方编号
  projectOwerName: "", //必填	项目建设方名称
  projectCompanyId: "", //选填	项目施工方编号
  projectCompanyName: "", //必填	项目施工方名称
  projectManagerName: "", //选填	项目经理名称
  projectLabcompanyName: "", //必填	项目分包单位名称
  projectGroupleaderName: "", //必填	班组长名称
  reflectName: "", //必填	反馈人名称
  reflectTel: "", //必填	反馈人电话
  reflectIdcard: "", //必填	反馈人身份证号码
  //   reflectChannel: "未曾经通过以上反映过欠薪问题", //必填	反馈途径，传文字
  reflectDetail: "", //必填	反馈详情
  backPayPerson: "", //必填	欠薪人数
  backPayMoney: "", //必填	欠薪金额
  backPayDate: "", //必填	反映日期
  backPaySummary: "", //必填	欠薪情况摘要
  newAddress: "", //必填  反映人现局地址
};
let cityList = [
  {
    id: 1,
    text: "济南市",
  },
  {
    id: 2,
    text: "青岛市",
  },
  {
    id: 3,
    text: "淄博市",
  },
];
import ProjectSearch from "@/components/ProjectSearch.vue";
// import TelCode from "@/components/TelCode.vue";
export default {
  name: "Home",
  components: {
    projectSearch: ProjectSearch,
    // TelCode,
  },
  data() {
    return {
      cityShow: false, //市
      citySelectIndex: 0,
      cityList: [], //市列表
      areaShow: false, //区
      areaList: [], //区列表
      areaSelectIndex: 0,
      calenderShow: false, //日期模态框
      //主管部门
      industryList: [], //区市列表
      industrySelectIndex: 0,

      //验证码end
      industryShow: false, //起始日期模态框

      backPayDate: "", //
      form: JSON.parse(JSON.stringify(form)),
    };
  },
  methods: {
    //显示区列表
    areaShowFn() {
      if (this.areaList.length > 0) {
        this.areaShow = true;
      } else {
        this.$toast.fail("请选择市后再选择区");
      }
    },
    projectSearchFn() {
      if (this.form.projectName) {
        this.$refs.projectsearch.init(this.form.projectName);
      }
    },
    selectOption(cityOrindustry, code) {
      let name = "";
      if (cityOrindustry == "city") {
        //市
        this.cityList.forEach((i, index) => {
          if (i.id == code) {
            name = i.text;
            this.citySelectIndex = index;
          }
        });
      }
      if (cityOrindustry == "area") {
        //区
        this.areaList.forEach((i, index) => {
          if (i.areaid == code) {
            name = i.areaname;
            this.areaSelectIndex = index;
          }
        });
      }
      if (cityOrindustry == "industry") {
        //行业主管部门
        this.industryList.forEach((i, index) => {
          if (i.id == code) {
            name = i.name;
            this.industrySelectIndex = index;
          }
        });
      }
      return name;
    },
    getSelectProject(item) {
      this.form = Object.assign({}, this.form, item);

      if (this.form.projectCityCode) {
        //选中市
        this.form.projectCityName = this.selectOption(
          "city",
          this.form.projectCityCode
        );
      }
      if (this.form.projectTypeCode) {
        //选中行业主管部门
        this.form.projectTypeName = this.selectOption(
          "industry",
          this.form.projectTypeCode
        );
      }
      //根据市id请求区列表
      if (this.form.projectCityCode) {
        this.getAreaList(this.form.projectCityCode);
      }
    },

    //市
    onCityConfirm(value) {
      this.form.projectCityCode = value.cityid;
      this.form.projectCityName = value.cityname;
      this.cityShow = false;
      //重置区选中信息
      this.form.projectAreaCode = "";
      this.form.projectAreaName = "";
      this.areaSelectIndex = 0;
      //请求区列表
      this.getAreaList(this.form.projectCityCode);
    },

    //区
    onAreaConfirm(value) {
      if (value) {
        this.form.projectAreaCode = value.areaid;
        this.form.projectAreaName = value.areaname;
      }
      this.areaShow = false;
    },
    //主管部门
    onIndustryConfirm(value) {
      this.form.projectTypeCode = value.id;
      this.form.projectTypeName = value.name;
      this.industryShow = false;
    },
    //日期
    formatDate(date, d1) {
      let s = `${date.getFullYear()}年${
        date.getMonth() + 1
      }月${date.getDate()}日`;
      if (d1 == "-") {
        s = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      }
      return s;
    },
    //
    radioFn() {},
    onDateConfirm(date) {
      this.calenderShow = false;
      this.backPayDate = this.formatDate(date, "");
      this.form.backPayDate = this.formatDate(date, "-");
    },
    onSubmit(values) {
      //   Promise.all([this.$refs.telCode.valTel()]).then((res) => {
      //     if (res[0]) {
      //       this.isRefiect();
      //       this.$http.submit(this.form).then((res) => {
      //         if (!res.hasError) {
      //           this.$toast.success(res.msg);
      //           this.resetFn();
      //         } else {
      //           this.$toast.fail("提交失败");
      //         }
      //       });
      //     }
      //   });
    },
    resetFn() {
      this.form = JSON.parse(JSON.stringify(form));
      this.backPayDate = "";
      // this.$refs.telCode.count = 2
      // this.form.backPaySummary = ""
      this.$refs.forms.resetValidation();
      // location.reload();
    },
    //市
    getCityList() {
      return new Promise((resolve, reject) => {
        this.$http.complaint.getCityList().then((res) => {
          this.cityList = res;
          resolve();
        });
        reject();
      });
    },
    //区
    getAreaList(code) {
      this.$http.complaint.getAreaList({ code }).then((res) => {
        this.areaList = res;
        if (this.form.projectAreaCode) {
          //选中区
          this.form.projectAreaName = this.selectOption(
            "area",
            this.form.projectAreaCode
          );
        }
      });
    },
    getIndustryList() {
      this.industryList = [];
      return new Promise((resolve, reject) => {
        this.$http.complaint.getIndustry().then((res) => {
          this.industryList = res;
          resolve();
        });

        //reject();
      });
    },
    //初始化区市、行业主管部门
    getDataInit() {
      Promise.all([this.getCityList(), this.getIndustryList()])
        .then((res) => {
          //成功
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    //获取市列表和行业主管部门list
    this.getDataInit();
  },
  mounted() {
    // let demoform = {
    //   backPayDate: "2021-1-17",
    //   backPayMoney: "1212",
    //   backPayPerson: "121212",
    //   backPaySummary: "sjlfa",
    //   projectAddress: "12121212",
    //   projectAreaCode: "3706",
    //   projectAreaName: "烟台市",
    //   projectCompanyId: "",
    //   projectCompanyName: "12121212",
    //   projectGroupleaderName: "121212",
    //   projectId: "",
    //   projectLabcompanyName: "121212",
    //   projectManagerName: "1212121212",
    //   projectName: "12121212",
    //   projectOwerId: "",
    //   projectOwerName: "121212",
    //   projectTypeCode: "1",
    //   projectTypeName: "住建",
    //   reflectChannel: "未曾经通过以上反映过欠薪问题",
    //   reflectDetail: "说明情况",
    //   reflectIdcard: "372330199302132457",
    //   reflectName: "基本情况摘要",
    //   reflectTel: "15168855914",
    // };
    // this.backPayDate = "2021年1月17日";
    // this.form = demoform;
  },
};
</script>

<style lang="less" scoped>
.home {
  background-color: #ffffff;
  .ts {
    color: red;
    width: 7px;
    display: inline-block;
  }
  padding: 10px;
  * {
    // border: 1px solid #ccc;
  }
  .title {
    font-size: 20px;
    text-align: center;
    color: #4967b7;
    font-weight: 400;
    line-height: 50px;
  }
  .van-cell {
    background-color: #f1f1f1;
    // padding: 10px;
    margin: 10px 0;
    // width: auto;
    border-radius: 5px;
  }

  .radioAll {
    .van-radio {
      line-height: 25px;
      height: 25px;
      font-size: 14px;
    }
  }
  .info {
    color: #4967b7;
    margin: 10px 0;
    font-size: 14px;
  }
  .btns {
    overflow: hidden;
    .van-button {
      width: 48%;
      border-radius: 7px;
    }
    .submitBtn {
      float: left;
    }
    .resetBtn {
      float: right;
    }
  }
  .radios {
    display: block;
    /deep/.van-field__control--custom {
      display: block;
    }
  }
  .texts {
    display: block;
    /deep/.van-field__control--custom {
      display: block;
    }
  }
  .tag {
    font-size: 14px;
    text-align: center;
    color: #4967b7;
  }
}
@media screen and (min-width: 1000px) {
  .home {
    width: 600px;
    margin: 0 auto;
  }
}
</style>





