var swiper = document.querySelector(".swiper");
var imgs = document.querySelectorAll(".swiper img");
var box = document.querySelector("#box");
var next = document.querySelector("#next");
var last = document.querySelector("#last");
var left = 0;

function lunbo(num) {
    left += num;
    if (left < -5600) {
        // 停止过度动画
        left = 0;
        startTransition(num);
    }
    if (left > 0) {
        // 停止过度动画
        left = -5600;
        startTransition(num);
    }
    swiper.style.left = left + "px";
}
// 封装一个函数用于开启过度动画
function startTransition(num) {
    swiper.style.transition = "none";
    var t = setTimeout(function() {
        swiper.style.transition = "all 2s";
        left += num;
        swiper.style.left = left + "px";
    }, 200);
}

var timer = setInterval(function() {
    lunbo(-1400);
}, 4000);

// 当鼠标悬浮在box上时 停止轮播
box.onmouseenter = function(e) {
    clearInterval(timer);
    timer = null;
}
box.onmouseleave = function() {
    timer = setInterval(function() {
        lunbo(-1400)
    }, 2000);
}
next.onclick = function() {
    lunbo(-1400);
}
last.onclick = function() {
    lunbo(1400);
}