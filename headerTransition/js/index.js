headerTransition(80); //执行header滚动渐变

/**
 * [headerTransition description]
 * @param  {Number} height 发生渐变时的滚动距离
 */
function headerTransition(height) {
    $(window).scroll(function() {
        if ($(document).scrollTop()>height) {
            $('.navbar').addClass('navbar-float');
        } else {
            $('.navbar').removeClass('navbar-float');
        }
    });
}
