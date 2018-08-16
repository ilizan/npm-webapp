<template>
<section>
  <!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="讲师姓名"></el-input>
				</el-form-item>
        <el-form-item>
					<el-input v-model="filters.tel" placeholder="电话"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUsers">搜索</el-button>
				</el-form-item>
        <el-form-item>
					<el-button type="primary" @click="addTeacher">新建讲师</el-button>
				</el-form-item>
        
			</el-form>
		</el-col>
    <el-table :data="users" v-loading="listLoading" style="width: 100%;">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="id" width="60">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" sortable>
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="120" sortable>
        </el-table-column>
        
        <el-table-column label="操作" width="150">
            <!-- <template scope="scope"> -->
                <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button> -->
            <!-- </template> -->
        </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar" style="margin-top: 10px;">
      <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
      </el-pagination>
    </el-col>
    <el-dialog
      title="新建讲师"
      :visible.sync="addTeacherVisible" :close-on-click-modal="false">
      <el-form ref="form" :model="addTeacherForm" :rules="formRules" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addTeacherForm.username"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="addTeacherForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="addTeacherForm.password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input v-model="addTeacherForm.password2"></el-input>
        </el-form-item>
        <el-form-item label="一句话简介">
          <el-input type="textarea" v-model="addTeacherForm.name"></el-input>
        </el-form-item>
        <el-form-item label="账号状态">
          <el-switch
            v-model="addTeacherForm.state"
            active-color="#409eff"
            inactive-color="#ff4949"
            active-text="启用"
            inactive-text="禁用">
          </el-switch>
        </el-form-item>
        
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addTeacherVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTeacherVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    </section>
</template>
<script>
import { getUserList } from "../../api/api";
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "11"
        }
      ],
      listLoading: false,
      filters: {
        name: ""
      },
      page: 1,
      total: 0,
      formRules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" },]
      },
      //新建老师
      addTeacherVisible: false,
      addTeacherForm: {
        username: "",
        password: "",
        password2: "",
        name: "",
        introduce: "",
        state: false
      }
    };
  },
  methods: {
    //性别显示转换
    formatSex: function(row, column) {
      return row.sex == 1 ? "男" : row.sex == 0 ? "女" : "未知";
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getUsers();
    },
    //获取用户列表
    getUsers() {
      let para = {
        page: this.page,
        name: this.filters.name
      };
      this.listLoading = true;
      //NProgress.start();
      getUserList(para).then(res => {
        this.total = res.data.total;
        this.users = res.data.users;
        this.listLoading = false;
        //NProgress.done();
      });
    },
    //新建老师账号
    addTeacher: function() {
      this.addTeacherVisible = true;
      this.addTeacherForm = {
        username: "",
        password: "",
        password2: "",
        name: "",
        introduce: "",
        state: true
      };
    }
  },
  mounted() {
    this.getUsers();
  }
};
</script>
