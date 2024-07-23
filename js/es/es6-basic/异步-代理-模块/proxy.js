//2.Proxy 监控对象属性 做处理
const obj = {
    name: "k",
    age: 24
}
const container = document.getElementById("container")

const p1 = new Proxy(obj, {
    //object获取触发
    //对象 属性 proxy实例
    get(target, property, reciver) {
        //返回该属性的值
        return obj[property]
    },
    //object甚至触发
    set(target, property, value, reciver) {
        //修改该属性的值
        obj[property] = value
        //可以同步更改页面元素内容
        container.textContent = obj.name
    }
    //其他函数去MDN自己看
})

console.log(p1.name)
console.log(p1.age)
p1.name = "Jack"
p1.age = 21
console.log(p1.name)
console.log(p1.age)





