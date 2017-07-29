// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment (state,obj){
      state.count +=obj.amount
    }
  },
  actions:{
    incrementAsyc(context,obj){
      setTimeout(function(){
        context.commit('increment',obj)
      },2000)
    }
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
