import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  //只有mutitions中定义的函数，才有权利修改state中的数据
  mutations: {
    add(state){
      //不要在mutations函数中，执行异步操作
      // setTimeout(() => {
      //   state.count++
      // }, 1000);
      state.count++
    },
    addN(state,step){
      state.count+=step
    },
    del(state){
      state.count--
    },
    delN(state,step){
      state.count-=step
    }
  },
  actions: {
    addAsync(context){
      setTimeout(() => {
        //在actions中，不能直接修改state中的数据
        //必须通过context.commit()触发某个mutation才行
        context.commit('add')
      }, 1000);
    },
    addNAsync(context,step){
      setTimeout(() => {
        //在actions中，不能直接修改state中的数据
        //必须通过context.commit()触发某个mutation才行
        context.commit('addN',step)
      }, 1000);
    },
    delAsync(context){
      setTimeout(() => {
        context.commit('del')
      }, 1000);
    },
    delNAsync(context,step){
      setTimeout(() => {
        context.commit('delN',step)
      }, 1000);
    }
  },
  getters:{
    showNum(state){
      return '当前最新的数量'+state.count
    }
  },
  modules: {
  }
})
