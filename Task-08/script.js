/*判断是否16进制数的颜色值*/
function isColorHexCode(a){
  var startIndex = -1;
  if((a.length === 7 || a.length === 4) && a[0] === '#'){
    startIndex = 1;
  }else if (a.length === 6 || a.length === 3){
    startIndex = 0;
  }else if (a.length === 0){
    return true;
  }
  if(startIndex !== -1){
    for(var i = startIndex ; i<a.length ; i++){
      if(a[i]!='1'&&a[i]!='2'&&a[i]!='3'&&a[i]!='4'&&a[i]!='5'&&
         a[i]!='6'&&a[i]!='7'&&a[i]!='8'&&a[i]!='9'&&a[i]!='0'&&
         a[i]!='a'&&a[i]!='b'&&a[i]!='c'&&a[i]!='d'&&a[i]!='e'&&
         a[i]!='f'&&a[i]!='A'&&a[i]!='B'&&a[i]!='C'&&a[i]!='D'&&
         a[i]!='E'&&a[i]!='F'){
        return false;
      }
    }
    return true;
  }
  else {
    return false;
  }
}
$(document).ready(function(){
  /*要求一*/
  setInterval(function(){
    $("#mybtn1").toggle();
  },3000);
  
  /*要求二*/
  $("#mybtn2").click(function(){
    $(this).hide();
    setTimeout(function(){
    $("#mybtn2").show();
  },3000);
  });
  
  /*要求三*/
  $("#mybtn3").click(function(){
    $("body").css("background-color","yellow");
  });
  
 
  /*要求四*/
  $("#mybtn4").click(function(){
    var colorValue = $("#color-input4").val();
    var isColorcode = isColorHexCode(colorValue);
    var elementDiv = $("#color-input4").parent();
    if(isColorcode){
      if(colorValue.length === 7||colorValue.length === 4){
        $("body").css("background-color",colorValue);
        elementDiv.removeClass("has-error");
      }else if(colorValue.length === 6||colorValue.length === 3){
        $("body").css("background-color","#"+colorValue);
        elementDiv.removeClass("has-error");
      }else if(colorValue.length === 0){
        $("body").css("background-color","#fff"); 
        elementDiv.removeClass("has-error");
      }
    }
    else{
        elementDiv.addClass("has-error");
        $("body").css("background-color","#fff"); 
      } 
  });
  
  /*要求五*/
  $("#mybtn5").click(function(){
    var colorValue = $("#color-input5").val();
    var isColorCode = isColorHexCode(colorValue);
    var elementDiv = $("#color-input5").parent();
    if(isColorCode){
      if(colorValue.length == 7 || colorValue.length == 4){
       elementDiv.after("<div class=\"div-format\">fasdfsadf</div>");
      }
    }
    else{
      
    }
  });
});
