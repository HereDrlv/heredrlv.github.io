# JS-JS中的传值和传引用

```javascript
function addTen(num) {

num += 10;

return num;

}


var count = 20;

var result = addTen(count); //按值传递 num = count

alert(count); // 20, 没变化

alert(result); // 30

function setName(obj) {

obj.name = "Nicholas";

}

var person = new Object();

setName(person); // obj = person7 alert(person.name);
```

---

[https://stackoverflow.com/questions/7744611/pass-variables-by-reference-in-javascript](https://stackoverflow.com/questions/7744611/pass-variables-by-reference-in-javascript)

```javascript
function alterObject(obj) {

obj.foo = "goodbye";}

var myObj = { foo: "hello world" };

alterObject(myObj);

alert(myObj.foo); // "goodbye" instead of "hello world"
```

**There is no "pass by reference in JavaScript"，JS没有传引用**

只有像高贵的C语言，显式地写指针，才有真正的传引用。

其实也不需要纠结这个，我们实际写代码的时候，真正最关心的问题是**“什么时候我对参数的修改会导致函数外的修改映射，什么时候不会”**

那么什么时候会改呢：

1 一般变量（布尔、Null、Undefined、Number、BigInt、String、Symbol），值不带地址的那种，改不了。

2 Object，能改。

---

另一篇supporting passage

[http://whatsthepointy.blogspot.com/2013/11/javascript-does-not-have-pass-by.html](http://whatsthepointy.blogspot.com/2013/11/javascript-does-not-have-pass-by.html)

// 这就是为什么我喜欢函数式。。。这些问题都不用考虑。
