/****要求一*****/
function myfuntion1(){ document.getElementById("mybtn1").innerHTML="已点击";
}

/****要求二*****/
function myfuntion2(){ 
  document.body.style.background="yellow";
}

/****要求三*****/
function myfuntion3(){ 
  var x = Math.round(Math.random()*100);
  var y = Math.round(Math.random()*100);
  var z = Math.round(Math.random()*100);
  if(x<=255&&y<=255&&z<=255){
    document.body.style.background="rgb("+x+","+y+","+z+")";
  }
  else{
    myfuntion3();
  }
}

/****要求四*****/
var i;
function mOver(obj){
  i=setInterval(myfuntion3,1000);
}
function mOut(obj){
  clearInterval(i);
}

/****要求五//要求六//要求七*****/
/*判断是否16进制数*/
function isHex(a){
  if(a[0] == "#" && (a.length==7||a.length==4)){
    for(var i=1;i<a.length;i++){
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
  else if(a[0] != "#" && (a.length == 6||a.length == 3)){
    for(var i=0;i<a.length;i++){
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
  else{
    return false;
  }
}
/***改变背景颜色****/
function changeColor(x){
  var element = document.getElementById(x);
  var a = element.value;
  var b = isHex(a);
  if(b == true){
    if(a.length==7||a.length==4){
      document.body.style.background= a ;
      element.classList.remove("wronginput");
    }
    else if(a.length==6||a.length==3){
      document.body.style.background="#" + a ;
      element.classList.remove("wronginput");
    }
    else{
      element.classList.add("wronginput");
      document.body.style.background="#fff";
    }
  }
  else{
    if(a.length==0){
      document.body.style.background="#fff";
      element.classList.remove("wronginput");
    }
    else{
      element.classList.add("wronginput");
      document.body.style.background="#fff";
    }  
  }
}

/****要求八*****/
 function myfunction8(x){
   setTimeout(function(){changeColor(x)}, 3000); 
 }
 
