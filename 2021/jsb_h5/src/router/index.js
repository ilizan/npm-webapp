import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "AuthLogin",
    component: () =>
      import("../views/authLogin/Index.vue"),
    meta: {
      showTab: false, // 显示tab
      title: '吉事办'
    },
  },
  {
    path: "/:page/:code",
    name: "AuthLogin",
    component: () =>
      import("../views/authLogin/Index.vue"),
    meta: {
      showTab: false, // 显示tab
      title: '吉事办'
    },
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import("../views/Home.vue"),
    meta: {
      showTab: true, // 显示tab
      title: '吉事办'
    },
  },
  {
    path: "/complaintMap",
    name: "ComplaintMap",
    component: () =>
      import("../views/complaint/ComplaintMap.vue"),
    meta: {
      showTab: true, // 显示tab
      title: '投诉维权'
    },
  },
  {
    path: "/complaintForm",
    name: "ComplaintForm",
    component: () =>
      import("../views/complaint/ComplaintForm.vue"),
    meta: {
      title: '根治欠薪'
    }
  },

  {
    path: "/user",
    name: "User",
    component: () =>
      import("../views/user/Index.vue"),
    meta: {
      showTab: true, // 显示tab
      title: '我的'
    },
  },
  {
    path: "/project",
    name: "Project",
    component: () =>
      import("../views/project/Project.vue"),
    meta: {
      title: '项目信息'
    },
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: () =>
      import("../views/jobs/Jobs.vue"),
      meta: {
        title: '务工经历'
      },
  },
  {
    path: "/attendance",
    name: "Attendance",
    component: () =>
      import("../views/attendance/Attendance.vue"),
      meta: {
        title: '考勤信息'
      },
  },
  {
    path: "/wages",
    name: "Wages",
    component: () =>
      import("../views/wages/Wages.vue"),
      meta: {
        title: '工资信息'
      },
  },
  {
    path: "/wagesDetails/:id",
    name: "WagesDetails",
    component: () =>
      import("../views/wages/WagesDetails.vue"),
  },

  {
    path: "/buildPage",
    name: "BuildPage",
    component: () =>
      import("../views/project/BuildPage.vue"),
  },
  {
    path: "/construction",
    name: "Construction",
    component: () =>
      import("../views/project/Construction.vue"),
  },


];

const router = new VueRouter({
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '吉事办'
  }
  next()
})