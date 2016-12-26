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
function isHexString(str, start){
  for(var i = start ; i < str.length ; i++){
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
    return isHexString(value, 1);
  }else if(value.length === 6 || value.length === 3){
    return isHexString(value, 0);
  }
  else{
    return false;
  }
}

function dispalyWindowSize(){
    var outputWindowSize = $("#output-windowsize");
    var txt = "width*height = " + $(window).width() + "*" + $(window).height();
    outputWindowSize.val(txt);
  }

$(document).ready(function(){
  /* 要求一（方法一）*/
   /*setInterval(function(){
     $("#mybtn1").toggle();
   },3000);*/
  
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
  var requirement5 = $("#requirement5");
  mybtn5.click(function(){
    var colorValue = colorInput5.val();
    var isColorCode = isHexColorCode(colorValue);
    if(isColorCode){
      var color = (colorValue[0] === '#') ? colorValue : '#' + colorValue;
      var addDiv = $("<div class='div-format'></div>");
      requirement5.append(addDiv);
      addDiv.css("background-color",color);
      elementDiv5.removeClass("has-error");
    }else if(colorValue.length === 0){
        elementDiv5.removeClass("has-error");
      }
    else{
      elementDiv5.addClass("has-error");
    }
    addDiv.click(function(){
      $(this).remove();
    });
  });
  
  /*要求七*/
  var mybtn7 = $("#mybtn7");
  var colorInput7 = $("#color-input7");
  var elementDiv7 = colorInput7.parent();
  var requirement7 = $("#requirement7");
  mybtn7.click(function(){
    var colorValue = colorInput7.val();
    var isColorCode = isHexColorCode(colorValue);
    if(isColorCode){
      var color = (colorValue[0] === '#') ? colorValue : '#' + colorValue;
      var addSpace = $("<div class='space-format'></div>");
      addSpace.width(180);
      requirement7.append(addSpace);
      var addDiv = $("<div class='div-format inline-div-format'></div>");
      addSpace.append(addDiv);
      addDiv.css("background-color",color);
      var delBtn = $("<button class='btn btn-default mybtn space-btn'>删除</button>");
      addSpace.append(delBtn);
      elementDiv7.removeClass("has-error");
    }else if(colorValue.length === 0){
      elementDiv7.removeClass("has-error");
      }
    else{
      elementDiv7.addClass("has-error");
    }
    delBtn.click(function(){
      addSpace.remove();
    });
  });
  
  /*要求八*/
  var mybtn8 = $("#mybtn8");
  var colorInput8 = $("#color-input8");
  var elementDiv8 = colorInput8.parent();
  var requirement8 = $("#requirement8");
  mybtn8.click(function(){
    var colorValue = colorInput8.val();
    var isColorCode = isHexColorCode(colorValue);
    if(isColorCode){
      var color = (colorValue[0] ==='#') ? colorValue : ('#' + colorValue);
      var addSpace = $("<div class='space-format'></div>");
      requirement8.append(addSpace);
      var addDiv = $("<div  class='div-format inline-div-format'></div>");
      addSpace.append(addDiv); 
      addDiv.css("background-color",color);
      var delBtn = $("<button class='btn btn-default space-btn'>删除</button>");
      addSpace.append(delBtn);
      delBtn.hide();
      elementDiv8.removeClass("has-error");
    }else if(colorValue.length === 0){
      elementDiv8.removeClass("has-error");
    }
    else{
      elementDiv8.addClass("has-error");
    }
    addSpace.hover(
      function(){
        addSpace.width(100+$(".space-btn").width());
        delBtn.show();
        delBtn.click(function(){
          addSpace.remove();
        });
      },
      function(){
        addSpace.width(100);
        delBtn.hide();
      }
    );
  });
  
  /*要求九*/
  
  dispalyWindowSize();
  $(window).resize(function(){
    dispalyWindowSize();
  });
});
