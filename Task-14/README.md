# 协议（protocol）

## 网络协议

网络协议是一种语言，是一种计算机之间用来沟通的语言。例子，平时我们都写 `div`，`ul`，`li`，浏览器怎么知道这些字母和单词表示什么意思，于是就有了 HTML 标准。（HTML其实是标准，不是协议。因为 HTML 是人类和机器沟通，不是机器和机器沟通。）我们通过 `ul` 标签来告诉浏览器，这是一个列表，通过 `p` 来告诉浏览器，这是一个段落。

而网络是一个很复杂的东西，可以有很多种分类，有线网络，无线网络，可以看网页，可以聊天，可以看视频。这种种的背后，都必须有标准去规范各种情况。这就是各种各样的“网络协议”。我们不需要学习所有的网络协议，但是有一种必须学习，那就是 HTTP 协议。如果有兴趣，你可以了解下 TCP 和 IP 协议。这些协议之间关系会在后面讲到。

我们每天都使用 HTTP 协议，输入网址的时候都，每个网址都以 `http://` 开头，表示浏览器和服务器沟通的时候，使用 HTTP 协议/语言去沟通。做一个类比，我给你写每个句子之前都可以写上 `English://` ，用来表示我们用英文来沟通。浏览器这里的 `http://` 也是同样道理。我们在学习 English 的时候，老师会教英语句子会拆解成“主-谓-宾”固定结构。而 HTTP 这种计算机语言也是一样，浏览器使用这种语言的时候，都有固定的结构，包含几个固定的部分。

当然，计算机不会创造这些结构，这些结构是人为制定的。那些规定这些结构的文档，就是协议。在协议被制定之后，一些程序员写出遵循协议的**浏览器**，另外一些程序员也写出遵循协议的**服务器**。他们在写代码的时候不需要知道对方的存在。只要他们都遵循了协议，那他们就可以沟通——浏览器发送请求，服务器返回结果，浏览器正确显示。所以，学习这些协议可以更好地理解浏览器和服务器是怎么沟通的，如果出错了，可以知道是哪一个步骤的沟通出错了。

### 知识点

- 网络协议
- HTTP 协议

### 参考资料

- https://zh.wikipedia.org/wiki/%E7%BD%91%E7%BB%9C%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE

## HTTP 协议

如上面说得，前端工程师每天都和 HTTP 协议打交道。所以我们应该熟悉 HTTP 协议，知道这个协议规定的语言结构。在浏览器的网络请求中，如何查看这些结构。学习使用工具（Postman）发送网络请求。

### 知识点

- HTTP 协议结构
- Content-Type

### 参考资料

- http://www.jianshu.com/p/abaf583f1183
- http://homeway.me/2015/07/19/understand-http-about-content-type/

## HTTP 和 HTML

我们还没有说明 HTTP 和 HTML 是什么关系。答案是，它们是层次关系。HTML 使用 HTTP 协议进行沟通。类比就是，在英语课上，老师和学生在交流煮菜的心得。那 HTTP 就是英语这种语言，煮菜的心得就是 HTML 这些字符串。可以想象，除了 HTML，HTTP 还可以传输很多其他的东西，例如 CSS，JavaScript，图片，下载的文件等等。HTTP 协议规定使用 `Content-Type` 这个字段来表示它现在传输的是什么格式的东西。

如果把这个关系想象成一层一层的，那就是 HTML 的层次在 HTTP 的层次之上。意思就是，HTML 使用 HTTP 进行传输。而 HTTP 协议是一个语言，就像英语是一种语言。语言需要传到另外一个人的耳朵里面需要其他的技术，例如声波。于是我们说，声波承载这英语，传到另外一个人的耳朵里面。对应的，HTTP 协议类比英语，那 TCP 协议和 IP 协议就是类比声波。使用分层表示，就是 HTTP 协议下面一层是 TCP 协议，TCP 协议下面一层是 IP 协议。

### 知识点

- 网络协议层次结构（网络协议栈）

### 参考资料

- http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html
- http://www.ruanyifeng.com/blog/2012/06/internet_protocol_suite_part_ii.html

## RESTful API

REST (Representational State Transfer) 是一种**想法**，使用 HTTP 协议去**沟通**网络上的东西。符合这种想法的 API，叫做 RESTful API。例如，GitHub API 就是一些符合 REST 想法的 API。

### 知识点

- RESTful API
- GitHub API

### 参考资料

- https://zh.wikipedia.org/wiki/REST
- http://www.cnblogs.com/loveis715/p/4669091.html
- https://developer.github.com/v3/#overview
