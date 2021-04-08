<template>
  <div>
    <van-tabs
      v-model="active"
      title-active-color="#53BAC1"
      color="#53BAC1"
      sticky
    >
      <van-tab title="项目详情">
        <div class="pageMain">
          <van-cell-group class="contentBox">
            <van-cell title="劳资专管员" value="xxx" />
            <van-cell title="手机号码" value="xxx" />
            <van-cell title="项目经理姓名" value="xxxx" />
            <van-cell title="手机号码" value="xxxx" />
          </van-cell-group>
          <van-cell-group class="contentBox">
            <van-cell title="项目名称" value="xxx" />
            <van-cell title="所属行业" value="xxx" />
            <van-cell title="工程造价" value="xxxx" />
            <van-cell title="开工日期" value="xxxx" />
            <van-cell title="建设周期" value="xxxx" />
            <van-cell title="项目编号" value="xxxx" />
            <van-cell title="所属区域" value="xxxx" />
            <van-cell title="项目地址" value="xxxx" />
            <van-cell title="建设方" value="xxxx" is-link to="/buildPage" />
            <van-cell title="施工方" value="xxxx" is-link to="/construction" />
            <van-cell title="工资代发" value="xxxx" />
            <van-cell title="工资发放日" value="xxxx" />
            <van-cell title="项目状态" value="xxxx" />
          </van-cell-group>
        </div>
      </van-tab>
      <van-tab title="劳动协议">
        <div class="pageMain">
          <van-cell-group class="contentBox">
            <van-cell title="甲方(用人单位)" value="xxx" />
            <van-cell title="统一社会信用代码" value="xxx" />
            <van-cell title="用人单位地址" value="xxxx" />
            <van-cell title="乙方(劳动者)" value="xxxx" />
            <van-cell title="出生年月" value="xxxx" />
            <van-cell title="身份证号码" value="xxxx" />
            <van-cell title="户口所在地" value="xxxx" />
            <van-cell title="劳动协议期限" value="xxxx" />
            <van-cell title="签订项目" value="xxxx" />
            <van-cell title="项目地址" value="xxxx" />
            <van-cell title="岗位" value="xxxx" />
            <van-cell title="班组" value="xxxx" />
            <van-cell title="工作地" value="xxxx" />
            <van-cell title="工时" value="xxxx" />
            <van-cell title="工资计量单位" value="xxxx" />
            <van-cell title="工资计量单价" value="xxxx" />
            <van-cell title="工资发放日" value="xxxx" />

          </van-cell-group>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
</style>