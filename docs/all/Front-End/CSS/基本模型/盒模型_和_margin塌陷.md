# CSS-盒模型 和 margin塌陷

* 什么是盒模型

[https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

HTML中的元素可以看成是矩形的盒子，浏览器决定这些盒子的大小位置属性。根据这个模型来进行布局。

一般而言，从内到外的顺序是

content 内容

padding 内边距（内衬的意思）

border 边框

margin 外边距

元素的**width和height指content的宽高**。// 除了IE反人类

* margin合并/重合/塌陷/折叠

[https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

垂直方向上两个margin没有阻碍地相遇

就会发生两个margin合并的情况。合并取最大值。

发生的情况 及解决方法：

兄弟元素——BFC

父子元素——可用clear:

空元素自身的上下margin ——  非空
