# JS-变量声明：var let const

声明-declaration。一个变量被创建和使用的完整步骤是：声明，初始化，赋值。

* 基本描述

  > 声明
  >
  > var	声明一个变量，可同时将其初始化为一个值
  >
  > let	声明一个块级局部变量，可同时将其初始化为一个值
  >
  > const	声明一个只读的、块级局部常量。

* 作用域

var 声明的变量是全局范围或当前函数作用域范围；

let 和 const是块级范围。

// 声明变量的作用域范围是它们最主要的区别。

// 历史上，起初js是只有var的，它只能声明函数作用域/全局作用域，这太tm搞了。于是后来出了let 和 const来拯救js。

* 提升

var 对变量进行声明和初始化为undefined的这两步会被提升到作用域的顶部，

let 和 const 是只有声明会被提升，但不会被初始化为undefined。只有真正运行到初始化语句的地方才能初始化。

// let 的声明变量是有提升的，这段代码可以证明：

```
let x = 'global';
{
	console.log(x);
	let x = 1;
}
// Uncaught referenceError: Cannot access 'x' before initialization at..
```

按理说如果没有提升的话，console.log的时候可以访问到'global'。但是事实是不能。这正是因为块中 let x 的声明被提升了（而又没有提前初始化）。

// const 结果相同，同理。

// const不能赋值，只能被初始化。

//  [https://www.jianshu.com/p/0f49c88cf169](https://www.jianshu.com/p/0f49c88cf169)

/* 

2020.7.6。我觉得校招到这个程度差不多了，再深一些的比如for (let i = 0......) 中声明的本质就暂时没必要了。所以以上内容无法解释如下代码：

let b = 1;

(function(a = b, b) {

console.log(a, b);

}(undefined, 2));

*/

理解了以上变量声明的过程，临时死区的概念也就水到渠成地很好理解了：就是声明之后、初始化/赋值之前的那段时间。
