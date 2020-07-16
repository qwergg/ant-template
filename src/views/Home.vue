<template>
  <div class="home">
   home页面部分
  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      collapsed:false,
      user:''
    }
  },
  mounted(){
    // this.$axios.get('https://platform.sen-cloud.com.cn/elws1/services/authapi/getOrganList',{
    //   params:{
    //     senderId:'',
    //     secToken:1,
    //     response:'application/json'
    //   }
      
    // }).then(r=>{
    //   console.log(r)
    // }).catch(err=>{
    //   console.log(err)
    // })
  },
  methods:{
   
  }
}
</script>

<style scoped>
.layout_head{
    height: 100vh;
  }
</style>

