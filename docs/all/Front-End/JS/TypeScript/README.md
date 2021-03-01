# TypeScript

[https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

作为JS使用者，基本上看这个就够了

* interface 接口

You can explicitly describe this object’s shape using an interface declaration:

```
interface User {
    name: string; 
    id: number;
}
```

用接口来定义Type // 离谱

* generics 范型

Generics provide variables to types. 范型能将变量用在类型上，所谓“类型变量”

Array<string>;

Array<number>;

* Composing Type 组合类型
