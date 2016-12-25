# JavaScript Template

## 要求一

在 JavaScript 中，我们经常需要创建一个 HTML DOM，然后插入到某个位置。我们尝试过直接的 HTML 字符串，也尝试过 jQuery 的 `.append`，`.insert` 方法。但是这些方法有个缺点，就是阅读起来很费劲，没有看 HTML 那样子直观。

为了解决这个问题，我们可以使用 JavaScript 模板这种技术。而 Handlebar 这个库，则是众多 JavaScript 模板库中被广泛使用的一个。

### 知识点

- JavaScript Template
- Handlebar

### 参考资料

- http://www.gbin1.com/technology/javascript/20121227-javascript-templates-engine-handlebars/index.html
- http://www.gbin1.com/gb/tutorials/7/86.htm

## 要求二

豆瓣音乐搜器：页面上方有一个输入框和提交按钮。当用户输入字符串并点击提交按钮之后，向豆瓣 API 发送 AJAX 请求搜索音乐结果。把豆瓣 API 返回的结果展示出来。

结果展示的样子可以参考豆瓣音乐搜索的页面，或者你自己定制加上你想展示的内容。

![Douban Music Search](./douban-music-search.png)

*注意:* 豆瓣基于安全理由，未注册的 API 使用者限制每小时使用 150 次。一般开发和测试是够用的，如果不够用，提示错误了，再去注册一下。

另外，使用豆瓣 API 需要使用 URL 参数（URL query string）。这是一个很简单的知识点，但你需要学习一下。

### 知识点

- URL query string
- AJAX
- JavaScript Template

### 参考资料

- http://blog.csdn.net/hherima/article/details/46879775
- https://developers.douban.com/wiki/?title=music_v2#get_music_search
