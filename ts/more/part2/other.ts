//命名空间
/*
使用命名空间有助于组织代码，并且可以避免命名冲突。然而，在现代 TypeScript 项目中，
更推荐使用模块（import 和 export）来组织代码
*/
// 声明一个命名空间
namespace MyNamespace {
    // 导出一个接口
    export interface MyInterface {
        name: string;
        age: number;
    }

    // 导出一个类
    export class MyClass implements MyInterface {
        constructor(public name: string, public age: number) { }
    }

    // 导出一个函数
    export function greet(person: MyInterface) {
        return `Hello, ${person.name}!`;
    }
}

// 使用命名空间中的成员
const person: MyNamespace.MyInterface = new MyNamespace.MyClass('Alice', 30);
console.log(MyNamespace.greet(person)); // 输出: Hello, Alice!

//嵌套命名空间
namespace OuterNamespace {
    export namespace InnerNamespace {
        export class InnerClass {
            constructor(public message: string) { }
        }
    }
}

// 使用嵌套命名空间中的成员
const innerObject = new OuterNamespace.InnerNamespace.InnerClass('Hello from inner namespace!');
console.log(innerObject.message); // 输出: Hello from inner namespace!

//合并命名空间
// 第一个声明
namespace MergedNamespace {
    export class ClassOne {
        constructor(public info: string) { }
    }
}

// 第二个声明
namespace MergedNamespace {
    export class ClassTwo {
        constructor(public details: string) { }
    }
}

// 使用合并后的命名空间
const objOne = new MergedNamespace.ClassOne('Info for class one');
const objTwo = new MergedNamespace.ClassTwo('Details for class two');

console.log(objOne.info); // 输出: Info for class one
console.log(objTwo.details); // 输出: Details for class two
