<template>
  <div class="hello">
    <h1>{{ msg }}</h1>    
    <div>
      <router-link :to="{path:'/test/123'}">参数传递1</router-link>
      <br>
      <router-link :to="{path:'/test/789',query:{id:1234,name:'阿晖'}}">参数传递2</router-link>
      <br>
      <button @click="toNewPage">点击跳转</button>
    </div>
    <!-- <div>
      <div v-for="item in list">
        {{item.id}}-----{{item.name}}
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    }
  },
  methods:{
    toNewPage(){
      this.$router.push({path:'/test/000',query:{id:222,name:'切尔西'}})
    }
  },
  mounted (){
    var url='/static/test.json'
    this.$http.get(url).then((res) =>{
      console.log(res.body)
      this.list=res.body.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
