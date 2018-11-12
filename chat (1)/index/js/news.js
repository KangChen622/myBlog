$(function () {
    // 发送消息
    $('.send').on('click', function () {
        var sendMessage = $('.message').val();
       
    
        // 克隆节点
        // var newP = $(".uu li:nth-of-type(2)").clone(true);
        // $(".uu").append(newP);
        // $('.uu li:last .new1').html(sendMessage);
        var right=template("RightNews",{sendMessage:sendMessage})
        console.log(sendMessage)
        $(".uu").append(right);
        $('.message').val('');


        // 40001 参数key错误
        // 40002 请求内容info为空
        // 40004 当天请求次数已使用完
        // 40007 数据格式异常
        $.ajax({
            type: "post",
            url: "http://openapi.tuling123.com/openapi/api",
            data: {
                'info': sendMessage,
                'key': '4f000ee2632648d981315be513491e69',
                'userid': 123456,
            },
            dataType: "json",
            success: function (res) {
                if (res.code !== 40001 || res.code !== 40004 || res.code !== 40007) {
                    setTimeout(function () {
                        // $(".uu").append($(".uu li:nth-of-type(1)").clone(true));
                        // $('.uu li:last .new1').html(res.text);
                        var left=template("LeftNews",{res:res})
                        $(".uu").append(left); 
                    }, 2000)
                }


            }
        })


        // 关闭


        // 模板渲染
    })
    // 返回界面
    $('.backNews').on('click', function () {
        console.log('aaa')
        location.href = 'home.html';
    })

})