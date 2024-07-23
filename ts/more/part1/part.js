var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//3.类
var AnimalClass = /** @class */ (function () {
    //构造方法
    function AnimalClass(name, color, height) {
        //= 设置默认值 还有private 与 protected在类与子类中访问
        this.weight = 100;
        //readonly
        this.age = "do not edit";
        this.name = name;
        this.color = color;
        this.height = height;
    }
    AnimalClass.prototype.rweight = function () {
        return this.weight;
    };
    AnimalClass.prototype.wweight = function (num) {
        this.weight += num;
        return this.weight;
    };
    AnimalClass.prototype.eat = function () {
        console.log("".concat(this.name, " eat color ").concat(this.color));
    };
    //static 类静态参数
    AnimalClass.do = "k";
    return AnimalClass;
}());
var animalClass = new AnimalClass("animalClass", "black", 30);
animalClass.eat();
console.log(animalClass.wweight(50));
console.log(animalClass.rweight());
//静态方法类直接访问
console.log(AnimalClass.do);
//类继承
var AB = /** @class */ (function (_super) {
    __extends(AB, _super);
    function AB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AB;
}(AnimalClass));
var ab = new AB("ab", "blue", 20);
ab.eat();
console.log(ab.rweight());
console.log(AB.do);
//4.存储器 类似get set方法
var User = /** @class */ (function () {
    function User() {
        this._password = "";
    }
    Object.defineProperty(User.prototype, "value", {
        get: function () {
            // 返回值不给看 ******
            return "******";
        },
        set: function (v) {
            if (v.length > 15) {
                throw new Error("value too long");
            }
            this._password = v;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User();
user.value = "abc123456";
console.log(user.value);
//5.抽象类
var AnimalAbstract = /** @class */ (function () {
    function AnimalAbstract() {
    }
    // 非抽象方法
    AnimalAbstract.prototype.run = function () {
        console.log("animal run");
    };
    return AnimalAbstract;
}());
var DogAbstract = /** @class */ (function (_super) {
    __extends(DogAbstract, _super);
    function DogAbstract(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    DogAbstract.prototype.eat = function () {
        console.log("".concat(this.name, " eat"));
    };
    return DogAbstract;
}(AnimalAbstract));
var dogAbstract = new DogAbstract("dog");
dogAbstract.eat();
dogAbstract.run();
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 10);
console.log(rectangle.area());
//7.泛型类
var GenericClass = /** @class */ (function () {
    function GenericClass(value) {
        this.value = value;
    }
    GenericClass.prototype.getValue = function () {
        return this.value;
    };
    GenericClass.prototype.setValue = function (value) {
        this.value = value;
    };
    return GenericClass;
}());
var genericClass = new GenericClass("hello");
genericClass.setValue("world");
console.log(genericClass.getValue());
