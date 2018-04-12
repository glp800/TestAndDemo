/*初始化序列号*/
var a = 0;
var b = 0;
var c = $('.pic ul li');

/*初始化上一个展示的里的序列号*/
function next() {
    c.eq(a).css({left: "100%"});
    // 动画 动画时间300毫秒
    c.eq(a).animate({left: "0px"}, 300);
    c.eq(b).animate({left: "-100%"}, 300);
}


function prove() {
    c.eq(a).css({left: "-100%"});
    c.eq(a).animate({left: "0px"}, 300);
    c.eq(b).animate({left: "100%"}, 300);
}

$('.nav ul li').click(function () {
    $(this).addClass('bgC').siblings().removeClass('bgC');
    a = $(this).index();
    /*获取当前序列号*/
    if (a > b) {
        next();
        b = a;
    } else {
        prove();
        b = a;
        c.eq(a).addClass('bgC').siblings().removeClass('bgC');
    }
});

$(".next").click(function () {
    a++;
    if (a > 3) {
        a = 0;
    }
    next();
    b = a;
    $('.nav ul li').eq(a).addClass("bgC").siblings().removeClass("bgC");
});

$(".prev").click(function () {
    a--;
    if (a < 0) {
        a = 3;
    }
    prove();
    b = a;
    $('.nav ul li').eq(a).addClass("bgC").siblings().removeClass("bgC");
});


