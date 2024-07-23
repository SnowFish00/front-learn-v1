//有import的es指令 所以用es6 
//tsc --module ES6 --target ES2015 --lib ES2015,DOM part.ts
import * as p1 from "../part1/part";
// 使用导入的内容 举例
console.log(p1.sum(1, 2));
console.log(p1.sum("hello", "world"));
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
