var line;
var arr = [];
var n = 0;
var astart = [];
var bstart = [];
while (line = readline()) {
    line = line.split(' ');
    // print(parseInt(line[0]) + parseInt(line[1]));
    if (n === 0) {
        for (var i = 1; i < line.length; i++) {
            astart.push(parseInt(line[i]));
        }
    } else {
        for (var i = 1; i < line.length; i++) {
            bstart.push(parseInt(line[i]));
        }
    }

    n++;
}
arr.push(astart);
arr.push(bstart);
// arr[0].push(1);

// var fakeArr = [
//     [1, 2, 3],
//     [5, 6]
// ];

// console.log(getAB(fakeArr).aArr);
// console.log(getAB(fakeArr).bArr);

getGap(arr);

function getGap(arr) {
    var aArr = getAB(arr).aArr;
    var bArr = getAB(arr).bArr;
    var gapArr = [];
    var gapMax = 0;

    for (var i = 0; i < aArr.length; i++) {
        gapArr.push(aArr[i] - bArr[i]);
    }
    gapMax = Math.max.apply(null, gapArr); //最大值
    // console.log(gapMax);
    print(gapMax);
}

/**
 * 得到AB分数
 * @param  {Array} arr 二维数组
 */
function getAB(arr) {
    var max = getMaxAndMin(arr).max;
    var min = getMaxAndMin(arr).min;

    var aArr = [];
    var bArr = [];


    // 循环3分线的位置
    for (var i = min - 1; i <= max; i++) {
        a = 0;
        b = 0;


        for (var j = 0; j < arr[0].length; j++) {
            if (arr[0][j] >= i) {
                a += 3;
            } else {
                a += 2;
            }
        }
        for (var k = 0; k < arr[1].length; k++) {
            if (arr[1][k] >= i) {
                b += 3;
            } else {
                b += 2;
            }
        }
        aArr.push(a);
        bArr.push(b);
    }
    return {
        aArr: aArr,
        bArr: bArr
    };
}

/**
 * 获取二维数组的最大最小值
 * @param  {Array} arr 二维数组
 * @return {Object}     最大和最小值
 */
function getMaxAndMin(arr) {
    var ta = arr.join(",").split(","); //转化为一维数组
    return {
        max: Math.max.apply(null, ta),
        min: Math.min.apply(null, ta)
    };
}

// getMaxAndMin(fakeArr);
// console.log(getMaxAndMin(fakeArr).max);
// console.log(getMaxAndMin(fakeArr).min);