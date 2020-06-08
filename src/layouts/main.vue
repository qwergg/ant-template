<template>
     <a-layout id="components-layout-demo-custom-trigger" :class="['layout_head']">
    
     <left-menus :menus="routeList" mode="inline"/>
     
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
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import leftMenus from '@/components/Menus/index';
export default {
  name: 'Main',
  components:{leftMenus},
  data(){
    return{
      collapsed:false
    }
  },
  mounted(){
    console.log(23)
    console.log(this.routeList)
  },
  computed:{
    ...mapGetters(['routeList'])
  }
}
</script>

<style scoped>
.layout_head{
    height: 100vh;
  }
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}


</style>

