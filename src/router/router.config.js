import {Main,RouterView} from '@/layouts';
const asyncRoute=[
    {
        path: '/',
        name: 'Main',
        redirect: '/home',
        component: Main,
        children:[
            {
                path:'/home',
                name:'Home',
                meta:{title:'首页',icon:'home',role:['admin']},
                component:() => import('@/views/Home.vue')
            },
            {
                path:'/live',
                name:'Live',
                meta:{title:'直播管理',icon:'video-camera',role:['admin']},
                component:() => import('@/views/Home.vue')
            },
            {    
                path:'/user',
                name:'User',
                meta:{title:'用户系统',icon:'user',role:['admin']},
                redirect: '/user/userManage',
                component:RouterView,
                children:[
                    {
                        path:'/user/userManage',
                        name:'userManage',
                        meta:{title:'用户管理',icon:'user',role:['admin','super']},
                        component:()=>import('@/views/About.vue')
                    },
                    {
                        path:'/user/devManage',
                        name:'devManage',
                        meta:{title:'设备管理',icon:'laptop',role:['admin','super']},
                        component:()=>import('@/views/About.vue')
                    }
                    
                ]
            }
          ]
    }
    
]

export {
    asyncRoute
}