# JS-this

MDN官方列举：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)

---

系统且权威的解释：

[JS-函数（犀牛书读书笔记）](evernote:///view/15405264/s70/43c3a657-884e-47d4-b019-4ffaddaf1160/43c3a657-884e-47d4-b019-4ffaddaf1160/)

---

阮一峰：

[https://ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html](https://ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html)

总的来说，this就是函数运行时的环境对象

---

面试回答：

this 是JS的一个关键字。不是变量也不是属性，也不能被赋值。它**指向运行上下文**，所以调用时才确定其指向。

JS的函数4种调用方式：

直接调用

方法调用

构造函数调用

间接调用

默认，直接调用，指向全局对象或undefined（严格模式）；

如果挂载到方法上，则指向调用者对象；

如果作为构造函数（使用new），则指向新生成的对象；

如果call / apply / bind，则指向绑定对象；

最后，箭头函数，就在创建的环境中确定；
