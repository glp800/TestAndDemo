/*var line;
while (line = readline()) {
    number(parseInt(line));
}*/


function number(num) {
    var arr = [];
    if (num < 2) {

    } else {
        var primeNumber = 2;
        // console.log(num + ' = ');

        while (primeNumber <= num) {
            if (primeNumber == num) {
                console.log(num);
                arr.push(num);
                break;
            } else if (num % primeNumber == 0) { // 当输入的数与质数的余数为0时,输出这个质数

                console.log(primeNumber + " * ");
                arr.push(primeNumber);
                arr.push(10);
                num = num / primeNumber; // 把剩下的结果赋给num

            } else { // 在余数不为0时,质数递增
                primeNumber++;
            }
        }
    }
    return arr;
}
print(number(2));
number(17);
number(100);

console.log(number(10));


function print(arr) {
    var result='';
    var n = [
        [' - ', '| |', '   ', '| |', ' - '],
        ['   ', '  |', '   ', '  |', '   '],
        [' - ', '  |', ' - ', '|  ', ' - '],
        [' - ', '  |', ' - ', '  |', ' - '],
        ['   ', '| |', ' - ', '  |', '   '],
        [' - ', '|  ', ' - ', '  |', ' - '],
        [' - ', '|  ', ' - ', '| |', ' - '],
        [' - ', '  |', '   ', '  |', '   '],
        [' - ', '| |', ' - ', '| |', ' - '],
        [' - ', '| |', ' - ', '  |', ' - '],
        ['   ', '   ', ' * ', '   ', '   ']
    ];
    for (var i = 0; i < arr.length; i++) {
        if (arr.length > 1) {

            result +=n[arr[i]]


        } else {
            console.log('----');
            for (var j = 0; j < 5; j++) {
                result += n[arr[i]][j]+'\n';
                // console.log(n[arr[i]][j]);
            };
        }
    };
    console.log(result);
}

// var n0 = [' - ', '| |', '   ', '| |', ' - '];
// var n1 = ['   ', '  |', '   ', '  |', '   '];
// var n2 = [' - ', '  |', ' - ', '|  ', ' - '];
// var n3 = [' - ', '  |', ' - ', '  |', ' - '];
// var n4 = ['   ', '| |', ' - ', '  |', '   '];
// var n5 = [' - ', '|  ', ' - ', '  |', ' - '];
// var n6 = [' - ', '|  ', ' - ', '| |', ' - '];
// var n7 = [' - ', '  |', '   ', '  |', '   '];
// var n8 = [' - ', '| |', ' - ', '| |', ' - '];
// var n9 = [' - ', '| |', ' - ', '  |', ' - '];
// var result = '';
// for (var i = 0; i < n0.length; i++) {
//     result += n0[i] + '\n';
// };
// console.log(result);
// console.log(' - \n| |\n   \n| |\n - '); //0
// console.log('   \n  |\n   \n  |\n   '); //1
// console.log(' - ', '  |', ' - ', '|  ', ' - '); //2
// console.log(' - ', '  |', ' - ', '  |', ' - '); //3
// console.log('   ', '| |', ' - ', '  |', '   '); //4
// console.log(' - ', '|  ', ' - ', '  |', ' - '); //5
// console.log(' - ', '|  ', ' - ', '| |', ' - '); //6
// console.log(' - ', '  |', '   ', '  |', '   '); //7
// console.log(' - ', '| |', ' - ', '| |', ' - '); //8
// console.log(' - ', '| |', ' - ', '  |', ' - '); //9