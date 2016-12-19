# jQuery

阅读 jQuery 的教程。你可以有2个选择：

- 第一个是学习 w3school 上面的，不过 w3school 的 jQuery 教程有点老了。http://www.w3school.com.cn/jquery/index.asp
- 第二个选择是学习最新的，直接看 jQuery 的 Learn Center 的文章，虽然是英文，但是用的词汇都比较简单的。http://learn.jquery.com/using-jquery-core/

jQuery API 手册的话，分别有英文原版和中文翻译：

- 英文：https://api.jquery.com
- 中文：http://www.css88.com/jqapi-1.9/

至于 jQuery 的版本，我建议你学习最新的 3.x 版本。但是很多老的项目，都在用最经典的 1.x 版本。他们之间有一些差别，但是最基本的思路都是一样的。

*Note:* w3school 上面 jQuery AJAX 及后面的章节可以先不看，后面会有 Task 专门学习 AJAX。

## 要求一

实现一个页面，中央有一个按钮。每隔3秒隐藏/显示该按钮。即第3秒隐藏，第6秒显示，第9秒隐藏，第12秒显示，如此类推。

### 知识点

- JavaScript 定时执行（setInterval）
- jQuery 选择器
- jQuery 显示/隐藏

### 参考资料

- http://www.w3school.com.cn/jsref/met_win_setinterval.asp
- http://www.w3school.com.cn/jquery/jquery_selectors.asp
- http://www.w3school.com.cn/jquery/jquery_hide_show.asp
- http://learn.jquery.com/using-jquery-core/selecting-elements/

## 要求二

实现一个页面，中央有一个按钮。点一下按钮，立即隐藏改按钮，3秒之后恢复显示。

### 知识点

- jQuery 事件

### 参考资料

- http://www.w3school.com.cn/jquery/jquery_events.asp
- http://learn.jquery.com/events/event-basics/

## 要求三

页面中央有一个按钮，点一下按钮，把页面背景色从白色改为黄色。

对比 Task-7 中要求二的实现，理解 jQuery 和 Vanilla JavaScript （即纯JavaScript，不用任何框架）的实现异同。

### 知识点

- jQuery CSS 操作

### 参考资料

- http://www.w3school.com.cn/jquery/jquery_css.asp
- http://learn.jquery.com/using-jquery-core/css-styling-dimensions/

## 要求四

在页面中央有一个输入框和一个按钮。输入框初始值为`#FFFFFF`，即白色。用户改变颜色代码，按下按钮之后，把页面背景色改为对应的颜色。

对比 Task-7 中的要求五的实现。

### 知识点

- jQuery Input 查询

### 参考资料

- http://www.w3school.com.cn/jquery/jquery_dom_get.asp
- https://api.jquery.com/val/

## 要求五

类似于要求四的按钮，但是按钮按钮之后，不改变页面的背景色，改为在输入框下方加个一个新的100x100的色块。不断点击按钮，就不断在之前色块的下方添加新的色块。

### 知识点

- jQuery 添加 DOM
- DOM 事件流（Event Flow）
- DOM 事件代理

### 参考资料

- http://www.w3school.com.cn/jquery/jquery_dom_add.asp
- http://learn.jquery.com/using-jquery-core/manipulating-elements/#creating-new-elements
- http://coderlt.coding.me/2016/11/22/js-event/
- http://www.css88.com/jqapi-1.9/delegate/

## 要求六

在要求五的基础上，点击色块，则把该色块从色块列表中删除。

### 知识点

- jQuery 删除 DOM

### 参考资料

- http://www.w3school.com.cn/jquery/jquery_dom_remove.asp
- http://learn.jquery.com/using-jquery-core/manipulating-elements/#removing-elements

## 要求七

类似要求六，但是色块并不可以点击。在添加色块的时候，在色块的右边添加一个删除按钮，点击按钮，删除左边的色块。

### 知识点

- jQuery 相对位置查询

### 参考资料

- http://www.w3school.com.cn/jquery/jquery_traversing.asp
- http://learn.jquery.com/using-jquery-core/traversing/

## 要求八

类似要求七，但是删除按钮并不总是显示，只有在鼠标悬浮在色块上的时候，右边的删除按钮才会出现。

### 知识点

- jQuery 事件
- jQuery 遍历

### 参考资料

- http://www.css88.com/jqapi-1.9/hover/
- http://api.jquery.com/hover/

## 要求九

在页面中间有一个输出区域，显示当前页面的大小（例如1280x760）。当页面大小改变的时候，实时更新输出区域为最新的页面大小。

### 知识点

- jQuery 事件
- jQuery 尺寸查询

### 参考资料

- http://www.w3school.com.cn/jquery/jquery_dimensions.asp
- http://learn.jquery.com/using-jquery-core/css-styling-dimensions/#dimensions
