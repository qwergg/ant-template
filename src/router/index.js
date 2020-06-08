import Vue from 'vue'
import VueRouter from 'vue-router'
import {Main,RouterView} from '@/layouts';
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/home',
    component: Main,
    children:[
        {
          path:'/home',
          name:'Home',
          meta:{title:'首页',icon:'user',role:['admin']},
          component:() => import('../views/Home.vue')
        },
        {
          path:'/user',
          name:'User',
          redirect: '/user/userManage',
          component: RouterView,
          children:[
            { 
              path:'userManage',
              name:'userManage',
              meta:{title:'用户管理',icon:'user',role:['admin']},
              component:() => import('../views/About.vue')
            },
            {
              path:'devManage',
              name:'devManage',
              meta:{title:'设备管理',icon:'user',role:['admin','super']},
              component:()=>import('@/views/About.vue')
          },
          {
              path:'liveManage',
              name:'liveManage',
              meta:{title:'直播管理',icon:'user',role:['admin','super']},
              component:()=>import('@/views/About.vue')
          }
          ]
        }
        
      ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]



const router = new VueRouter({
 
  routes
})


// router.beforeEach((to, from, next) => {

//   router.addRoutes(store.getters.addRouters)
//   next()
 
// })


export default router
