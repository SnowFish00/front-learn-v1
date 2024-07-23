//3.Module 模块 ESM CommonJS(适合在nodejs使用)两种

//ESM 导入
import { aTitle, aFN, default as aModule } from './module/a.js'
import { bTitle, bFN, default as bModule } from './module/b.js'
console.log(aTitle, aFN, aModule.name, bTitle, bFN, bModule.name)

//commonjs
//控制台  node module.js执行 但是要先注释掉ESM的导入
const moduleC = require('./module/c')
console.log(moduleC.name, moduleC.sayHello)
