var myObject = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === 'number' ? inc : 1
    }
}

myObject.increment()
console.log(myObject.value) //1

myObject.increment(3)
console.log(myObject.value) //4


var add = function(a, b) {
    return a + b
}

myObject.double = function() {
    var that = this
    var helper = function() {
        that.value = add(that.value, that.value)
    }
    helper()
}

myObject.double()
console.log(myObject.value) //8

//创建构造器函数
var Quo = function(string) {
    this.status = string
}

//给Que的所有实例提供一个公共方法
Quo.prototype.getStatus = function() {
    return this.status
}

//实例化
var myQuo = new Quo('confused')

console.log(myQuo.getStatus()) //confused


var arr = [3, 4]
var sum = add.apply(null, arr)
console.log(sum) //7

var statusObject = {
    status: 'hello'
}

var status = Quo.prototype.getStatus.apply(statusObject)
console.log(status) //hello

var sum = function() {
    var i, sum = 0
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)) //45

var add2 = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        }
    }
    return a + b
}
console.log(add2(2, 3)) //5
console.log(add2('a', 6))

var try_it = function() {
    try {
        add2('a')
    } catch (e) {
        console.log(e.name + ': ' + e.message)
    }
}
try_it() //TypeError: add needs numbers

// 先添加方法使得该方法对所有函数可用
Function.prototype.method = function(name, func) {
    this.prototype[name] = func
    return this
}

//添加一个取整方法
Number.method('integer', function() {
    return Math[this < 0 ? 'ceil' : 'floor'](this)
})
console.log((-10 / 3).integer()) //-3

//添加 trim()
String.method('trim', function() {
    return this.replace(/^\s+|\s+$/g, '')
})
console.log('  hello alibaba  '.trim()) //hello alibaba


var walkTheDom = function walk(node, func) {
    func(node)
    node = node.firstChild
    while (node) {
        walk(node, func)
        node = node.nextSibling
    }
}

var getElementsByAttribute = function(att, value) {
    var results = []
    walkTheDom(document.body, function(node) {
        var actual = node.nodeType === 1 && node.getAttribute(att)
        if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
            results.push(node)
        }
    })
    return results
}

console.log(getElementsByAttribute('data-za-module', 'AnswerItem'))

var quo = function(status) {
    return {
        get_status: function() {
            return status
        }
    }
}

var myQuo = quo('amazed')
console.log(myQuo.get_status()) //amazed


var numberCal = (function() {
    var half = function(n) {
        return n / 2
    }
    var double = function(n) {
        return n * 2
    }
    var tribble = function(n) {
        return n * 3
    }
    return {
        half: half,
        double: double,
        tribble: tribble
    }
}())

console.log(numberCal.half(5)) //2.5
console.log(numberCal.half(6)) //3
console.log(numberCal.double(7)) //14
console.log(numberCal.tribble(7)) //21
