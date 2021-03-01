# JS-Promise 介绍、基础使用 和练习题

* Intro - 什么是Promise
    * 什么是回调

看一个场景：

_前端向服务器请求数据，然后处理返回的数据。_

比方说我有一个getData()

in Py 你可能想这么写：

```
data = getData() # 向服务器请求数据
print( data ) # 处理
```

但JS不能这么写。因为JS是异步非阻塞的，在第一行执行完了还没获取到数据之前, 就跑到第二行了, 结果输出了个寂寞。

in JS，要写成回调。

一个类似的场景：

> 以下为使用 `createAudioFileAsync()` 的示例：
>
> ```
> // 成功的回调函数
> function successCallback(result) {
>   console.log("音频文件创建成功: " + result);
> }
> 
> // 失败的回调函数
> function failureCallback(error) {
>   console.log("音频文件创建失败: " + error);
> }
> 
> createAudioFileAsync(audioSettings, successCallback, failureCallback)
> ```

这就是用回调处理异步。

回调有一个臭名昭著的问题就是回调地狱。

回调太丑，Promise存在的目的就是取代回调。

* 什么是Promise

它本身可以理解为“一个承诺”。异步事件会被绑定在它身上，伴随着这个承诺的成功/失败，执行一些后续的处理。 // 我的感性理解

比如上面的例子中，回调改成Promise写法，可以这么写：

>更现代的函数会返回一个 Promise 对象，使得你可以将你的回调函数绑定在该 Promise 上。
>
>如果函数 `createAudioFileAsync()` 被重写为返回 Promise 的形式，那么我们可以像下面这样简单地调用它：
>
>```js
>const promise = createAudioFileAsync(audioSettings);
>promise.then(successCallback, failureCallback);
>```
>
>或者简写为：
>
>```js
>createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
>```
>
>我们把这个称为 *异步函数调用*，这种形式有若干优点，下面我们将会逐一讨论。
>
>



Promise 这个API 叫做一种 异步编程的解决方案。发明它的目的就是优美地写异步。Promise 相比回调有很多优点，例如代码线性可读。

// 更多零基础感性理解Promise可移步： [https://zhuanlan.zhihu.com/p/26523836](https://zhuanlan.zhihu.com/p/26523836)

---

* Promise怎么写（基础使用）

创建一个最简单的Promise对象的写法是这样的：

```
p = new Promise( () => {console.log(1)} )
```

构造函数里，传入的这个函数只是一个**initializer**。它的两个参数是固定的，(resolve, reject)。

创建之后，立即initialize（这个初始化过程不是异步的，所以立即执行，不会等待消息队列）// 比如上面这行代码，执行后会立即打印 1

更具体地，initial 函数里可以包含对这个promise的resolve和reject操作。

例如，一个包含resolve/reject选项的Promise：

```
let p = new Promise( (resolve,reject) => {
    // do sth
    if (condition) {
        resolve()
    } else {
        reject()
    }
})
```

resolve() 和 reject()的作用是使该promise对象的**状态**发生改变。

一个Promise对象有三种状态：Pending, Fulfilled, Rejected

调用 resolve() 使对象状态转换 _Pending => Fulfilled_;  同样 reject() 对应 _Rejected_ 状态 

改了一次之后就改不了了。

而，根据promise的状态结果，我们可以对应地绑定后续的处理。

比如针对resolve结果做XXX；针对rejected结果做YYY

---

* 对Fulfilled 和 Rejected 结果的处理
    * 处理Fulfilled

_.then() 为promise绑定一个回调函数（a callback），这个函数会在原promise 被resolve__（或reject）__的时候执行。_

比如下面的代码：

```
p.then( () => {
    console.log(1)
})
```

这样就是为p绑定了函数，该函数会在p变为 Fulfilled 状态后执行。

// 如果绑定时p就已经是Fulfilled了，那么绑定完之后接着就会执行函数内容（等当前消息队列结束）

这样，就实现了对 Fulfilled 状态的promise进行了处理。

例子：

let myFirstPromise = new Promise(function(resolve, reject){

//当异步代码执行成功时，就会调用resolve(...), 失败时就会调用reject(...)

//在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.

setTimeout(function(){

resolve("成功!"); //代码正常执行！

}, 250);});1

myFirstPromise.then(function(successMessage){

//successMessage的值是上面调用resolve(...)方法传入的值.

//successMessage参数不一定非要是字符串类型，这里只是举个例子

console.log("Yay! " + successMessage);});

* 处理Rejected

_.catch() 方法 Attaches a callback for only the rejection of the Promise._

比如下面的代码

```
p.catch( () => {
    console.log(1)
})
```

这样就为p绑定了函数，其会在p 变为Rejected后执行。

（

事实上，.then() 可以传两个参数，第一个是Fulfilled, 第二个就是Rejected，写作：

```
p.then( fn1 , fn2 )
```

等价于

```
p.then( fn1 )
p.catch()
```

但是，两个都写在then里的写法是不推荐的。Instead, 永远使用catch吧。

_其实， __.catch( fn ) 就是 .then( null,  fn ) 的语法糖_

）

---

* 传参

上面提到，resolve是可以带参数的。

其参数会传到之后的then里。

比如：

```
p = new Promise(() => {
    resolve(1)
})
p.then( (data) =>{ console.log(data)  } )
```

这段代码会输出1。因为resolve把1传到了then里

---

* 链式

.then()每次都会返回一个Promise, 所以我们可以.then( fn1 ).then( fn2 )..... 接连狂写。// 回调那种丑陋的写法这时已经哭晕了。

then里传的是函数，其return值会传到下一个then作为参数。

e.g.

```
Promise.resolve(1)
.then( (data1) => data1*2  )
.then( (data2) => data2*2  )
.then( (data3) => console.log(data3) )
// 输出4
```

* 链式异步

值得指出的是：如果then方法的回调函数return的是一个promise，那么其将会成为then的返回值，即then返回该promise，以便链式promise。//  reference：[https://www.jianshu.com/p/001d22a44f85](https://www.jianshu.com/p/001d22a44f85)

```
Promise.resolve()
.then( () => new Promise( resolve =>{console.log(1); setTimeout( resolve ,1000) ) // 注意参数里的resolve不能少, 否则会找不到该属性 
.then( () => {console.log(2)} )
// 输出1, 然后过1s输出2
```

/* 我理解的是，可能return一个promise就会用这个返回值取代掉之前的promise吧。

做实验就知道了: 

Promise.resolve().then( resolve=>new Promise() )  返回的是一个pending的promise

Promise.resolve().then( ()=>1 ) 返回的是一个resolved 的promise, 其中resolve传的值是1。

如果链式，then里写函数return promise才是标准写法。 写个普通返回值的函数只是resolve([RETURNED_VALUE])的缩写。

*/

// 反正then里return promise ，然后用resolve来控制，可以实现连续异步的阻塞控制。

---

* Promise 进阶用法

// [https://juejin.im/post/5ad3fa47518825619d4d3a11](https://juejin.im/post/5ad3fa47518825619d4d3a11)

* all

Promise.all([ p1, p2, p3 ]) 如果这些promise全都fulfilled就算fulfilled, 否则算rejected。

```
Promise.all([p1, p2, p3])
.then((res)=>{ 
    //then方法不会被执行
    console.log(results); 
}).catch((err)=>{ 
    //catch方法将会被执行，输出结果为：2
    console.log(err); 
});
```

如果全都Fulfilled， 就看谁跑得慢。

* race

类似all。 结果看谁跑得快。

---

Practice

[https://juejin.im/post/597724c26fb9a06bb75260e8](https://juejin.im/post/597724c26fb9a06bb75260e8)

* 1 “立即性”

```
var p1 = new Promise(function(resolve,reject){ resolve(1); });
console.log(p1);
setTimeout(function(){ console.log(2); },0);
p1.then(function(value){ console.log(value); });
// Promise [[PromiseStatus]]: "resolved" [[PromiseValue]]: 1
// p2.then(function(value){ console.log(value); });
// p3.catch(function(err){ console.log(err); });
```

结果分析：

constructor中的executor立即执行（同步执行）。所以p1在创建时，马上就resolve(1)了，所以

然后设置timer，1s后输出2。

然后设置p1的then。then的callback立即同步执行，因为p1在绑定的时候就已经是resolve了。

这里then是异步的，按理说应该排在setTimeout后面？但是不然。结果是先then 再 timeout。这是JS的事件循环机制：setTimeout是宏任务，promise是微任务 [JS-并行模型与事件循环](evernote:///view/15405264/s70/c0fae39d-c462-4677-971a-ce43d5450f3a/c0fae39d-c462-4677-971a-ce43d5450f3a/)

* 2 异步性

```
var p1 = new Promise(function(resolve,reject){ resolve(1); });
var p2 = new Promise(function(resolve,reject){ setTimeout(function(){ resolve(2); }, 500); });
var p3 = new Promise(function(resolve,reject){ setTimeout(function(){ reject(3); }, 500); });
console.log(p1);
console.log(p2);
console.log(p3);
setTimeout(function(){ console.log(p2); }, 1000);
setTimeout(function(){ console.log(p3); }, 1000);
p1.then(function(value){ console.log(value); });
p2.then(function(value){ console.log(value); });
p3.catch(function(err){ console.log(err); });
```

执行分析：

constructor中的executor立即执行（同步执行）。所以p1在创建时，马上就resolve(1)了，而p2 p3由于setTimeout是异步的，则等0.5s后&&本Q内消息结束，才会settle；

所以456行输出 状态是resolve，pending，pending；

然后设置2个timer，1s后&&队列完成时输出p2 p3状态；

然后设置3个p的后续操作。.then和catch也是异步的，但是马上队列就空了，所以p1的then马上就紧接着队列的清空而执行了；

然后，上面2个timer setting时间到了，settle p2 p3。随即执行它们的then和catch，输出2, 3。

最后，等中间的两个1s的timer时间到了，输出p2和p3，状态分别是已resolve和已rejected

结果：

```
Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 1}
Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
1
2
3
Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: 2}
Promise {[[PromiseStatus]]: "rejected", [[PromiseValue]]: 3}
```

* 3 状态不可逆

```
var p1 = new Promise(function(resolve, reject){ resolve("success1"); resolve("success2"); });
var p2 = new Promise(function(resolve, reject){ resolve("success"); reject("reject"); });
p1.then(function(value){ console.log(value); });
p2.then(function(value){ console.log(value); });
// "success1"
// "success"
```

状态不可逆。只看第一次。

* 4 then的异步性

```
Promise.resolve().then(()=>console.log(222));
console.log(111);
// 111
// 222
```

* 5 错误处理

```
var p1 = new Promise( function(resolve,reject){
  foo.bar();
  resolve( 1 );      
});

p1.then(
  function(value){
    console.log('p1 then value: ' + value);
  },
  function(err){
    console.log('p1 then err: ' + err);
  }
).then(
  function(value){
    console.log('p1 then then value: '+value);
  },
  function(err){
    console.log('p1 then then err: ' + err);
  }
);

var p2 = new Promise(function(resolve,reject){
  resolve( 2 );    
});

p2.then(
  function(value){
    console.log('p2 then value: ' + value);
    foo.bar();
  },
  function(err){
    console.log('p2 then err: ' + err);
  }
).then(
  function(value){
    console.log('p2 then then value: ' + value);
  },
  function(err){
    console.log('p2 then then err: ' + err);
    return 1;
  }
).then(
  function(value){
    console.log('p2 then then then value: ' + value);
  },
  function(err){
    console.log('p2 then then then err: ' + err);
  }
);
```

// 有点长，但是可以分p1 和 p2两段看。

过程分析：

对于p1，executor中出现异常，则该promise直接rejected，**错误内容作为catch的传入值**。（不要和executor的返回值搞混了，executor的返回值是无效的）

所以p1 then err: [错误内容]

接着，这个then的promise是正常的，它正确地抛出了err，所以then then接的是正常的，只不过因为没有传出参数，所以 p1 then then: undefined。

对于p2，正常resolve(2)，所以接p2 then: 2。而这个p2的then出错了，所以p2 then的then就会接第二个，错误内容作为传入参数，因此p2 then then err :[错误内容]；

然后p2的then then是正常抛出了错误内容的，而且resolve(1)了，所以p2 then then then 1

答案：

```
p1 then err: ReferenceError: foo is not defined
p2 then value: 2
p1 then then value: undefined
p2 then then err: ReferenceError: foo is not defined
p2 then then then value: 1
```

* 6 resolve

```
var p1 = Promise.resolve( 1 );
var p2 = Promise.resolve( p1 );
var p3 = new Promise(function(resolve, reject){
  resolve(1);
});
var p4 = new Promise(function(resolve, reject){
  resolve(p1);
});

console.log(p1 === p2);
console.log(p1 === p3);
console.log(p1 === p4);
console.log(p3 === p4);

p4.then(function(value){
  console.log('p4=' + value);
});

p2.then(function(value){
  console.log('p2=' + value);
})

p1.then(function(value){
  console.log('p1=' + value);
})
```

分析：

Promise.resolve() 可以接受一个普通值或者一个promise。如果接受普通值则将其作为resolve参数值；如果接受的是promise，则**直接返回该promise**。

所以p2 === p1，true

但是new 的promise一定是一个新对象，所以后面三个判断都是false

至于为什么p4=1，这是因为Promise.prototype.resolve()（_事实上是Promise.prototype.resolve() _）会对传入的promise对象进行开箱，将其作为返回值（这个开箱过程是异步的）

* resolve 和 reject 的区别

```
var p1 = new Promise(function(resolve, reject){
  resolve(Promise.resolve('resolve'));
});

var p2 = new Promise(function(resolve, reject){
  resolve(Promise.reject('reject'));
});

var p3 = new Promise(function(resolve, reject){
  reject(Promise.resolve('resolve'));
});

p1.then(
  function fulfilled(value){
    console.log('fulfilled: ' + value);
  },
  function rejected(err){
    console.log('rejected: ' + err);
  }
);

p2.then(
  function fulfilled(value){
    console.log('fulfilled: ' + value);
  },
  function rejected(err){
    console.log('rejected: ' + err);
  }
);

p3.then(
  function fulfilled(value){
    console.log('fulfilled: ' + value);
  },
  function rejected(err){
    console.log('rejected: ' + err);
  }
);
```

分析：

p1，resolve 开箱，获取"resolve"

p2，resolve 开箱，发现内部的p是rej，于是外部也变为rejected

p3，**reject 不开箱**，给我什么就是什么（叫reason），直接作为返回值。

而开箱多一次异步操作，所以p1 p2会慢一圈。

所以先输出p3-rej: [Object Promise] （rej 的 reason是一个promise），然后再p1: "resolve", p2" rejected: "reject"

答案：

```
p3 rejected: [object Promise]
p1 fulfilled: resolve
p2 rejected: reject
```

// 好题

* 链式调用

```
Promise.resolve(1)
  .then((res) => {
    console.log(res)
    return 2
  })
  .catch((err) => {
    return 3
  })
  .then((res) => {
    console.log(res)
  })
```

答案：

```
1
2
```

链式调用的过程中会“穿透”。

逻辑是这样的：每次调用p的 .then .catch方法都会返回一个新建的promise，// 可以理解地叫它为“then-promise”

**只要原p被 settle，它们也就会跟着resolve**。

// 用then catch的意义就是用新的promise来监视原promise的状态变化。当原promise settle时，它们的使命也就完成了，于是随着settle。

只不过，对于catch来说，如果原promise是fulfilled，那么catch里的函数不会被调用，它只是settle。

（所有的那些链式、打包（all、race、settle）法，全都想清楚它们都是重新生成了一个新的promise来做事就行了。可以这很套娃）

* 循环错误

```
const promise = Promise.resolve()
.then(() => { return promise })
promise.catch(console.error)
```

返回值不能是自己，否则报错。

* nt then参数

```
Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log)
```

分析：

then 和 then then 里都不是函数，不会正常地绑定then，而是会继承父promise的resolve值。// 也就是所谓的“穿透”

（但它们仍然是创建了新的promise）
