// 编译指令 tsc basic.ts --lib es2015,dom --target es2015

// 1.类型推断
// 已经声明的类型不可以被其他类型赋值
let str0 = "abc"
// 类型不匹配
// str0 = 10
//类型匹配
str0 = "10"

// 2. 类型注解
let str: string = "hello world"

//3.类型断言
let numberArr = [1, 2, 3]
// 类型断言, 告诉 TypeScript 我在这段代码中断言 numberArr.find()的返回值是 number
//既告诉编译器变量是number 且 一定存在
const result = numberArr.find(item => item > 2) as number
result * 5
//也可以断言标签 
//比如 const aLink = document.getElementById('link') as HTMLAnchorElement

//4.类型
let v1: string = "abc"
let v2: number = 10
let v3: boolean = true
let nu: null = null
let un: undefined = undefined
//联合类型 有可能被分配的类型
let v4: string | null = null
//可能在1 2 3 中的任意一个
let V5: 1 | 2 | 3 = 2
//map类型
let myMap = new Map();
myMap.set("key", "value")
const isHave = myMap.has('key')
const valueC = myMap.get('key')
//删除 key value
// const removed = myMap.delete('key')
//map 迭代
for (const [key, value] of myMap.entries()) {
    console.log(key, value);
}
//或者
myMap.forEach((value, key) => {
    console.log(key, value);
});


// typeof 根据已有变量获取类型
let v6: typeof v1 = "number"

//数组
//两种定义方法
let arr: number[] = [1, 2, 3]
let arr2: Array<string> = ["a", "b", "c"]

//元组 number? 代表这个可选
let t1: [number, string, number?] = [1, "a", 2]
t1[1] = "b"

//枚举 0开始
enum e {
    A,
    B,
    C
}
console.log(e.A)
console.log(e[1])

//5.函数
//void 空类型 
//?代表可选 ...代表剩余项
function hello(a: string, b?: string, ...rest: number[]): void {
    console.log(`hello ${a} and${b}`)
    console.log(rest)
}
hello("zhangsan", "lihua", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

//6. 接口
interface Person {
    name: string
    age: number
    sayHello(): void
}

const p: Person = {
    name: "zhangsan",
    age: 20,
    sayHello() {
        console.log("hello")
    }
}

//7. 别名
type UserName = string | number
let a: UserName = 10

//8.泛型
function Fn<T>(a: T, b: T, c: T): T[] {
    return [a, b, c]
}
//你不写<string>也行 只要abc参数类型一致就好
const RF = Fn<string>("username", "age", "gender")
console.log(RF)


