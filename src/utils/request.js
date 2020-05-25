import axios from 'axios'
import notification from 'ant-design-vue/es/notification'

const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL, //API 
    timeout: 8000, // 请求超时时间毫秒
    responseType:'json'
  })

const err = (error) => { //err
    if (error.response) {
      const data = error.response.data
      //const token = sessionUtils.getSession('token')
      if (error.response.status === 403) {
          notification.error({
          message: 'Forbidden',
          description: '资源不可用',
          duration:1.5
        })
      }else if(error.response.status === 401){
        notification.error({
         message: 'error',
         description: '安全令牌过期请重新登录',
         duration:1.5
       })
     }else if(error.response.status === 500){
         notification.error({
          message: 'error',
          description: '服务器内部错误',
          duration:1.5
        })
      }

        //  if (token) {
        //   store.dispatch('logout').then(() => {
        //     setTimeout(() => {
        //       window.location.reload()
        //     }, 1500)
        //   })
        // }
    }
    return Promise.reject(error)
  } 

 
  service.interceptors.request.use(config=>{
    //const token = sessionUtils.getSession('token')
    //  if (token) {
    //     config.headers['Authorization'] = `Bearer ${token}` // 让每个请求携带自定义 token 请根据实际情况自行修改
    //  }
      return config
  },err)

  service.interceptors.response.use((response) => {
      return response.data
  }, err)


export default service