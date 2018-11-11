$(function () {
    //  消息提示
    function hidden(text) {
        $('.danger span').html(text);
        $('.danger span').fadeIn(1000).fadeToggle(4000).fadeOut(1000);
    }
    // 显示图像
    $('.username').on('blur', function () {
        var username = $('.username').val();
        if (username == ' ') {
            return;
        }

        $.ajax({
            type: 'post',
            url: "http://47.107.144.133/logo",
            data: {
                username: username,
            },
            success: function (res) {
                if (res.msg !== 'ok') {
                    $('.imgLogo').css('display', "none");
                    return;
                }

                $('.imgLogo').attr("src", res.img);
                $('.imgLogo').show();
            }
        })
    })
    // 登录事件
    $('.lgn').on('click', function () {

        var username = $('.username').val();
        var password = $('.password').val();
       
        var regP = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;
        // 密码由6-10字母和数字组成
        if ($('.username').val().trim() == 0) {
            hidden('账号格式不正确');
            return;
        }
        var username = $('.username').val();
        if (!regP.test(password)) {
            hidden('密码格式有误');
            return;
        }
      
        $.ajax({
            type: 'post',
            
            url: ' http://47.107.144.133/login',
            data: {
                username: username,
                password: password
            },
            success: function (res) {
               
                if (res.msg !== 'ok') {
                 
                    hidden('账号或密码错误');
                    return;
                }
                hidden('登录成功');
                setTimeout(() => {

                    location.href = "index/html/home.html"
                }, 2000);
            }

        })
        event.preventDefault();
    })

})