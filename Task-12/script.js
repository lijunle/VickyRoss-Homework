$(document).ready(function(){
	// 获取模板中定义的HTML结构
	var source = $("#tutorial-template").html();
	// 编译HTML生成对应的JS模板
	var template = Handlebars.compile(source);
	var onlyBtn = $("#only-btn");
	onlyBtn.click(getJson);
	/**getJson文件**/
	function getJson(){
		onlyBtn.attr("disabled","true");
		$.getJSON("task-12.json")
		.then(function(result){
			var context = result;
			// 使用JS模板处理需要显示的JSON数据, 生成对应的HTML内容
			var html = template(context);
			$("#text").html(html);
		})
		.then(function(){
			var def = $.Deferred();
			setTimeout(function(){ def.resolve(); },2000);
			return def.promise();
		})
		.then(function(){
			onlyBtn.removeAttr("disabled");
		})
	}
	
});
