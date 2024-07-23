//1.Promise Async 常见异步(用于入参数、独立于主线程...需求) 定时器 AJAX
//promise 为了将异步的嵌套书写为同步的样子 整洁

//resolve 成功处理 reject 失败处理 未收到则状态默认为 pending等待状态
const promise1 = new Promise((resolve, reject) => {
    //可以书写逻辑决定使用 resolve 或者 reject
    //失败和成功函数不可并存
    resolve("task1 ok msg")
    // reject("task1 failed msg")
})

//resovle 会调用then
promise1.then(data => {
    console.log(data)

    //还可以 返回一个新的promise 第二个异步处理
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task2 ok msg")
        }, 1000)
    })
}, err => {
    //这个是 promise1.then().catch()
    console.log("task 1 failed")
    //抛出错误使得任务1失败后面直接执行失败
    throw new Error("Task 1 failed")
})

    ////这个可以被简化到then的 err中处理
    // .catch((err) => {
    //     //这个是promise1.then().catch
    //     console.log(err)
    // })

    .then(data => {
        //这个是 promise1.then().then()
        // 既第二个事务成功data处理
        console.log(data)

    }, err => {
        //这个是 promise1.then().then.catch()
        console.log("task2 failed")
    })

//async 简化 promise 搭配await 但不是万能的

//返回一个promise对象
function asyncTask() {
    return new Promise((resolve, reject) => {
        //do something
        const isSuccess = true
        if (isSuccess) {
            resolve("async task3 success")
        } else {
            reject("async task3 failed")
        }
    }
    )
}

//对于使用 await的函数写async async对await生效
async function doAsync() {
    //使用 try catch 捕获fialed
    try {
        console.log("do task 1")
        const result = await asyncTask()
        console.log(result)
        console.log("do task 2")
    } catch (error) {
        console.error(error)
    }
}

doAsync()
