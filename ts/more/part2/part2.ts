//编译 tsc part2.ts --lib es2015,dom --target es2015
import * as p1 from "../part1/part"

// 使用导入的内容 举例
console.log(p1.sum(1, 2));
console.log(p1.sum("hello", "world"));

let dog: p1.Dog = {
    name: "dog",
    eat() {
        console.log("dog eat");
    },
    bark() {
        console.log("dog bark");
    }
};
console.log(dog.name, dog.eat(), dog.bark());