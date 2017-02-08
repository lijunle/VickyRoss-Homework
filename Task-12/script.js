$(document).ready(function(){
	// 获取模板中定义的HTML结构
	var source = $("#tutorial-template").html();
	// 编译HTML生成对应的JS模板
	var template = Handlebars.compile(source);
	
	$("#only-btn").click(getJson);
	/**getJson文件**/
	function getJson(){
		$.getJSON("task-12.json")
		.done(function(result){
			var context = result;
			// 使用JS模板处理需要显示的JSON数据, 生成对应的HTML内容
			var html = template(context);
			$("#text").html(html);
		});
	}
	
});
