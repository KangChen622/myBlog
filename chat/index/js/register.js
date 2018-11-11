$(function () {
    function hidden(text) {
        $('.danger span').html(text);
        $('.danger span').fadeIn(1000).fadeToggle(4000).fadeOut(1000);
    }
    // 获取验证码
    $('.safe_code').on('click',function () {
        // 后期填充
      })
    //   注册事件
    $('.register').on('click', function () {
        var username = $('.username').val();
        var password = $('.password').val();
        var passwordAgain = $('.passwordAgain').val();
        var call = $('.call').val();
        var auth=$('.auth').val();
        var regP = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;
        // 密码由6-10字母和数字组成
        // 账号验证
        if ($('.username').val().trim() == 0) {
            hidden('账号格式不正确');
            return;
        }
        // 密码验证
        if (!regP.test(password)) {
            hidden('密码至少6位且含有字母和数字');
            return;
        }
        // 再次验证
        if (password !== passwordAgain) {
            hidden('两次密码不一样');
            return;
        }
        // 手机号验证
        var regN = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!regN.test(call)) {
            hidden('手机号有误');
            return;
        }
        // 验证码
        if ($('.auth').val().trim() == 0) {
            hidden('请输入验证码');
            return;
        }
       $.ajax({
            type: "post",
            url: "http://47.107.144.133/register",
            data: {
                username:username,
                password:password,
                tel:call
            },
            success: function (res) {
                if(res.status!==200){
                       hidden(res.msg);
                       return;
                }
                hidden('注册成功');
                setTimeout(function () {
                    location.href='../../index.html'
                  },3000)
            }
        });


    })


})