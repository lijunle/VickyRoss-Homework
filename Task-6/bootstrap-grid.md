# 栅格系统

Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。
它包含了易于使用的[预定义类](http://v3.bootcss.com/css/#grid-example-basic)，
还有强大的[mixin 用于生成更具语义的布局](http://v3.bootcss.com/css/#grid-less)。

## 简介

栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。
下面就介绍一下 Bootstrap 栅格系统的工作原理：

*   “行（row）”必须包含在 `.container` （固定宽度）或 `.container-fluid` （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
*   通过“行（row）”在水平方向创建一组“列（column）”。
*   你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
*   类似 `.row` 和 `.col-xs-4` 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
*   通过为“列（column）”设置 `padding` 属性，从而创建列与列之间的间隔（gutter）。通过为 `.row` 元素设置负值 `margin` 从而抵消掉为 `.container` 元素设置的 `padding`，也就间接为“行（row）”所包含的“列（column）”抵消掉了`padding`。
*   The negative margin is why the examples below are outdented. It's so that content within grid columns is lined up with non-grid content.
*   Grid columns are created by specifying the number of twelve available columns you wish to span.For example, three equal columns would use three `.col-xs-4`.
*   如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
*   rid classes apply to devices with screen widths greater than or equal to the breakpoint sizes, and override grid classes targeted at smaller devices. Therefore, applying any `.col-md-` class to an element will not only affect its styling on medium devices but also on large devices if a `.col-lg-` class is not present.

通过研究后面的实例，可以将这些原理应用到你的代码中。

## 媒体查询

在栅格系统中，我们在 Less 文件中使用以下媒体查询（media query）来创建关键的分界点阈值。

    /* 超小屏幕（手机，小于 768px） */
    /* 没有任何媒体查询相关的代码，因为这在 Bootstrap 中是默认的（还记得 Bootstrap 是移动设备优先的吗？） */

    /* 小屏幕（平板，大于等于 768px） */
    @media (min-width: @screen-sm-min) { ... }

    /* 中等屏幕（桌面显示器，大于等于 992px） */
    @media (min-width: @screen-md-min) { ... }

    /* 大屏幕（大桌面显示器，大于等于 1200px） */
    @media (min-width: @screen-lg-min) { ... }

我们偶尔也会在媒体查询代码中包含 `max-width` 从而将 CSS 的影响限制在更小范围的屏幕大小之内。

    @media (max-width: @screen-xs-max) { ... }
    @media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }
    @media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }
    @media (min-width: @screen-lg-min) { ... }

## 栅格参数

通过下表可以详细查看 Bootstrap 的栅格系统是如何在多种屏幕设备上工作的。

|           | 超小屏幕 手机 (<768px) | 小屏幕 平板 (≥768px) | 中等屏幕 桌面显示器 (≥992px) | 大屏幕 大桌面显示器 (≥1200px)|
|-----------| -------------------- | ------------------ | ---------------------------| ------------------------- |
| 栅格系统行为 | 总是水平排列 | 开始是堆叠在一起的，当大于这些阈值时将变为水平排列C | 
| `.container` 最大宽度 | None （自动） | 750px | 970px | 1170px |
|类前缀 | `.col-xs-` | `.col-sm-` | `.col-md-` | `.col-lg-` |
| 列（column）数 | 12 |
| 最大列（column）宽 | 自动 | ~62px | ~81px | ~97px |
| 槽（gutter）宽 | 30px （每列左右均有 15px）|
| 可嵌套 | 是 |
| 偏移（Offsets） | 是 |
| 列排序 | 是 |



