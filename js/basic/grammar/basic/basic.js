// example
function setupBoxClickHandler() {
    // 获取id为box的元素
    var box = document.getElementById("box");
    if (box) {
        // 点击box元素时，将innerText改为"新的内容"，并将this（box元素）作为this的上下文
        box.onclick = function () {
            //获取元素内容
            this.innerText = "新的内容"
            //获取元素类名
            this.className = "change"
            // 这个bind是给 this取得定位的
        }.bind(box)
    }

}

//1.变量var
var num0 = 10

//2.数据类型  
var num = 10
var str = "Hello World"
var bool = true
var nulls = null //用于清空变量内容 表示为空
var undefs = undefined //表示未定义 默认值

//3.运算符
var sum = 1 - 2 * 3 % 4
var result = "Hello World" + "ok"
var istrue = 1 > 2
console.log(2 === "2") //三个等号比较

// 4.语句
if (false) {
    //do something
} else if (false) {
    // do something
} else {
    // do something
}

for (var i = 0; i < 10; i++) {
    // do something
}

//5.函数
// 函数允许传入函数
function fn(n) {
    if (n % 2 != 0) {
        return false;
    }
}
function A(a, b, fn) {
    if (fn(a)) {
        return a + b;
    } else {
        return 0;
    }

}

//6.数组
var arr = [1, 2, 3, 4, 5]
console.log(arr.length)
console.log(arr[2]) // 获取数组第3个元素
console.log(arr) // 获取数组所有元素

arr.push(6) // 数组尾部添加元素
arr.unshift(0) // 数组头部添加元素
arr.pop() // 删除数组尾部元素
arr.shift() // 删除数组头部元素

arr.forEach(function (index, item) {
    console.log(index, item)
})

//7.对象
var obj = {
    name: "John",
    age: 20,
    sayHello: function () {
        console.log("Hello World")
    }
}
for (var key in obj) {
    if (typeof obj[key] === "function") {
        obj[key]()
    }
    console.log(key, obj[key])
}

console.log(obj.sayHello)

// 窗口加载完成后，执行setupBoxClickHandler函数
window.onload = function () {
    setupBoxClickHandler();
}