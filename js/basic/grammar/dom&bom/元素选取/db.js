/*
元素获取
*/

// id标签获取
var block = document.getElementById("block")
//内容获取和修改
if (block)
    block.textContent = "hello world"
console.log(block)


//tag获取
// var contents = document.getElementsByTagName("p")
//选择器获取 可以根据类名获取 和css选择器一样
// var contents = document.querySelectorAll(".k")
var contents = document.querySelectorAll("#container-a p")
// contents 具备数组基本特征 不具备数组基本方法 称为伪数组
console.log(contents)

// 假设是后端的数据
var textArr = [
    "理塘丁真",
    "蔡徐坤",
    "陈泽",
    "你干嘛，哎呦"
];

for (var i = 0; i < contents.length; i++) {
    //字符面量比拼接更好 ``
    // contents[i].textContent = `第 ${i} 个内容`
    contents[i].textContent = textArr[i]
}

//只获取第一个 单一获取
var it = document.querySelector(".it")
if (it)
    it.textContent = "鸡你太美"

// document.previousSibling()获得同一级的前一个元素
// document.nextSibling() 获得同级的后一个元素

// 获取父级节点
var container = it.parentNode
// 获得子节点
var childs = container.children
console.log(childs)
