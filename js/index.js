$(function () {
    var old = new Date(2018, 9, 27, 0, 0, 0);
    setInterval(fn, 1000);

    function fn() {
        var now = new Date();
        var start = (now - old) / 1000;
        var day = Math.floor(start / 60 / 60 / 24);
        var hour = Math.floor(start / 60 / 60 % 24);
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
})