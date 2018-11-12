const express=require('express')
const router =express.Router()

// 导入用户相关的处理函数模块
const ctrl=require('../controller/user.js')

// 用户请求登录界面
router.post('/register',ctrl.register)

module.exports=router