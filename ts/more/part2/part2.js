"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//编译 tsc part2.ts --lib es2015,dom --target es2015
var p1 = require("../part1/part");
// 使用导入的内容 举例
console.log(p1.sum(1, 2));
console.log(p1.sum("hello", "world"));
var dog = {
    name: "dog",
    eat: function () {
        console.log("dog eat");
    },
    bark: function () {
        console.log("dog bark");
    }
};
console.log(dog.name, dog.eat(), dog.bark());
