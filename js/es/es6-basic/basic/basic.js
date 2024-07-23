//1.变量和常量

//{}定义一个块(域) 这里面的变量不会被外界读取到
{
    //let 定义变量
    let count = 0
    count++

    //常量
    const BASE_URL = 'http://xxx.com/api'
}

//2.模版字符串
const str1 = "world"
const str2 = `hello ${str1} k`
console.log(str2)

// 3.解构赋值
const [a, b, c] = [1, 2, 3]
console.log(a, b, c)

//可以起别名以及 获取剩余属性other(名字随意)
const { username, age: userAge, ...other } = {
    username: "k",
    age: 24,
    gender: "male",
    address: "xxx"
}
console.log(username, userAge, other)

//4.数组和对象的扩展 ...扩展运算符
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [0, ...arr1, ...arr2, 10, 20]
console.log(arr3)

const obj1 = { name: "k" }
const obj2 = { age: 24 }
const obj3 = { ...obj1, ...obj2, gender: "male" }
console.log(obj3)

//副本拷贝
const obj4 = Object.assign(obj3)
obj4.name = "hello"
const obj5 = {
    phone: 123
}
//属性合并 产生新的对象
const obj6 = Object.assign(obj4, obj5)
console.log(obj6)


//arguments 固定为当前函数传入的实际参数
function fn() {
    //将伪数组转换为数组 Array.from
    Array.from(arguments).forEach(function (item) {
        console.log(item)
    })
}
fn(1, 2, 3, 4)

//5.class 类
class A {
    // 参数构造
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // 方法 名字任意
    intruduce() {
        console.log(`My name is ${this.name}, I am ${this.age} years old.`)
    }

}
// 新建对象a1
const a1 = new A("k", 24)

console.log(a1)
a1.intruduce()

//继承
class B extends A {
    constructor(name, age, gender) {
        super(name, age)
        this.gender = gender
    }
    introducez() {
        console.log(`My name is ${this.name}, I am ${this.age} years old, and I am a ${this.gender}.`)
    }
}
const a2 = new B("l", 20, "male")
//父类方法
a2.intruduce()
a2.introducez()

//6. 箭头函数 匿名函数的简易表达
//n是入参 n+3是出参
const getSum1 = n => n + 3
const getSum2 = (n1, n2) => n1 + n2
const getSum3 = (n1, n2, ...other) => {
    console.log(n1 * n2, other)
}
getSum3(11, 12, 13, 14, 15)
