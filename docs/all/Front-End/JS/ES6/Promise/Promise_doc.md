# JS-Promise doc

基于上一篇  [JS-Promise 介绍、基础使用](evernote:///view/15405264/s70/c5569307-b065-4420-b647-7050aee7f5ce/c5569307-b065-4420-b647-7050aee7f5ce/)

这一篇打算写得更精准一些

reference [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

_Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值._

* 构建语法

new Promise( function(resolve, reject) {...} /* executor */ );

参数
executorexecutor是带有 resolve 和 reject 两个参数的函数 。Promise构造函数执行时立即调用executor 函数， resolve 和 reject 两个函数作为参数传递给executor（executor 函数在Promise构造函数返回所建promise实例对象前被调用）。resolve 和 reject 函数被调用时，分别将promise的状态改为_fulfilled（_完成）或rejected（失败）。executor 内部通常会执行一些异步操作，一旦异步操作执行完毕(可能成功/失败)，要么调用resolve函数来将promise状态改成_fulfilled_，要么调用reject 函数将promise的状态改为rejected。如果在executor函数中抛出一个错误，那么该promise 状态为rejected。executor函数的返回值被忽略

值得指出的是：promise的initialization过程本身是同步的。如果这个initialization函数里有异步操作，它才异步；后面的then和catch才是异步。

例子：

```
var p1 = new Promise(function(resolve,reject){ console.log("立即执行"); resolve(1); });
p1.then(function(value){ console.log(value); });
console.log(p1);

// 立即执行
// Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 1}
// 1
```

在这段代码里，“立即执行”会最先输出，且console.log()会输出一个resolved的p1，这就是因为new promise的这个步骤是非异步的，"立即执行"和resolve动作立刻完成。

而p1.then却是异步的，所以它会被丢到队列尾部，等待console.log完成了之后才执行p1.then里的callback

---

* Promise.prototype.resolve()

_Promise.resolve(value)_;

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)

参数
value将被Promise对象解析的参数，也可以是一个Promise对象，或者是一个thenable。

返回值

返回一个带着给定值解析过的Promise对象，如果参数本身就是一个Promise对象，则直接返回这个Promise对象。

* Promise.prototype.

_Promise.reject(reason)_;

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)

参数
reason表示`Promise`被拒绝的**原因**。返回值
一个给定原因了的被拒绝的 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

---

* Promise.prototype.then()

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

参数
onFulfilled可选当 Promise 变成接受状态（fulfilled）时调用的[函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Function)。该函数有一个参数，即接受的最终结果（the fulfillment  value）。如果该参数不是函数，则会在内部被替换为 (x) => x，即原样返回 promise 最终结果的函数onRejected可选当 Promise 变成拒绝状态（rejected）时调用的[函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Function)。该函数有一个参数，即拒绝的原因（rejection reason）。  如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)。then也是异步的

---
