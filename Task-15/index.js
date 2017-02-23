$(document).ready(function(){
  // 获取模板中定义的HTML结构
	var source1 = $("#filesname-template").html();
	// 编译HTML生成对应的JS模板
	var filesNameTemplate = Handlebars.compile(source1);
  var readmeBox = $("#readme-box");
  var dropDownList = $("#selection");
  var files = $("#files");
  var fileLink = $("#file-link");
  var codeBox = $("#code-box");
  var code = $("#code");
  var Task = dropDownList.val();
  window.location.hash = "#" + Task;
  window.onhashchange = function(){
    var hash = window.location.hash;
    var selectedOption = hash.substr(1);
    getTask(selectedOption);
    dropDownList.val(selectedOption);
  };
  dropDownList.change(function(){
    files.html("");
    code.removeClass("javascript css");
    var selectedOption = dropDownList.val();
    getTask(selectedOption);
    var hash = "#" + selectedOption;
    window.location.hash = hash;
  });
  function getTask(selectedTask){
    $.getJSON("https://api.github.com/repos/lijunle/VickyRoss-Homework/contents/" + selectedTask)
    .done(function(result){
      var content = result;
      for(var i = 1; i < content.length; i++){
        if((content[i].name.indexOf("index") >= 0 || content[i].name.indexOf(".md") >= 0) && content[i].name.indexOf("README.md") < 0){
          var firstCodeName = content[i].name;
          break;
        }
      }
      if(content.length === 1){
        code.html("");
      }
      getReadMe(selectedTask);
      getFileName(content);
      getFirstCode(selectedTask, firstCodeName);
    });
  }
  function getReadMe(selectedTask){
    $.getJSON("https://api.github.com/repos/lijunle/VickyRoss-Homework/contents/" + selectedTask + "/README.md")
    .done(function(result){
      var markdown = b64DecodeUnicode(result.content);
      var html = marked(markdown);
      readmeBox.html(html);
    });
  }
  function getFileName(result){
    var content = result;
    Handlebars.registerHelper('isfile',function(contentName, options){
        if((contentName.indexOf(".css") >= 0 || contentName.indexOf(".html") >= 0 || contentName.indexOf(".js") >= 0 || contentName.indexOf(".php") >= 0 || contentName.indexOf(".md") >= 0) && contentName.indexOf("README.md") < 0) {
          return options.fn(this);
        }else{
          //...
        }  
      });
    // 使用JS模板处理需要显示的JSON数据, 生成对应的HTML内容
			var html = filesNameTemplate(content);
      files.html(html);
  }
  function getFirstCode(task, firstCodeName){
    $.getJSON("https://api.github.com/repos/lijunle/VickyRoss-Homework/contents/" + task + "/" + firstCodeName)
    .done(function(result){
      var decode = b64DecodeUnicode(result.content);
      if(task === "Task-06"){
        //console.log("hi");
        var html = marked(decode);
        code.html(html);
      }else{
        code.text(decode);
        code.each(function(i, block) {
         hljs.highlightBlock(block);
      });
      }
    });
  }
  $(document).on('click','a',function(event){
    //console.log("hi");
    var target = event.target;
    var selectedOption = dropDownList.val();
    var fileName = $(target).html();
    $.getJSON("https://api.github.com/repos/lijunle/VickyRoss-Homework/contents/" + selectedOption + "/" + fileName)
    .done(function(result){
      var content = result.content;
      var decode = b64DecodeUnicode(result.content);
      if(selectedOption === "Task-06"){
        var html = marked(decode);
        code.html(html);
      }else{
        if(fileName.indexOf(".js") >= 0){
          code.addClass("javascript");
          code.removeClass("xml css");
        }else if(fileName.indexOf(".css") >= 0){
          code.addClass("css");
          code.removeClass("xml javascript");
        }else if(fileName.indexOf(".html") >= 0 || fileName.indexOf(".php") >= 0){
          code.addClass("xml");
          code.removeClass("css javascript");
        }
        code.text(decode);
        code.each(function(i, block) {
          hljs.highlightBlock(block);
        });
      }
    });
  });
});

function b64DecodeUnicode(str) { return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join('')); }
