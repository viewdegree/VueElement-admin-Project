export default{
  //定义数据
  state: {
    count:0
  },
  getters:{
    doubleCount(state){
      return state.count*2
    }
  }
  ,
  //定义同步的方法
  mutations: {
    add(state){
      state.count++
    },
    decrese(state){
      state.count--
    }
  },
  //定义异步的方法
  actions: {
    delayAdd(context){
      setTimeout(()=>{
        // 调用add方法
        context.commit('add')
      },1000)
    }
  }
}
