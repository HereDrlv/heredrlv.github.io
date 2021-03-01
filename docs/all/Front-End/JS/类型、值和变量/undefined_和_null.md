# JS-语言基础-基本语法-undefined 和 null

undefined  [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined)

null [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/null)

* 面试速答

Undefined类型只有一个值，即undefined。当声明的变量还未被初始化时，变量的默认值为undefined。用法：

--变量被声明了，但没有赋值时，就等于undefined。

--调用函数时，应该提供的参数没有提供，该参数等于undefined。

--对象没有赋值的属性，该属性的值为undefined。

--函数没有返回值时，默认返回undefined。

Null类型也只有一个值，即null。空对象，某变量打算用来装变量，但是暂时装的是空。

（然后可介绍由来）

---

* 两者的由来——为什么要有undefined

这个世界本来是只需要null的。像C Java都只有null。

JS里的null 在用作数值时会处理为0。

而JS是弱类型型语言，允许诸如 1+null 这样的代码存在。（1+null===1）

JS作者认为这样不利于发现bug（早期JS的出错机制更不完善）

比如如下代码

```
var v;
if (1+v) {.....}
```

v被声明而没被赋值。如果没有undefined类型，v就是null，然后下面的1+v就是1，这个判断为真，我们发现不了v的问题。所以作者觉得只有null不太行。

于是作者加入了undefined这个变量类型。它在用作数值时会变成NaN（1+undefined===NaN），

这样，1+v 就是NaN，判断为假，更合理。这样也能更好地发现问题。

* 两者使用上的区别
