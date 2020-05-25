/**
 * @param {*} arr 
 * @return []
 */

const isArr=arr=>{return Array.isArray(arr)?arr:[arr]}

/**
 * @param {*} phone 
 * @return boolean
 */

const regPhone=phone=>{ 
    return /^1[3456789]\d{9}$/.test(phone)
}

export{
    isArr,
    regPhone
}