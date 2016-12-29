var formula = document.getElementById("formula");
var result = document.getElementById("result");
var formulaValue;
function onclicknum(nums){
  formula.value = formula.value + nums;
}
function onclickclear(){
  formula.value = "";
  result.value = "";
}
function onclickresult(){
  var str = formula.value.replace(/÷/,"/").replace(/×/,"*");
  result.value = eval(str);
  if(eval(str).toString() === "Infinity"){
    result.value = "ERROR";
  }
}
