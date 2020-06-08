<template>
  <div class="home">
   home
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
      collapsed:false
    }
  },
  mounted(){
    console.log(23)
  }
}
</script>

<style scoped>
.layout_head{
    height: 100vh;
  }
</style>

