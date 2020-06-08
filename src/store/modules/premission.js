import {asyncRoute} from '../../router/router.config';
/**
 * 判断用户是否有权限进入某个路由(用户只有一个权限)
 * @param {*} asyncRouterMap 
 * @param {*} roles
 * @return {boolean} 
 */
function hasPermission(asyncRouterMap,roles) {
    if(asyncRouterMap.meta && asyncRouterMap.meta.role){
       if(asyncRouterMap.meta.role.includes(roles)){
           return true
       }
       return false
    }
    return true
 }

/**
* 根据用户的权限来动态添加可以访问路由 不同用户所能看到的路由表是不同的
* @param roles
* @return [] 路由列表
*/
function getRouteByRoles(asyncRouterMap,roles) {
   const getRoute=asyncRouterMap.filter(route=>{
     if(hasPermission(route,roles)){
       if(route.children && route.children.length){
           route.children=getRouteByRoles(route.children,roles)
       }
       return true
     }
    return false
   })
  return getRoute
}

const state={
    routeList:[]
}

const mutations={
    SET_ROUTES:(state,routeList)=>{
        state.routeList = routeList
    }
}

const actions={
    getRoute({commit},roles){
        return new Promise((resolve,reject)=>{
            const routeList = getRouteByRoles(asyncRoute,roles);
            commit('SET_ROUTES',routeList);
            console.log(state.routeList)
            resolve(true)
        })
    }
}

export default{
    state,
    mutations,
    actions
}