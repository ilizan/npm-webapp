<template>
  <div class="tvview">
      <div class="main">
        <el-row>
            <el-col :span="24">
                <h2 style="line-height:45px;border-bottom:1px dashed #ccc">基本信息</h2>
            </el-col>
        </el-row>
        <el-row class="viewTop">
            <el-col :span="8">
                <el-form ref="form" :model="formInline" label-width="80px">
                    <el-form-item label="直播日期">
                       {{id}}
                    </el-form-item>
                    <el-form-item label="系列名称">
                        {{id}}
                    </el-form-item>
                    <el-form-item label="报名人数">
                        {{id}}
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="8">
                <el-form ref="form" :model="formInline" label-width="80px">
                    <el-form-item label="直播时段">
                       {{id}}
                    </el-form-item>
                    <el-form-item label="课时名称">
                        {{id}}
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="8" class="launch">
                <el-button type="primary">发起直播</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <h2 style="line-height:45px;border-bottom:1px dashed #ccc">报名用户</h2>
            </el-col>
            <el-col :span="24">
                <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
                    <el-form-item label="用户昵称">
                    <el-input v-model="search" placeholder="用户昵称"></el-input>
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary" v-on:click="getUsers">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="12">
            <el-table :data="userleft" v-loading="listLoading" @selection-change="leftselsChange" style="width: 100%; margin:0 auto;">
              <el-table-column type="selection" align="center">
              </el-table-column>
              <el-table-column
                prop="name"
                label="用户昵称" align="center">
              </el-table-column>
            </el-table>
            </el-col>
            <el-col :span="12">
            <el-table v-if="userright.length != 0" :data="userright" v-loading="listLoading" @selection-change="rightselsChange" style="width: 100%; margin:0 auto;">
              <el-table-column type="selection" align="center">
              </el-table-column>
              <el-table-column
                prop="name"
                label="用户昵称" align="center">
              </el-table-column>
            </el-table>
            </el-col>
    <!--工具条-->
		<el-col :span="24" class="toolbar" style="margin-top: 10px;">
            <div style="width:100%; margin:0 auto;">
            <el-button type="primary" @click="noticeDialog()">发送通知</el-button>
              <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
              </el-pagination>
            </div>
		</el-col>
		<el-dialog title="发起通知" :visible.sync="editFormVisible" :close-on-click-modal="false">
			<el-form label-width="80px" ref="refname">
				<el-form-item label="已选用户">
					<el-tag v-model="formInline.users" v-for="tag in sels" :key="tag.id" @close="handleClose(tag)" closable>{{tag.name}}</el-tag>
				</el-form-item>
				<el-form-item label="发送类型">
					<el-select v-model="formInline.type" placeholder="发送类型">
            <el-option label="站内信" value="1"></el-option>
            <el-option label="短信" value="2"></el-option>
          </el-select>
				</el-form-item>
				<el-form-item label="发送模板">
					<el-select v-model="formInline.mould" placeholder="发送模板">
            <el-option v-for="item in mouldList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
				</el-form-item>
				<el-form-item label="模板内容">
					<el-input type="textarea" v-model="mouldText" :disabled="true"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
        <el-button-group>
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary">提交</el-button>
        </el-button-group>
			</div>
		</el-dialog>
        </el-row>
      </div>
  </div>
</template>

<script>
import { getPeopleListPage } from "../../api/api";
export default {
  name: "TvViewPage",
  data() {
    return {
      id: 123,
      users: [],
      userleft: [],
      userright: [],
      search: "",
      formInline: {
        users: "", //已选用户
        type: "", //发送类型:1站内信;2短信
        mould: "" //模板id
      },
      sels: [], //列表选中列
      leftsels: [],//左侧选择列
      rightsels: [],//右侧选择列
      editFormVisible: false, //编辑界面是否显示
      total: 0,
      page: 1,
      listLoading: false,
      editFormRules: {
        name: [{ required: true, message: "请输入昵称", trigger: "blur" }]
      },
      mouldList: [],
      mouldText: "11" //模板内容
    };
  },
  methods: {
    handleCurrentChange(val) {
      //点击分页查询按钮执行方法
      console.log(val);
      this.page = val;
      this.getUsers();
    },
    //获取列表
    getUsers() {
      let para = {
        name: this.search,
        page: this.page
      };
      this.listLoading = true;
      //NProgress.start();
      getPeopleListPage(para).then(res => {
        this.total = res.data.total;
        this.users = res.data.users;
        
        if(this.users.length%2 ==0){
          this.userleft = this.users.slice(0,(this.users.length/2));
          this.userright = this.users.slice((this.users.length/2),this.users.length);
        }else{
          this.userleft = this.users.slice(0,(this.users.length-1)/2);
          this.userright = this.users.slice(((this.users.length-1)/2),this.users.length-1);
          this.userleft = this.userleft.concat(this.users.slice(this.users.length-1,this.users.length));
        }
        this.listLoading = false;
        //NProgress.done();
      });
    },
    leftselsChange: function(sels) {
      //选择复选框
      this.leftsels = sels;
    },
    rightselsChange: function(sels) {
      //选择复选框
      this.rightsels = sels;
    },
    noticeDialog: function() {
      //点击发送通知按钮，弹出操作窗口
      this.sels = this.leftsels.concat(this.rightsels);
      if(this.sels.length == 0){
        this.$notify.error({
          title: '错误',
          message: '请至少选择一个用户'
        });
        return;
      }
      this.mouldList = [
        {
          id: 1,
          name: "模板1"
        },
        {
          id: 2,
          name: "模板2"
        },
        {
          id: 3,
          name: "模板3"
        }
      ];
      this.editFormVisible = true;
      var ids = this.sels.map(item => item.id).toString();
      
      this.formInline = {
        users: "", //已选用户
        type: "", //发送类型:1站内信;2短信
        mould: "" //模板id
      };
    },
    handleClose(tag) {
      //删除已选用户标签
      this.sels.splice(this.sels.indexOf(tag), 1);
      if (this.sels.length == 0) {
        this.editFormVisible = false;
      }
    }
  },
  mounted() {
    let code = this.$route.params.code;
    console.log(code);
    this.getUsers();
  }
};
</script>

<style lang="scss" scoped>
.tvview {
  .main {
    padding: 20px;
  }
  .demo-form-inline {
    width: 70%;
    margin: 0 auto;
    margin-top: 10px;
    text-align: center;
  }
  .viewTop {
    .el-form-item {
      margin-bottom: 0;
    }
  }
  .launch {
    text-align: center;
    line-height: 120px;
  }
}
</style>
