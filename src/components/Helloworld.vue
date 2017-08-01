<template>
  <div>      
    <div>
        我是父亲
    </div>
    <input type="text" v-model="msg">
    <child></child>
    <child2></child2>
  </div>
   
</template>
<script>
import child from './child/child'
import child2 from './child/child2'
export default {
  data(){
      console.log(this.$route)
      return{
          test:'这是一个测试',
          id:this.$route.params.id,
          userid:this.$route.query.id,
          name:this.$route.query.name,
          msg:"我是传给儿子的信息"
      }
  },
  components:{child,child2}

}
</script>

