# 仿照 [Koa 官网](http://koajs.com/)

- 代码网址：http://s.codepen.io/VickyRoss/pen/vXwJwE
- Demo 网址：http://s.codepen.io/VickyRoss/debug/vXwJwE

## 要求一

实现除右上角菜单外的其他页面样式，要求通过 IE，Chrome 和 Firefox 测试。

### 知识点

- HTML语义化
- 行内元素（inline element），行块元素（block element）
- 盒子模型（boxing model）

### 参考知识

- http://www.cnblogs.com/freeyiyi1993/p/3615179.html

### 完成情况

:eyes: 代码审查中：https://github.com/lijunle/VickyRoss-Homework/pull/1

## 要求二

使用绝对定位实现右上角的菜单按钮。只需要实现菜单按钮，不需要实现按下菜单按钮弹出功能。菜单按钮的图标可以用文字代替。

先尝试实现：菜单按钮位于**页面**右上角，滚动屏幕**不跟随**屏幕滚动。然后实现：菜单按钮位于**窗口**右上角，**跟随**屏幕滚动（Koa官网是这种风格的）。

*提示：*定位属性（position）比浮动属性（float）有用，并且更加常用。应该多加理解和实践。

### 知识点

- 流式布局
- position 属性

### 参考资料

- http://zh.learnlayout.com/position.html （这个网站不错，很多CSS的难点都讲到了。）
- http://fangjian0423.github.io/2015/03/01/css_position/

### 完成情况

:eyes: 代码审查中：https://github.com/lijunle/VickyRoss-Homework/pull/1

## 要求三

使用伪类选择器实现：当鼠标悬浮菜单按钮的时候，菜单弹出来。菜单内容可以先随便填一段话。菜单按钮和菜单需要实现右边对齐。背景色，边框都要求和 Koa 官网一样。

*提示：*需要多次使用绝对定位使元素位置放在合适位置。善于使用`<div>`去创造绝对定位的条件。

### 知识点

- 伪类选择器，兄弟选择器（sibling selector）
- 绝对定位

### 参考资料

- http://www.cnblogs.com/xiaohuochai/p/5518943.html
- http://www.w3school.com.cn/css/css_selector_adjacent_sibling.asp
- https://css-tricks.com/child-and-sibling-selectors/ （这篇虽然是英文，但是里面的图直观表达兄弟选择器）
- http://www.runoob.com/css/css-dropdowns.html

## 要求四

完善菜单功能。要求 100% 仿制 Koa 官网的菜单样式和功能。要求使用最少的 [Magic Number](https://zh.wikipedia.org/wiki/%E9%AD%94%E8%A1%93%E6%95%B8%E5%AD%97_(%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88))。除了必要的 Magic Number，其余均使用各种布局系统。

*提示：*使用浮动属性（float）使菜单按钮和菜单本身处于合适的位置。

### 知识点

- 浮动属性
- 锚点（anchor）

### 参考资料

- http://www.cnblogs.com/iyangyuan/archive/2013/03/27/2983813.html （这文章讲解float非常详细，需要细读）
- http://www.w3school.com.cn/css/css_positioning_floating.asp
- https://segmentfault.com/a/1190000004237437 （理解clear最优实现的原理）
- http://www.zhangxinxu.com/wordpress/2013/08/url-anchor-html-%E9%94%9A%E7%82%B9%E5%AE%9A%E4%BD%8D%E6%9C%BA%E5%88%B6-%E5%BA%94%E7%94%A8-%E9%97%AE%E9%A2%98/ （这篇文章废话太多，看完第一和第二点就可以了）

## 要求五

[响应式布局](https://www.zhihu.com/question/20976405)。实现浏览器宽度从大拉到小，行为都和 Koa 官网一样。特别注意 Koa 那个大标题在不断拉小的过程中的变化。

另外，响应式布局有很多现成的框架，例如最出名的 Bootstrap，但是初学者应该理解一些基础知识。响应式布局是移动互联网的基础基石之一，它在笔试面试实践中都非常重要。

### 知识点

- 相应式布局
- 流式布局（fluid layout）
- 媒体查询（media query）

### 参考资料

- http://www.w3cplus.com/css/advanced-html-css-lesson4-responsive-web-design.html （讲得非常详细，Koa 并没有使用流式布局，不过可以了解）
