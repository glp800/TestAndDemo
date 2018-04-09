console.log('mi');


// 1.  使用图论证明为什么 x的平方 + y的平方 不等于 x+y 的值的平方

// =================================
// 2.   分别使用 递归 和 迭代的方式实现斐波那契数列值的计算： F（0）=0，F（1）=1，F（n）=F(n-1)+F(n-2)（n≥2，n∈N*）。

/**
 * 斐波那契数列 递归法
 * @param  {Number} index 索引值
 * @return {Number}       结果
 */
function fib(index) {
    if (index === 0) {
        return 0;
    } else if (index == 1) {
        return 1;
    } else {
        return fib(index - 1) + fib(index - 2);
    }
}

console.log(fib(7));

/**
 * 斐波那契数列 迭代法
 * @param  {Number} n 索引值
 * @return {Number}   结果
 */
function fib2(n) {
    var f0 = 0;
    var f1 = 1;
    var currentFib;

    for (var i = 1; i < n; i++) {
        currentFib = f0 + f1;
        f0 = f1;
        f1 = currentFib;
    }

    return currentFib;
}

console.log(fib2(7));

//====================================================
// 3.  实现一个spacify函数，接受一个字符串作为参数，然后把这个字符串的每个字符都用空格隔开后返回。例如:
// spacify('hello world') // => 'h e l l o w o r l d'
// 实现以后， 请直接为String对象增加spacify函数。
// 'hello world'.spacify();

/**
 * 去掉所有空格
 * @param  {String} str 输入的字符串
 * @return {String}     输出的字符串
 */
function spacify(str) {

    //先去掉所有空格
    //再给每一个字符后面添加空格

    var arr = [];

    str = str.replace(/\s/g, '');

    console.log(str);

    for (var i = 0; i < str.length; i++) {
        arr.push(str[i] + ' ');
    }
    str = arr.join('').slice(0, -1);

    return str;
}

//为String对象增加spacify函数
String.prototype.spacify = function() {
    return spacify(this.toString());
};

console.log('hello world2 1   23'.spacify());
console.log(spacify('hello world'));


//======================================================
//4.  实现一个事件监听类(包括事件的注册、触发、移除。类似jquery里的on, trigger, off事件)
//

/**
 * 定义类
 * @param {[type]} dom [description]
 */
function $(dom) {
    // console.log(this);
    this.dom = document.querySelector(dom);

    if (!(this instanceof $)) return new $(dom);
}

/**
 * 在类的原型上添加方法
 * @type {Object}
 */
$.prototype = {

    // 事件注册
    on: function(event, listener) {
        if (this.dom.addEventListener) {
            this.dom.addEventListener(event, listener);
        } else if (this.dom.attachEvent) {
            this.dom.attachEvent("on" + event, listener);
        }
    },

    // 触发
    trigger: function(handler) {
        handler.call(this.dom); // 改变this指向
    },

    // 移除
    off: function(event, listener) {
        if (this.dom.removeEventListener) {
            console.log('obj');
            this.dom.removeEventListener(event, listener);
        } else if (this.dom.detachEvent) {
            this.dom.detachEvent("on" + event, listener);
        }
    }
};


// test
var clickEvent = function() {
    console.log('clicked!!!');
    $('body').trigger(function() {//触发
        this.style.background = '#ccc';
    });
};
$('#test').on('click', clickEvent);//注册
// $('#test').off('click', clickEvent);//移除事件


//============================================
// 5.  实现图片懒加载。

/////////////////////////////////////////////////////
// http://gaohaoyang.github.io/test/test/lazyLoad/ ///////////////////////////////////////////////////////

//====================================================



////////////////////////////////////////////////////////////
// 6.  实现下面效果（具体效果可参照http://www.mi.com/内容模块效果，可使用jquery库） //
//                                                        //
// 即 轮播图                                                  //
// http://gaohaoyang.github.io//test/test/carousel/       //////////////////////////////////////////////////////////////
