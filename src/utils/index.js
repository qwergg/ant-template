/**
 * @param {*} arr 
 * @return []
 * @desc 处理后台数据为[]
 */
const isArr=arr=>{return Array.isArray(arr)?arr:[arr]}

/**
 * @param {*} phone 
 * @return boolean
 * @desc 验证手机号格式
 */
const isMobile=phone=>{ 
    return /^1[3456789]\d{9}$/.test(phone)
}
/**
 * @param {*} email
 * @return boolean
 * @desc 验证邮箱格式
 */
const isEmail = (email) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(email)
}

export{
    isArr,
    isEmail,
    isMobile
}