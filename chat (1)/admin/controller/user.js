const moment = require('moment')
// 导入数据库模块
const conn = require("../db/index.js")


// 登录请求的处理函数
const login = (req, res) => {
    // 接受数据
    const body = req.body
    console.log(body)
    // 查询语句
    const sql = 'select * from user where username=? and password=?'
    // 连接数据库
    conn.query(sql, [body.username, body.password], (err, result) => {
        if (err) return res.send({
            msg: '用户登录失败',
            status: 502
        })
        if (result.length !== 1) return res.send({
            msg: '用户登录失败',
            status: 502
        })
        res.send({
            msg: 'ok',
            status: 200
        })
    })
}
// 登录界面logo
const logo = (req, res) => {
    // 接受数据
    const body = req.body

    // 查询语句
    const sql = 'select * from user where username=?'
    // 连接数据库
    conn.query(sql, [body.username], (err, result) => {
        if (err || result.length !== 1) return res.send({
            msg: 'null'
        })
        res.send({
            msg: 'ok',
            status: 200,
            img: result[0].portrait
        })
    })
}
// 注册用户
const register = (req, res) => {
// 接受数据
const body = req.body
// 判断用户输入的数据是否完整
if (body.username.trim().length <= 0 || body.password.trim().length <= 0 || body.tel.trim().length <= 0) {
    return res.send({
        msg: '请填写完整的表单数据后再注册用户！',
        status: 501
    })
}
// 查询语句
const sql1 = 'select count(*) as count from user where username=?'
// 连接数据库
conn.query(sql1, body.username, (err, result) => {
    // 如果查询失败，则告知客户端失败
    if (err) return res.send({
        msg: '用户名查重失败！',
        status: 502
    })
    if (result[0].count !== 0) return res.send({
        msg: '请更换其它用户名后重新注册！',
        status: 503
    })
    // 执行注册的业务逻辑
    body.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
    const sql2 = 'insert into user set ?'
    conn.query(sql2, body, (err, result) => {
        if (err) return res.send({
            msg: '注册新用户失败！',
            status: 504
        })
        if (result.affectedRows !== 1) return res.send({
            msg: '注册新用户失败！',
            status: 505
        })
        res.send({
            msg: '注册新用户成功！',
            status: 200
        })
    })
})
}


module.exports = {
    login,
    logo,
    register
}