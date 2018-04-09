var empty_object = {}

var stooge = {
    firstName: 'Haoyang',
    lastName: 'Gao'
}

console.log(stooge.firstName); // Haoyang
console.log(stooge['firstName']); // Haoyang

console.log(stooge.firstName || 'Joe'); // Haoyang
console.log(stooge.age || 25); // 25

stooge.firstName = 'aaa'
stooge.nickName = 'peip'

console.log(stooge);


var x = stooge
x.hair = 'black'
stooge.hair //"black"

var anotherStooge = Object.create(stooge)
anotherStooge.firstName //"aaa"
anotherStooge.firstName = 'bbb'
anotherStooge.firstName //"bbb"
anotherStooge.hair //"black"

function add(a, b) {
    return a + b
}

var add = function(a, b) {
    return a + b

for (var name in anotherStooge) {
    if (anotherStooge.hasOwnProperty(name) && typeof anotherStooge[name] !== 'function') {
        console.log(name + '--->' + anotherStooge[name])
    }
}

anotherStooge.firstName //"bbb"
delete anotherStooge.firstName
anotherStooge.firstName //"aaa"


var MYAPP = {}

MYAPP.stooge = {
    //...
}

MYAPP.flight = {
    //...
}
