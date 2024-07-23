// 若无 es6语法 如引进export 则编译指令 tsc part.ts --lib es2015,dom
//否则 tsc --module ES6 --target ES2015 --lib ES2015,DOM part.ts
//ts 配置文件tsc --init
function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        throw new Error("参数类型不匹配");
    }
}
console.log(sum(1, 2));
console.log(sum("hello", "world"));
let dog = {
    name: "dog",
    eat() {
        console.log("dog eat");
    },
    bark() {
        console.log("dog bark");
    }
};
console.log(dog.name, dog.eat(), dog.bark());
//3.类
class AnimalClass {
    //构造方法
    constructor(name, color, height) {
        //= 设置默认值 还有private 与 protected在类与子类中访问
        this.weight = 100;
        //readonly
        this.age = "do not edit";
        this.name = name;
        this.color = color;
        this.height = height;
    }
    rweight() {
        return this.weight;
    }
    wweight(num) {
        this.weight += num;
        return this.weight;
    }
    eat() {
        console.log(`${this.name} eat color ${this.color}`);
    }
}
//static 类静态参数
AnimalClass.do = "k";
let animalClass = new AnimalClass("animalClass", "black", 30);
animalClass.eat();
console.log(animalClass.wweight(50));
console.log(animalClass.rweight());
//静态方法类直接访问
console.log(AnimalClass.do);
//类继承
class AB extends AnimalClass {
}
let ab = new AB("ab", "blue", 20);
ab.eat();
console.log(ab.rweight());
console.log(AB.do);
//4.存储器 类似get set方法
class User {
    constructor() {
        this._password = "";
    }
    get value() {
        // 返回值不给看 ******
        return "******";
    }
    set value(v) {
        if (v.length > 15) {
            throw new Error("value too long");
        }
        this._password = v;
    }
}
let user = new User();
user.value = "abc123456";
console.log(user.value);
//5.抽象类
class AnimalAbstract {
    // 非抽象方法
    run() {
        console.log("animal run");
    }
}
class DogAbstract extends AnimalAbstract {
    constructor(name) {
        super();
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eat`);
    }
}
let dogAbstract = new DogAbstract("dog");
dogAbstract.eat();
dogAbstract.run();
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle(5, 10);
console.log(rectangle.area());
//7.泛型类
class GenericClass {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
let genericClass = new GenericClass("hello");
genericClass.setValue("world");
console.log(genericClass.getValue());
let anumberClass = new GenericClass(3);
anumberClass.setValue(5);
console.log(anumberClass.getValue());
//暴露为模块 注意貌似写了export 再编译就是module了 所以先编译再export 保证这个在变成module前js可用
// 一次性导出所有内容
export { sum, AnimalClass, AB, User, AnimalAbstract, DogAbstract, Rectangle, GenericClass };
