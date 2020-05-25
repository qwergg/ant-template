<template>
  <div class="home">
     <a-layout id="components-layout-demo-custom-trigger" :class="['layout_head']">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
     <div class="logo" />
    
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      
      </a-layout-header>

      <a-layout-content :style="{ margin: '24px 16px 0',padding:'12px 24px', background: '#fff', minHeight: '100%' }">
      <router-view/>
      </a-layout-content>
      
    </a-layout>
  </a-layout>
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

