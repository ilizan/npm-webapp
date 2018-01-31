<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href='#index'>首页</a>
    <el-time-select
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="结束时间"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </el-time-select><br/>
  <el-button icon="search">默认按钮</el-button>
<el-checkbox v-model="checked">备选项</el-checkbox>
<el-checkbox-group v-model="checkboxGroup1" :min="0" :max="1">
    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
  </el-checkbox-group>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  name: 'hello',
  data () {
    return {
      msg: 'h1',
      startTime: '',
      endTime: '',
      checked:true,
      checkboxGroup1: ['上海'],
      cities: cityOptions
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.transition-box {
    margin-bottom: 10px;
    width: 100px;
    height: 70px;
    border-radius: 4px;
    border:1px solid #ccc;
    text-align: center;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>

