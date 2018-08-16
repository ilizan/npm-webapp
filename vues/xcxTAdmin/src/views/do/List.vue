<template>
	<section>
        <!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="关键词"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getList(1)">搜索</el-button>
				</el-form-item>
                <el-form-item>
					<!-- <el-button type="primary" @click="add">新建</el-button> -->
				</el-form-item>
			</el-form>
		</el-col>
        <!-- 列表 -->
        <el-table :data="datalist" border v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
            <el-table-column type="selection" fixed="left" width="55">
            </el-table-column>
            <el-table-column prop="id" label="id">
            </el-table-column>
            <el-table-column prop="name" label="name">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
            <template slot-scope="scope">
              <el-button-group>
                <el-button size="small" @click="goUrl(scope.row)">详情(跳转页面)</el-button>
                <el-button type="primary" size="small" @click="cs(scope.row)">本页面操作</el-button>
              </el-button-group>
            </template>
        </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-col :span="24" class="toolbar" style="margin-top: 10px;">
            <el-select v-model="selvalue" placeholder="请选择">
                <el-option label="禁用" value="1"></el-option>
                <el-option label="启用" value="0"></el-option>
                <el-option label="删除" value="x" :disabled="true"></el-option>
            </el-select>
            <el-button type="primary" @click="selEdit()" :disabled="this.sels.length===0">确认</el-button>
            <el-pagination background layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="row" :total="total" style="float:right;">
            </el-pagination>
        </el-col>

        <el-dialog
            title="编辑信息"
            :visible.sync="visible" :close-on-click-modal="false" center>
            <el-form ref="editTeacherForm" label-width="100px">
                <el-form-item label="编号">
                <el-input :disabled="true"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="visible = false">关 闭</el-button>
                <el-button type="primary">提交</el-button>
            </span>
        </el-dialog>
    
    </section>
</template>
<script>
import { getUserList } from "../../api/api";
export default {
  data() {
    return {
      listLoading: false,
      sels: "",
      datalist: [],
      filters: {
        name: "" //姓名
      },
      page: 1,
      row: 20,
      total: 0,

      selvalue: "",
      visible: false
    };
  },
  methods: {
    //多选
    selsChange: function(sels) {
      this.sels = sels;
    },
    getList(index) {
      if (index) {
        this.page = index;
      }
      let para = {
        page: this.page,
        // row: this.row,
        name: this.filters.name //姓名搜索
      };
      this.listLoading = true;
      console.log(para)
      getUserList(para).then(res => {
        // this.total = res.data.result.count;
        // this.datalist = res.data.result.list;
        console.log(res)
        this.total = res.data.total;
        this.datalist = res.data.users;
        this.listLoading = false;
      });
    },
    goUrl(row) {
      // this.$router.push({path: '/doedit'});//不带参数跳转
      this.$router.push({ path: "/doedit/" + row.id }); //带参数跳转
    },
    cs(row) {
      this.visible = true;
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getList("");
    },
    selEdit() {
      if (!this.selvalue) {
        this.$notify.error({
          title: "错误",
          message: "请选择操作项"
        });
        return;
      }
      var ids = this.sels.map(item => item.id).toString();
      this.$confirm("确认操作吗？", "提示", {
        type: "warning"
      }).then(() => {
          this.listLoading = true;
          let para = {
            teachingIds: ids,
            usingStatus: this.selvalue
          };
          this.$message({
            message: "修改成功",
            type: "success"
          });
          this.listLoading = false;
          this.getTeachers(this.page);
        })
        .catch(() => {});
    }
  },
  mounted() {
    this.getList(1);
  }
};
</script>