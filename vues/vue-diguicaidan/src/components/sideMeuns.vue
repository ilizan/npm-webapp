<template>
  <div class>
    <template v-for="item in meuns" v-if="item.isShow">
      <!-- 若一级菜单 -->
      <template v-if="item.children.length===0">
        <el-menu-item v-bind:key="item.id" v-bind:index="''+item.id" @click="goToUrl(item.path)">
          <template slot="title">
            <!-- 设置icon -->
            <i v-if="item.icon" :class="item.icon"></i>
            <!-- 菜单名称 -->
            {{item.name}}
          </template>
        </el-menu-item>
      </template>
      <!-- 一级菜单end -->
      <!-- 多级菜单 -->
      <template v-else>
        <el-submenu v-bind:index="''+item.id">
          <template slot="title">
            <i :class="item.icon"></i>
            {{item.name}}
          </template>
          <!-- 遍历子菜单 -->
          <template v-for="(itemChild,indexChild) in item.children" v-if="item.isShow">
            <!-- 当发现存在3级或大于3级菜单时,重新遍历当前组件 -->
            <template v-if="itemChild.children&&itemChild.children.length>0">
              <side-meuns :routes="[itemChild]" class="nest-menu"></side-meuns>
            </template>
            <!-- 2级菜单时-->
            <template v-else>
              <el-menu-item
                v-bind:key="itemChild.id"
                v-bind:index="''+itemChild.id"
                @click="goToUrl(itemChild.path)"
              >
                <i v-if="itemChild.icon" :class="itemChild.icon"></i>
                {{itemChild.name}}
              </el-menu-item>
            </template>
          </template>
          <!-- 遍历子菜单 end-->
        </el-submenu>
      </template>
      <!-- 多级菜单end -->
    </template>
  </div>
</template>
<script>
export default {
  name: "sideMeuns",
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      meuns: ""
    };
  },
  methods: {
    goToUrl(itemTag) {
      this.$router.push(itemTag);
    }
  },
  mounted() {
    this.meuns = this.routes;
  }
};
</script>