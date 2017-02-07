$(document).ready(function(){
  $("#only-btn").click(function(){
    $.getJSON("http://vicky-php.azurewebsites.net/task-12.json",function(result){
		for(var i = 0; i < result.Task.length; i++){
			$.each(result.Task[i], function(key, value){
				$("#text").append("<li>" + key + "<ul>" + "<li>" + value + "</li>" + "</ul>" + "</li>");
			  });
		}  
    });
  });
});
