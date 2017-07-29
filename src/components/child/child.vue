<template>
  <div>
      <div>
          我是儿子
      </div>
      <input type="text" v-model="sendMessage">
      <br>
      {{sendMessage}}
  </div>
</template>
<script>
export default {
  name:'child',
  props:['sendMessage']
}
</script>
<style scoped>

</style>


