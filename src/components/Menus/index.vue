<template>
  <a-layout-sider :trigger="null" collapsible v-model="collapsed" mode="inline">
     <div class="logo" />

     <a-menu :theme="theme" :mode="mode" :default-selected-keys="['1']" v-for="item in menus" :key="item.path">
        <a-menu-item :key="item.name">
          <a-icon :type="item.meta.icon" />
          <span>{{item.meta.title}}</span>
        </a-menu-item>
      </a-menu>
     </a-layout-sider>
</template>

<script>
export default {
   data(){
       return{
           collapsed:false
       }
   },
   props:{
       menus:{
           type:Array,
           required: true
       },
       theme:{
           type:String,
           default:'dark',
           required:false
       },
       mode:{
           type:String,
           default:'inline',
           required:false
       }
   }
}
</script>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>

