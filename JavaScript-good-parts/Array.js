var numbers = ['one', 'two', 3, 'four', 'wu']

delete numbers[0]
console.log(numbers[0]) //undefined
console.log(numbers.length) //5

numbers.splice(0, 1)
console.log(numbers[0]) //two
console.log(numbers.length) //4

console.log(typeof [1, 2]) //object

console.log(Array.isArray(numbers))


var is_array = function(value) {
    return Object.prototype.toString.apply(value) === '[object Array]'
}
console.log(is_array(numbers)) //true

var matrix = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3]
]
console.log(matrix[1][2]) //6
