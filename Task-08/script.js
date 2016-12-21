/*判断是否16进制数的颜色值
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
}*/
/*判断是否16进制数*/
function isHexCode(a){
  if((a>='0' && a<='9') ||  
     (a>='A' && a<='F') ||
     (a>='a' && a<='f')){
    return true;
  }
  else{
    return false;
  }
}
/*判断是否16进制字符串*/
function isHexString(str, start, end){
  for(var i = start ; i < end ; i++){
    var value = str[i];
    if(!(isHexCode(value))){
      return false;
     }
  }
  return true;
}
/*判断是否十六进制颜色值*/
function isHexColorCode(value){
  if((value.length === 7 || value.length === 4) && value[0] === '#'){
    return isHexString(value, 1, value.length);
  }else if(value.length === 6 || value.length === 3){
    return isHexString(value, 0, value.length);
  }
  else{
    return false;
  }
}

$(document).ready(function(){
  /*要求一（方法一）*/
  // setInterval(function(){
  //   $("#mybtn1").toggle();
  // },3000);
   /*要求一（方法二）*/
  var btn1 = $("#mybtn1");
  setInterval(function(){
    if(btn1.is(":visible")){
      btn1.hide();
    }else{
      btn1.show();
    }
  },3000);
  
  
  /*要求二*/
  var btn2 = $("#mybtn2");
  btn2.click(function(){
    btn2.hide();
    setTimeout(function(){
    btn2.show();
  },3000);
  });
  
  /*要求三*/
  $("#mybtn3").click(function(){
    $("body").css("background-color","yellow");
  });
  
 
  /*要求四*/
  var mybtn4 = $("#mybtn4");
  var colorInput4 = $("#color-input4");
  var body = $("body");
  var elementDiv = colorInput4.parent();
  mybtn4.click(function(){
    var colorValue = colorInput4.val();
    var isColorcode = isHexColorCode(colorValue);
    if(isColorcode){
      var color = (colorValue[0] === '#') ? colorValue : ('#' + colorValue);
        body.css("background-color",color);
        elementDiv.removeClass("has-error");
    }else if(colorValue.length === 0){
        body.css("background-color","#fff"); 
        elementDiv.removeClass("has-error");
      }
    else{
        elementDiv.addClass("has-error");
        body.css("background-color","#fff"); 
      }
  });
  
  /*要求五*/
  var mybtn5  = $("#mybtn5");
  var colorInput5 = $("#color-input5");
  var elementDiv5 = colorInput5.parent();
  mybtn5.click(function(){
    var colorValue = colorInput5.val();
    var isColorCode = isHexColorCode(colorValue);
    if(isColorCode){
      var color = (colorValue[0] === '#') ? colorValue : '#' + colorValue;
      elementDiv5.append("<div class='div-format'></div>");
      var addDiv = elementDiv5.children().last();
      addDiv.css("background-color",color);
      elementDiv5.removeClass("has-error");
    }else if(colorValue.length === 0){
        elementDiv5.removeClass("has-error");
      }
    else{
      elementDiv5.addClass("has-error");
    }
    $("div.div-format").click(function(){
      $(this).remove();
    });
  });
  
  /*要求七*/
  var mybtn7 = $("#mybtn7");
  var colorInput7 = $("#color-input7");
  var elementDiv7 = colorInput7.parent();
  mybtn7.click(function(){
    var colorValue = colorInput7.val();
    var isColorCode = isHexColorCode(colorValue);
    if(isColorCode){
      var color = (colorValue[0] === '#') ? colorValue : '#' + colorValue;
      var addSpace = $("<div class='space-format'></div>");
      elementDiv7.append(addSpace);
      addSpace.append("<div class='div-format inline-div-format'></div>");
      addSpace.children().last().css("background-color",color);
      addSpace.append("<button class='btn btn-default mybtn'>删除</button>");
      elementDiv7.removeClass("has-error");
    }else if(colorValue.length === 0){
      elementDiv7.removeClass("has-error");
      }
    else{
      elementDiv7.addClass("has-error");
    }
    var delBtn = addSpace.children().last();
    delBtn.click(function(){
      addSpace.remove();
    });
  });
  
  /*要求八*/
  var mybtn8 = $("#mybtn8");
  var colorInput8 = $("#color-input8");
  var elementDiv8 = colorInput8.parent();
  mybtn8.click(function(){
    var colorValue = colorInput8.val();
    var isColorCode = isHexColorCode(colorValue);
    if(isColorCode){
      var color = (colorValue[0] ==='#') ? colorValue : ('#' + colorValue);
      var addSpace = $("<div class='space-format'></div>");
      elementDiv8.append(addSpace);
      addSpace.append("<div  class='div-format inline-div-format'></div>"); 
      addSpace.children().last().css("background-color",color);
      addSpace.append("<button class='btn btn-default'>删除</button>");
      addSpace.children().last().hide();
      elementDiv8.removeClass("has-error");
    }else if(colorValue.length === 0){
      elementDiv8.removeClass("has-error");
    }
    else{
      elementDiv8.addClass("has-error");
    }
    addSpace.hover(
      function(){
        $(this).children().last().show();
        $(this).children().last().click(function(){
          addSpace.remove();
        });
      },
      function(){
        $(this).children().last().hide();
      }
    );
  });
  
  /*要求九*/
  var outputWindowSize = $("#output-windowsize");
  setInterval(function(){
    var txt = "width*height = " + $(window).width() + "*" + $(window).height();
    var valueWindowSize = outputWindowSize.val(txt);
  },300);
});
