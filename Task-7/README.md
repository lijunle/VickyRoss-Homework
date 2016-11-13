# Document Object Model (DOM)

终于进入 JavaScript 的学习了，然而标题不是 JavaScript，而是 DOM。DOM 是一道桥梁，把 HTML 页面和 JavaScript 联系在一起。

先学习一下 HTML DOM 的一些理论知识：

- http://www.w3school.com.cn/htmldom/index.asp

对于 JavaScript，我建议先学习基础的那一部分（JS教程）：

- http://www.w3school.com.cn/js/index.asp

## 要求一

在页面中央有一个按钮。按下去之后，按钮的内容从“未点击”变成“已点击”。

### 知识点

- HTML DOM
- HTML 事件
- JavaScript 函数

### 参考资料

- http://www.w3school.com.cn/js/js_htmldom_events.asp

## 要求二

在页面中央有一个按钮。按下去之后，把页面背景从白色变成黄色。

### 知识点

- HTML Style

### 参考资料

- http://www.w3school.com.cn/js/js_htmldom_css.asp
- http://www.w3school.com.cn/jsref/prop_style_background.asp

## 要求三

类似于要求二的按钮，但是每按一下，背景都变为随机的一种颜色。

### 知识点

- JavaScript API

### 参考资料

- http://www.w3school.com.cn/jsref/jsref_random.asp
- http://www.w3school.com.cn/jsref/jsref_obj_math.asp

## 要求四

当鼠标悬浮在页面中央的按钮之时，背景每一秒钟变为随机一种颜色。

### 知识点

- HHTML onmouseover 和 onmouseout 事件
- JavaScript 计时器

### 参考资料

- http://www.w3school.com.cn/js/js_htmldom_events.asp
- http://www.imooc.com/code/1022

## 要求五

在页面中央，有一个输入框和一个按钮。输入框的初始值位为`#FFFFFF`，即白色。当用户输入一个6位的16进制数字，按下按钮之后就把页面背景变为对应的颜色。

## 要求六

在要求五的页面中，按下按钮之后，验证用户输入的数字是否为6为16进制数字。如果是，改变背景色。如果不是，把输入框的边框和背景颜色改为红色。

## 要求七

在页面中央，只有一个输入框。当用户输入完6位数字之后，马上验证输入的颜色，并作出跟要求六类似的改变。

## 要求八

页面功能与要求七类似，但要求在最后一次输入完6位数字的3秒之后，才验证并改变颜色。
