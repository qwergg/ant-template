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
                meta:{title:'首页',icon:'user',role:['admin']},
                component:() => import('@/views/Home.vue')
            },
            {
                path:'/user',
                name:'User',
                redirect: '/user/userManage',
                component:RouterView,
                children:[
                    {
                        path:'/userManage',
                        name:'userManage',
                        meta:{title:'用户管理',icon:'user',role:['admin','super']},
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