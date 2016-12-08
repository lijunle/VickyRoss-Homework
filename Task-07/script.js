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
function changeColor(x){
  var a = document.getElementById(x).value;
  var b = true;
  for(var i=0;i<a.length;i++){
    if(a[i]!='#'&&
       a[i]!='1'&&a[i]!='2'&&a[i]!='3'&&a[i]!='4'&&a[i]!='5'&&
       a[i]!='6'&&a[i]!='7'&&a[i]!='8'&&a[i]!='9'&&a[i]!='0'&&
       a[i]!='a'&&a[i]!='b'&&a[i]!='c'&&a[i]!='d'&&a[i]!='e'&&
       a[i]!='f'&&a[i]!='A'&&a[i]!='B'&&a[i]!='C'&&a[i]!='D'&&
       a[i]!='E'&&a[i]!='F'){
      b=false;
      break;
    }
  }
  if(b == true){
    if(a.length==7 && a[0]=="#"){
      document.body.style.background= a ;
      document.getElementById(x).style.border="#000";
      document.getElementById(x).style.background="#fff";
    }
    else if(a.length==6 && a[0]!="#"){
      document.body.style.background="#" + a ;
      document.getElementById(x).style.border="#000";
      document.getElementById(x).style.background="#fff";
    }
    else{
      document.getElementById(x).style.border="red";
      document.getElementById(x).style.background="red";
  }
  }
  else{
    document.getElementById(x).style.border="red";
    document.getElementById(x).style.background="red";
  }
}
