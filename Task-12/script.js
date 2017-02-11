$(document).ready(function(){
	// 获取模板中定义的HTML结构
	var source = $("#tutorial-template").html();
	// 编译HTML生成对应的JS模板
	var template = Handlebars.compile(source);
	var onlyBtn = $("#only-btn");
	/**getJson文件**/
	function getJson(){
		onlyBtn.attr("disabled","true");
		var def = $.Deferred();
		$.getJSON("task-12.json")
		.then(function(result){
			var context = result;
			// 使用JS模板处理需要显示的JSON数据, 生成对应的HTML内容
			var html = template(context);
			$("#text").html(html);
			def.resolve();
		})
		return def.promise();
	}
	function afterTwoSecond(){
		var def = $.Deferred();
		setTimeout(function(){ def.resolve(); },2000);
		return def.promise();
	}
	function enableButton(){
		onlyBtn.removeAttr("disabled");
	}
	onlyBtn.click(function(){
		getJson()
		.then(afterTwoSecond)
		.then(enableButton)
	});
		
	
});
