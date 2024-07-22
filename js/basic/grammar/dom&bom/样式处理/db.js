/*
样式处理
*/

var block = document.querySelector("#block")

//可以挨个属性设置
// block.style.width = '80px'
// block.style.height = '80px'
// block.style.backgroundColor = 'tomato'

// 也可以直接等于预设class
// block.className = "changeStycle"

/*
文本处理
*/

// innerHTML 可以标签生成
block.innerHTML = "轮播图</br><span class='bold'>薇尔莉特·伊芙加登</span>"


/*
事件处理
*/

// 这个如果block 被其他函数也定义onlick则会被最后一次覆盖 
// 所以我们使用listener
// block.onclick = function () {
//     alert("点击了block")
// }

block?.addEventListener("click", function () {
    alert("点击了block")
})

//再次定义不会覆盖
block?.addEventListener("click", function () {
    alert("再次点击了block")
})

/*
定时器
*/

//无限执行 即间隔执行
var timerID = setInterval(function () {
    imgs[index].className = ""
    if (index === imgs.length - 1) {
        index = -1
    }
    index++;
    imgs[index].className = "active"
}, 4000)

//只执行一次
setTimeout(function () {
    // 一小时后关闭 timerID的间隔执行
    clearInterval(timerID)
}, 360000)

// 轮播图逻辑
var carousel = document.querySelector("#carousel")
var imgs = carousel.children
var perBtn = document.querySelector("#prev")
var nextBtn = document.querySelector("#next")

var index = 0
perBtn.addEventListener("click", function () {
    imgs[index].className = ""
    if (index === 0) {
        index = (imgs.length)
    }
    index--;
    imgs[index].className = "active"
})

nextBtn.addEventListener("click", function () {
    imgs[index].className = ""
    if (index === imgs.length - 1) {
        index = -1
    }
    index++;
    imgs[index].className = "active"
})
