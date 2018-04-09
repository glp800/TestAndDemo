

/*
 * 程序分析：对n进行分解质因数，应先找到一个最小的质数k，然后按下述步骤完成：
 * (1)如果这个质数恰等于n，则说明分解质因数的过程已经结束，打印出即可。
 * (2)如果n>=k，但n能被k整除，则应打印出k的值，并用n除以k的商,作为新的正整数你n,重复执行第一步。&nbsp;&nbsp;&nbsp;
 * (3)如果n不能被k整除，则用k+1作为k的值,重复执行第一步。&nbsp;&nbsp;
 */
/*    public static void primeFactor() {// 该方法将一个正整数分解成质因数相乘的形式

        Scanner scan = new Scanner(System.in);// 接收控制台输入的信息
        System.out.print("请输入一个正整数：");

        try {
            int num = scan.nextInt();// 取出控制台输入的信息

            if (num < 2) {// 若输入的数小于2,输出提示信息

                System.out.println("必须输入不小于2的正整数！");
            } else {

                int primeNumber = 2;// 定义最小的质数
                System.out.print(num + " = ");
                
                while (primeNumber <= num) {// 在质数小于输入的数时，进行循环

                    if (primeNumber == num) {// 当质数等于输入的数时,直接输出

                        System.out.print(num);
                        break;// 跳出循环

                    } else if (num % primeNumber == 0) {// 当输入的数与质数的余数为0时,输出这个质数

                        System.out.print(primeNumber + " * ");
                        num = num / primeNumber;// 把剩下的结果赋给num
                        
                    } else {// 在余数不为0时,质数递增
                        primeNumber++;
                    }
                }
            }
        } catch (Exception e) {
            System.out.println("必须输入正整数！");// 捕捉异常,输出必须输入整数
        }
    }
}*/









/*var line;
while (line = readline()) {
    line = line.split(' ');
    if(line.length>1){
        cost(parseInt(line[0]),parseInt(line[1]),parseInt(line[2]),parseInt(line[3]));
    }
}


function cost(z, e, m, s) {
    var sum = z + e + m + s;
    if (z >= 60 && e >= 60 && m >= 90 && s >= 90) {
        if (sum >= 350) {
            print('Gongfei');
        } else if (sum >= 310) {
            print('Zifei');
        } else {
            print('Fail');
        }
    } else {
        print('Fail');
    }
}

cost(61,62,100,120);
cost(80,80,120,100);
cost(55,90,130,130);
*/


// for (var c = 0; c < 100; c++) {
//     for (var r = 0; r < 100; r++) {
//         for (var j = 0; j < 100; j++) {
//             for (var f = 0; f < 100; f++) {
//                 if (c + 5 == r - 5 && r - 5 == 5 * j && 5 * j == f / 5 && f / 5 == c + 5) {
//                     console.log(c);
//                 }
//             }
//         }
//     }
// }

// var a = 123456789012345678901234567890;
// var b = 345;

// console.log(a/b);



/*var fake_json_function_list = {
    "data": {
        "1": "附近服务网点",
        "2": "电脑保修查询",
        "3": "网上报修服务",
        "4": "服务热线查询",
        "5": "全国服务网点"
    }
};
var setFunctionList = function(json_function_list) {
    var funData = json_function_list.data;
    var htmlStrFun = '';
    for (var funKey in funData) {
        if (funData.hasOwnProperty(funKey)) {
            console.log(funKey);
            console.log(funData[funKey]);
            htmlStrFun+='<option value='+funKey+'>'+funKey+'.'+funData[funKey]+'</option>';
        }
    }
    console.log(htmlStrFun);
};
setFunctionList(fake_json_function_list);

console.log("========Function======Article====Push========");
var fake_json_article_list = {
    "data": [{
        "78": {
            "id": "78",
            "title": "系统调试安装",
            "url": "http://weixin.lenovo.com.cn/qcs_product_1"
        }
    }, {
        "79": {
            "id": "79",
            "title": "拆机！",
            "url": "http://weixin.lenovo.com.cn/qcs_product_2"
        }
    }]
};
console.log(fake_json_article_list.data);
var articleList = fake_json_article_list.data;
var htmlStr = '<option value="-1">文章推送</option>';
// 第一层循环得到对象数组
for (var i = 0; i < articleList.length; i++) {
    console.log(articleList[i]);
    // 第二层循环遍历对象，得到详细数据
    for (var key in articleList[i]) {
        if (articleList[i].hasOwnProperty(key)) {
            console.log(articleList[i][key]);
            htmlStr += '<option value=' + articleList[i][key].id + ' url="' + articleList[i][key].url + '">' + articleList[i][key].title + '</option>';
        }
    }
}*/
console.log(htmlStr);

// console.log(typeof []);
// console.log(!!"false");

// var a= 2,b=3;
// console.log(a++==b?a:b);
// var x=3,y=4;
// y+=x+2;
// console.log(y);
// var o = //;
// a=2,b=5
// console.log(a>b?a:b);
// var y=1,
// x=y=typeof x;
// console.log(x);
// console.log(y);









// console.log("test!!");

// console.log(null==undefined);
// console.log(+"10");
// console.log("round--"+Math.round(7.25));

// console.log("-------");
// console.log("1");
// setTimeout('console.log("2");',1);
// setTimeout(function  () {
//     console.log('3');
// },0);
// console.log('4');
// console.log("------------");
/*var y = 1,
x=y=typeof x;
console.log(x);
console.log(y);
console.log(Math.round(15.49));
// console.log(123+"789");*/
// console.log(parseInt(1.5));
// // console.log(a);
// var d = new Date();
// console.log(d.getMonth());
// var a =  typeof typeof(null);
// console.log(a);

// var a = 2,b=3;
// var r = a++==b?a:b;
// console.log(r);
// 
// 
// 
// function f (x,y) {
//     x=10;
//     alert(arguments[0]+","+arguments[1]);
// }
// f();

/*var a;
var x = a === undefined;
console.log(x);
console.log(+"10");
alert(2<1<3);
var aa = 1234['toString']['length'];
console.log(aa);

console.log(parseInt("101中学"));

console.log(!!"false");*/
// console.log("i am a student".subString(9,13));
>>>>>>> de631b8c1e11db7b9f870c6d319258b819c9e2a3

/*var a = 0;
var b = 0;
c
function A(a) {
    function B(b) {
        alert(a + b++);
    }
    alert(b);
}
A(1); //0
B(1); //error*/
/*这是联想前端的一道笔试题，我记不太清楚，好像是这样*/
// 还有一些我没答好的
// Ajax跨域
// JavaScript类，继承，私有变量
// 


/*var str = '"[1,2,3]"';
var arrStr = str.slice(1,length-1);
var array = JSON.parse(arrStr);
console.log(arrStr);
console.log(arrStr[0]);
console.log(array[0]);

var test = function() {
    console.log("函数表达式");
};

test();*/



/*function test() {
    alert('test');
};
var aa = test;
test = function() {
    alert('test1');
};

aa();
test();*/


// console.log([14, 3, 77].splice(1, 2));

/*function foo4() {
    function x() {}
    var x;
    console.log(x);
}
foo4(); // funtion x()
