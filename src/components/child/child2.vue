<template>
  <div>
      <div>
          我是儿子2
      </div>      
      <div>我是从儿子1那里接收过来的</div>
        <p>积分：{{score}}</p>
        <p>价格：{{price}}</p>
  </div>
</template>
<script>
export default {
  name:'child2',
  computed:{
        score(){
            return this.$store.state.score;
        },
         price(){
            return this.$store.state.price;
        }

  }
}
</script>
<style scoped>

</style>
