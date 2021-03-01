# inline、block和inline-block

Reference： [正常流 - MDN](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow)，[inline和block](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display-outside) 

>[语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display-outside#语法) `<display-outside>` 的可用值：
>- `block`
>这个值会生成一个块级元素盒子，同时在该元素之前和之后打断（换行）。简单来说就是，这个值会将该元素变成[块级元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)。
> - `inline`
>   这个值会生成一个行内元素盒子，该元素之前和之后不会打断（换行）。如果空间充足，该元素后的元素将会在同一行显示。简单来说就是，这个值会将该元素变成[行内元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements)。

block：break前后的元素，自成一行

inline：和别人在同一行

它们俩是网页元素最最最最基本最基础最默认的两个属性机制（可见正常流布局- [https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow)）

可以理解为所有的元素都最先拥有这两个属性之一。

* inline-block

inline-block直观展示 [http://zh.learnlayout.com/inline-block.html](http://zh.learnlayout.com/inline-block.html)

[inline-block-MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) :

> **inline-block**The element generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would).
>
> It is equivalent to inline flow-root.

这个legacy是什么意思呢？我们看legacy下面的其他属性的例子：

> **inline-flex** The element behaves like an inline element and lays out its content according to the flexbox model.
>
> It is equivalent to inline flex.

----

自己的理解：

inline-block兼具inline和block的特性：它可以和其他inline元素一起排在一行，它像block一样具有宽高margin padding