$(document).ready(function(){
  // 获取模板中定义的HTML结构
	var source1 = $("#filesname-template").html();
	// 编译HTML生成对应的JS模板
	var filesNameTemplate = Handlebars.compile(source1);
  var readmeBox = $("#readme-box");
  var selection = $("#selection");
  var files = $("#files");
  var fileLink = $("#file-link");
  var code = $("#code");
  getReadMe();
  getFilesName();
  getFilesCode();
  selection.change(function(){
    files.html("");
    getReadMe();
    getFilesName();
    getFilesCode();
  });
  function getReadMe(){
    var selected = selection.val();
    $.getJSON("https://api.github.com/repos/lijunle/VickyRoss-Homework/contents/" + selected + "/README.md")
      .done(function(result){
      var markdown = b64DecodeUnicode(result.content);
      var html = marked(markdown);
      readmeBox.html(html);
    });
  }
  function getFilesName(){
    var selected = selection.val();
    $.getJSON("https://api.github.com/repos/lijunle/VickyRoss-Homework/contents/" + selected)
      .done(function(result){
      var content = result;
      Handlebars.registerHelper('isfile',function(content, options){
        if(content.indexOf(".css") >= 0 || content.indexOf(".html") >= 0 || content.indexOf(".js") >= 0 || content.indexOf(".php") >= 0){
          return options.fn(this);
        }else{
          //...
        }  
      });
			// 使用JS模板处理需要显示的JSON数据, 生成对应的HTML内容
			var html = filesNameTemplate(content);
      files.html(html);
    });
  }
  function getFilesCode(){
    var selected = selection.val();
    $.getJSON("https://api.github.com/repos/lijunle/VickyRoss-Homework/contents/" + selected + "/index.html")
    .done(function(result){
      var markdown = b64DecodeUnicode(result.content);
      var html = marked(markdown);
      code.text(html);
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });
    $(document).on('click','a',function(event){
    var target = event.target;
    var fileName = $(target).html();
    console.log(fileName);
    $.getJSON("https://api.github.com/repos/lijunle/VickyRoss-Homework/contents/" + selected + "/" + fileName)
      .done(function(result){
      var markdown = b64DecodeUnicode(result.content);
      var html = marked(markdown);
      if(fileName.indexOf('html') >= 0){
        code.text(html);
      }else{
        code.html(html);
      }
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });
  });
  }
  
});

function b64DecodeUnicode(str) { return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join('')); }
