# JS-typeof

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

总的来说，7种基本类型各自对应，除了null由于历史原因，是"object"

| Type                                                         | Result                                                       |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [Undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined) | `"undefined"`                                                |
| [Null](https://developer.mozilla.org/en-US/docs/Glossary/Null) | `"object"` (see [below](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)) |
| [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) | `"boolean"`                                                  |
| [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number) | `"number"`                                                   |
| [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt) (new in ECMAScript 2020) | `"bigint"`                                                   |
| [String](https://developer.mozilla.org/en-US/docs/Glossary/String) | `"string"`                                                   |
| [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) (new in ECMAScript 2015) | `"symbol"`                                                   |
| [Function](https://developer.mozilla.org/en-US/docs/Glossary/Function) object (implements [[Call]] in ECMA-262 terms) | `"function"`                                                 |
| Any other object                                             | `"object"`                                                   |

此外，所有通过构造函数XXXX() 或者 new XXXX() 创建的东西，全都是object。

// btw，new只是ES6的一个语法糖。使用 new ConstructorFunc() 与 使用 ConstructorFunc() 没有任何区别。
