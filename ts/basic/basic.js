// 编译指令 tsc basic.ts --lib es2015,dom
// 1.类型推断
// 已经声明的类型不可以被其他类型赋值
var str0 = "abc";
// 类型不匹配
// str0 = 10
//类型匹配
str0 = "10";
// 2. 类型注解
var str = "hello world";
//3.类型断言
var numberArr = [1, 2, 3];
// 类型断言, 告诉 TypeScript 我在这段代码中断言 numberArr.find()的返回值是 number
//既告诉编译器变量是number 且 一定存在
var result = numberArr.find(function (item) { return item > 2; });
result * 5;
//4.类型
var v1 = "abc";
var v2 = 10;
var v3 = true;
var nu = null;
var un = undefined;
//联合类型 有可能被分配的类型
var v4 = null;
//可能在1 2 3 中的任意一个
var V5 = 2;
//数组
//两种定义方法
var arr = [1, 2, 3];
var arr2 = ["a", "b", "c"];
//元组 number? 代表这个可选
var t1 = [1, "a", 2];
t1[1] = "b";
//枚举 0开始
var e;
(function (e) {
    e[e["A"] = 0] = "A";
    e[e["B"] = 1] = "B";
    e[e["C"] = 2] = "C";
})(e || (e = {}));
console.log(e.A);
console.log(e[1]);
//5.函数
//void 空类型 
//?代表可选 ...代表剩余项
function hello(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    console.log("hello ".concat(a, " and").concat(b));
    console.log(rest);
}
hello("zhangsan", "lihua", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
