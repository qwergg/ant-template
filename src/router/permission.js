import router from './index';
import {asyncRoute} from './router.config';
import store from '../store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false })


router.beforeEach((to,from,next)=>{
    NProgress.start()
    store.dispatch('getRoute','admin').then(r=>{
        console.log(store.getters.routeList)
        next()
    })
    
        //router.addRoutes(store.getters.routeList)
  
    
    // some action
})

router.afterEach(() => {
    NProgress.done()
  
})
