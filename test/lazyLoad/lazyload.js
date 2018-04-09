console.log('hello lazyload');

var aImg = document.getElementsByTagName('img');

// 滚动页面签先执行一次
lazyload();

// 监听页面滚动
window.onscroll = lazyload;

/**
 * 懒加载
 */
function lazyload() {
    
    // 循环所有标签
    for (var i = 0; i < aImg.length; i++) {
        if (aImg[i].getBoundingClientRect().top + 100 <= document.documentElement.clientHeight) {

            aImg[i].setAttribute('src', aImg[i].getAttribute('data'));
        }
    }
}