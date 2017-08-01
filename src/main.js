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
    score:0,
    price:560
  },
  getters:{
    filtGoods:(state) =>{
        return state.goods.filter((item) => item.is)
    }
  },
  mutations:{
    getScore(state,obj){
      state.score=obj.score
    },
    getPrice(state,obj){
      state.price -=obj.coupon
    }
  },
  actions:{
    findScoreSync(context){
      return new Promise((reslove,reject) =>{
        var score_url='/static/score.json';
        Vue.http.get(score_url).then((res)=>{
          var myScore=res.body.data[0].score;
          context.commit('getScore',{score:myScore})
          reslove() //等待commit完成
        })
      })
      
    },
    async findPriceSync(context){
      await context.dispatch('findScoreSync')
      console.log('该会员的积分是:'+store.state.score)
      var price_url='/static/price.json';
      Vue.http.get(price_url).then((res)=>{
        var myPrice=res.body.data[0].price;
        context.commit('getPrice',{coupon:myPrice})
      })
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
