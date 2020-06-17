<template>
  <a-layout-sider :trigger="null" collapsible v-model="collapsed" mode="inline" style="width: 256px">
     <div class="logo" />
 
     <a-menu :theme="theme" :mode="mode" :default-selected-keys="[$route.name]" :default-open-keys="openKeys" :inline-collapsed="collapsed">
        <template v-for="item in menusList">
          <a-menu-item :key="item.name"  v-if="!item.children">
              <router-link :to="item.path">
                <a-icon :type="item.meta.icon" />
                <span>{{item.meta.title}}</span>
              </router-link>
          </a-menu-item>

          <a-sub-menu v-if="item.children" :key="item.name">
            <span slot="title"><a-icon :type="item.meta.icon || '' " /><span>{{item.meta.title}}</span></span>
            <a-menu-item  v-for="menu in item.children" :key="menu.name">
              <router-link :to="menu.path">
                <a-icon :type="menu.meta.icon"/>
                <span>{{menu.meta.title}}</span>
              </router-link>
            </a-menu-item>
        </a-sub-menu>
      </template>
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
   },
   computed:{
     menusList(){
       return this.menus[0].children
     },
     openKeys(){
         const route = this.$route.matched;
         const currentName = this.$route.name;
         const openKey = route.filter(item=>{
              return item.name === currentName
         })
        
        return [openKey[0].parent.name]
     }
   }
 
}
</script>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>

