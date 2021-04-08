<template>
  <div class="selectPage">
    行业选择
    <el-select v-model="value0" placeholder="请选择" style="margin-right:20px;">
      <el-option label="全部" value=""> </el-option>
      <el-option
        v-for="item in options0"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    集团公司
    <el-select v-model="value1" placeholder="请选择">
      <el-option label="全部" value=""> </el-option>
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value0: "",
      options0: [
        {
          value: "1",
          label: "行业1",
        }
      ],

      value1: "",
      options1: [
        {
          value: "1",
          label: "公司1",
        }
      ],
      
    };
  },
};
</script>

<style lang="scss" scoped>
.selectPage {
  text-align: center;
  color: #00c4f7;
}
</style>