$(function () {
    // 倒计时
    var old = new Date(2018, 9, 27, 0, 0, 0);
    setInterval(fn, 1000);
    function fn() {
        var now = new Date();
        var start = (now - old) / 1000;
        var hour = Math.floor(start / 60 / 60 / 24);
        var day = Math.floor(start / 60 / 60 % 24);
        var minute = Math.floor(start / 60 % 60);
        var second = Math.floor(start % 60);
        day = day < 10 ? '0' + day : day;
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;
        $(".day").html(day);
        $(".hour").html(hour);
        $(".minute").html(minute);
        $(".second").html(second);
    }
    fn();


    // logo旋转
    var flag=true;
    $(".hero__title_inner").on("click","#kmusic",function () {
        if(flag){
            // $('#yinpin')[0].load();  音乐重加载
            $("#yinpin")[0].play();
            $("#kmusic").addClass("kmusic");
            
        }else{
            $("#yinpin")[0].pause();
            $("#kmusic").removeClass("kmusic");
           
        }
        flag=!flag;
      });
})
