<template>
  <div>
      <div>
          我是儿子1
      </div>
      <div>
          <p>积分：{{originScore}}</p>
          <p>价格：{{originPrice}}</p>
      </div>
      <button @click="test">查询价格</button>
  </div>
</template>
<script>
export default {
  name:'child',
  methods:{
    test(){
      this.$store.dispatch('findPriceSync')
    }
  },
  computed:{
    originScore(){
      return this.$store.state.score;
    },
    originPrice(){
      return this.$store.state.price;
    }
  }
}
</script>
<style scoped>

</style>


