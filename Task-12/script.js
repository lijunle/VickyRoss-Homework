$(document).ready(function(){
	$("#only-btn").click(getJson);
	
	/**getJson文件**/
	function getJson(){
		$.getJSON("http://vicky-php.azurewebsites.net/task-12.json")
		.done(function(result){
			for(var i = 0; i < result.Task.length; i++){
				$.each(result.Task[i], function(key, value){
					$("#text").append("<li>" + key + "<ul>" + "<li>" + value + "</li>" + "</ul>" + "</li>");
			    });
			}
		});
	}
	
});
