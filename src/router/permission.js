import router from './index';
import {asyncRoute} from './router.config';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false })


router.beforeEach((to,from,next)=>{
    NProgress.start()
    next()
    // some action
})

router.afterEach(() => {
    NProgress.done()
  
})
