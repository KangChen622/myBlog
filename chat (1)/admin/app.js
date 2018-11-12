const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
// 导入session
// const session = require('express-session')

// 跨域请求
const cors = require('cors')
app.use(cors())
// 解析表单中间件
app.use(bodyParser.urlencoded({
    extended: false
}))
// 托管为静态目录
app.use('/node_modules', express.static('./node_modules'))



// 使用 循环的方式，进行路由的自动注册
fs.readdir(path.join(__dirname, './router'), (err, filenames) => {
    if (err) return console.log('读取 router 目录中的路由失败！')
    // 循环router目录下的每一个文件名
    filenames.forEach(fname => {
        // 每循环一次，拼接出一个完整的路由模块地址
        // 然后，使用 require 导入这个路由模块
        const router = require(path.join(__dirname, './router', fname))
        app.use(router)
    })
})



app.listen(5000, () => {
    console.log('server running at http://47.107.144.133:5000')
})