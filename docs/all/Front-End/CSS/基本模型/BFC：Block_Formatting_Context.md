# CSS-BFC：Block Formatting Context

块格式化上下文。

是CSS对盒模型进行渲染过程中的一个模式。其是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域

* 作用

    防止margin-collapse：

外边界塌陷只会发生在处于同一BFC的元素之间。因此利用BFC可以防止外边界塌陷。

    控制浮动：

浮动的作用效果只会作用在同一BFC内，清除浮动也只会清除同一BFC前面的元素的浮动。

同时，还可以防止文字环绕。

    多栏布局：

配合浮动实现多栏布局，可以防止浮动的一些问题。

* 如何触发

根元素（或使用display: flow-root）

float的值不为none

overflow的值不为visible（可改为hidden

display的值为inline-block、table-cell、table-caption

position的值为absolute、fixed

* 特性

内部浮动元素也会撑起高度

不会外边界塌陷

一个独立的容器，内部元素不会影响外界
