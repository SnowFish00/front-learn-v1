// 若无 es6语法 如引进export 则编译指令 tsc part.ts --lib es2015,dom
//否则 tsc --module ES6 --target ES2015 --lib ES2015,DOM part.ts
//ts 配置文件tsc --init

// 逐个暴露 举例
/*
export const myVar = 42;

export function myFunction() {
    return 'Hello, world!';
}
*/

//1.函数重载
function sum(a: number, b: number): number
function sum(a: string, b: string): string
function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b
    } else {
        throw new Error("参数类型不匹配")
    }
}
console.log(sum(1, 2))
console.log(sum("hello", "world"))

//2.接口继承
interface Animal {
    name: string
    eat(): void
}

interface Dog extends Animal {
    bark(): void
}

let dog: Dog = {
    name: "dog",
    eat() {
        console.log("dog eat")
    },
    bark() {
        console.log("dog bark")
    }
}
console.log(dog.name, dog.eat(), dog.bark())

//3.类
class AnimalClass {
    //默认都是public
    //属性可以不在这写 可以直接在constructor(public title:string)定义省了多写一次
    name: string
    //? 代表可选
    color?: string
    //= 设置默认值 还有private 与 protected在类与子类中访问
    private weight = 100
    protected height: number
    //static 类静态参数
    static do: string = "k"
    //readonly
    readonly age = "do not edit"
    //构造方法
    constructor(name: string, color: string, height: number) {
        this.name = name
        this.color = color
        this.height = height
    }

    rweight(): number {
        return this.weight
    }
    wweight(num: number): number {
        this.weight += num
        return this.weight
    }

    eat(): void {
        console.log(`${this.name} eat color ${this.color}`)
    }
}

let animalClass = new AnimalClass("animalClass", "black", 30)
animalClass.eat()
console.log(animalClass.wweight(50))
console.log(animalClass.rweight())
//静态方法类直接访问
console.log(AnimalClass.do)

//类继承
class AB extends AnimalClass {
}
let ab = new AB("ab", "blue", 20)
ab.eat()
console.log(ab.rweight())
console.log(AB.do)

//4.存储器 类似get set方法
class User {
    private _password: string = ""

    get value(): string {
        // 返回值不给看 ******
        return "******"
    }

    set value(v: string) {
        if (v.length > 15) {
            throw new Error("value too long")
        }
        this._password = v
    }
}

let user = new User()
user.value = "abc123456"
console.log(user.value)

//5.抽象类
abstract class AnimalAbstract {
    abstract name: string
    //抽象方法
    abstract eat(): void
    // 非抽象方法
    run() {
        console.log("animal run")
    }
}

class DogAbstract extends AnimalAbstract {
    name: string
    constructor(name: string) {
        super()
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat`)
    }
}

let dogAbstract = new DogAbstract("dog")
dogAbstract.eat()
dogAbstract.run()

//6.类实现接口 
/*
implements 可以实现多个接口 
Class M implements interfaceA,interfaceB{}
即可
*/
interface Shape {
    area(): number
}

class Rectangle implements Shape {
    width: number
    height: number
    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }
    area(): number {
        return this.width * this.height
    }
}

let rectangle = new Rectangle(5, 10)
console.log(rectangle.area())

//7.泛型类
class GenericClass<T> {
    value: T
    constructor(value: T) {
        this.value = value
    }
    getValue(): T {
        return this.value
    }
    setValue(value: T): void {
        this.value = value
    }
}

let genericClass = new GenericClass<string>("hello")
genericClass.setValue("world")
console.log(genericClass.getValue())

let anumberClass = new GenericClass<number>(3)
anumberClass.setValue(5)
console.log(anumberClass.getValue())

//暴露为模块 注意貌似写了export 再编译就是module了 所以先编译再export 保证这个在变成module前js可用
// 一次性导出所有内容
export { sum, Animal, Dog, AnimalClass, AB, User, AnimalAbstract, DogAbstract, Shape, Rectangle, GenericClass }