/****要求一*****/
function myfunction1(){
  document.getElementById("mybtn1").innerHTML = "已点击";
}

/****要求二*****/
function myfunction2(){ 
  document.body.style.background = "yellow";
}

/****要求三*****/
function generateRandomColor(){
  var rgb = [];
  var x = Math.round(Math.random()*255);
  var y = Math.round(Math.random()*255);
  var z = Math.round(Math.random()*255);
    rgb[0] = x;
    rgb[1] = y;
    rgb[2] = z;
    return rgb;
  
}
function myfunction3(){ 
  var arr = generateRandomColor();
  document.body.style.background = "rgb(" + arr[0] + "," + arr[1] + "," + arr[2] + ")";
}

/****要求四*****/
function mOver(obj){
  var i = setInterval(myfuntion3,1000);
  obj.dataset.setInterval=i;
}
function mOut(obj){
  clearInterval(obj.dataset.setInterval);
  document.body.style.background = "#fff";
}

/****要求五//要求六//要求七*****/
/*判断是否16进制数的颜色值*/
function isColorHexCode(a){
  if((a[0] === "#" && (a.length === 7||a.length === 4))||
     (a[0] != "#" && (a.length === 6||a.length === 3))){
    for(var i=0;i<a.length;i++){
      if(a[i]!='1'&&a[i]!='2'&&a[i]!='3'&&a[i]!='4'&&a[i]!='5'&&
         a[i]!='6'&&a[i]!='7'&&a[i]!='8'&&a[i]!='9'&&a[i]!='0'&&
         a[i]!='a'&&a[i]!='b'&&a[i]!='c'&&a[i]!='d'&&a[i]!='e'&&
         a[i]!='f'&&a[i]!='A'&&a[i]!='B'&&a[i]!='C'&&a[i]!='D'&&
         a[i]!='E'&&a[i]!='F'&&a[i]!='#'){
        return false;
      }
    }
    return true;
  }
  else{
    return false;
  }
}
/***改变背景颜色****/
function changeColor(x){
  var element = document.getElementById(x);
  var colorInput = element.value;
  var colorCode = isColorHexCode(colorInput);
  if(colorCode){
    if(colorInput.length === 7||colorInput.length === 4){
      document.body.style.background = colorInput;
      element.classList.remove("wronginput");
    }
    else if(colorInput.length === 6||colorInput.length === 3){
      document.body.style.background = "#" + colorInput;
      element.classList.remove("wronginput");
    }
    else{
      element.classList.add("wronginput");
      document.body.style.background = "#fff";
    }
  }
  else{
    if(colorInput.length === 0){
      document.body.style.background = "#fff";
      element.classList.remove("wronginput");
    }
    else{
      element.classList.add("wronginput");
      document.body.style.background = "#fff";
    }  
  }
}

/****要求八*****/
 function myfunction8(obj8){
   setTimeout(function(){changeColor(obj8)}, 3000); 
 }
 
