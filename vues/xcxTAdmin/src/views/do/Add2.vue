<template>
	<section>
        <el-row>
            <el-col :span="24" style="min-width:1100px;">
                <el-col :span="12">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="课程名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="课程类型">
                        <el-select v-model="form.play_type" placeholder="请选择课程类型">
                        <el-option label="音频" value="3"></el-option>
                        <el-option label="视频" value="2"></el-option>
                        <el-option label="直播" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="课程分类">
                        <el-select v-model="form.classify" placeholder="请选择课程分类">
                            
                        </el-select>
                    </el-form-item>
                    <el-form-item label="上传封面">
                        <el-upload
                            action=""
                            list-type="picture-card"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
                        </el-upload>
                        
                    </el-form-item>
                    <el-form-item label="选择讲师">
                        <el-select v-model="form.teaching_id" placeholder="请选择讲师">
                            
                        </el-select>
                    </el-form-item>
                    <el-form-item label="课程时间">
                        <el-col :span="10">
                        <el-date-picker type="date" placeholder="开始日期" v-model="form.start_time" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" style="text-align: center;" :span="1">-</el-col>
                        <el-col :span="10">
                        <el-date-picker type="date" placeholder="截止时间" v-model="form.end_time" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="课程价格">
                        <el-input v-model="form.price"></el-input>
                    </el-form-item>
                    <el-form-item label="课程介绍">
                        <el-input type="textarea" v-model="form.course_description"></el-input>
                    </el-form-item>
                    <el-form-item label="讲师介绍">
                        <el-input type="textarea" v-model="form.teaching_introduce"></el-input>
                    </el-form-item>
                    <el-form-item label="课程状态">
                        <el-radio v-model="form.issue_status" label="0">发布</el-radio>
                        <el-radio v-model="form.issue_status" label="1">隐藏</el-radio>
                    </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="24">
                    <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>课时列表</span>
                        <el-button type="primary" style="float: right;margin-top:-5px;" @click="addClassHour" size="mini">添加课时</el-button>
                    </div>
                    <div class="text item">
                        <el-form :inline="true"
                            v-for="(hour,index) in form.jsonHour"
                            :key="index" size="mini"
                        >
                            <el-form-item label="课时名称">
                            <el-input v-model="hour.name"></el-input>
                            </el-form-item>
                            <el-form-item label="课时时间">
                            <el-input v-model="hour.startTime"></el-input>
                            </el-form-item>
                            <el-form-item label="至">
                            <el-input v-model="hour.endTime"></el-input>
                            </el-form-item>
                            <el-form-item label="课时类型">
                            <el-input v-model="hour.realPlay"></el-input>
                            </el-form-item>
                            <el-button type="danger" size="mini" @click.prevent="removeClassHour(hour)">删除</el-button>
                        </el-form>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="24" style="margin-top:10px;">
                    <el-form ref="form" :model="form" style="text-align:center;">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">创建课程</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                    </el-form>
                </el-col>
            </el-col>
        </el-row>
	</section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",//课程名称
        play_type: "",//课程类型
        classify: "",//课程分类
        pic: "",//封面
        teaching_id: "",//讲师
        start_time: [],//课程开始日期
        end_time: [],//课程截止日期
        price: "",//价格
        course_description: "",//课程介绍
        teaching_introduce: "",//讲师介绍
        issue_status:"1",//课程状态
        jsonHour: [] //课时list
      },
      dialogImageUrl: "",
      dialogVisible: false
      //   dynamicValidateForm: {
      //     domains: [],
      //     email: ""
      //   }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(this.dialogImageUrl);
    },
    onSubmit() {
      console.log("submit!");
    },
    removeClassHour(item) {
      var index = this.form.jsonHour.indexOf(item);
      if (index !== -1) {
        this.form.jsonHour.splice(index, 1);
      }
    },
    addClassHour() {
      this.form.jsonHour.push({
        name: "",
        startTime: "",
        endTime: "",
        realPlay: ""
      });
    }
  }
};
</script>

<style scoped>

</style>