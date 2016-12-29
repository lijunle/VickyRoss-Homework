var formula = document.getElementById("formula");
var result = document.getElementById("result");
var formulaValue;
function onclicknum(nums) {
  formula.value = formula.value + nums;
  var formulaValue = formula.value;
  var isformula = isFormula(formulaValue);
  var formulaResult = 0;
  if (isformula) {
    formulaResult = splitCalFormula(formulaValue);
     if(formulaResult === Infinity){
      result.value = "ERROR";
    }else{
      result.value = formulaResult;
    }
  }else{
    result.value = "";
  }
}
function onclickclear() {
  formula.value = "";
  result.value = "";
}
function onclickresult() { 
  var a = parseFloat(result.value);
  if(result.value === "ERROR"){
    
  }else if(result.value === ""){
    
  }
  else{
    formula.value = a.toFixed(5);
    result.value = "";
  }
}

/*判断是否算式*/
function isFormula(str) {
  var operatorCount = 0;
  var strLength = str.length;
  if(str[0] === "+" || str[0] === "-" || str[0] === "×" || str[0] === "÷"){
    return false;
  }else if(str[strLength-1] === "+" || str[strLength-1] === "-" || str[strLength-1] === "×" || str[strLength-1] === "÷"){
    return false;
  }
  for (var i = 0; i < strLength; i++) {
    
    if(str[i] === "+" || str[i] === "-" || str[i] === "×" || str[i] === "÷"){
      operatorCount++;
    }
  }
  if(operatorCount > 1 || operatorCount === 0){
    return false;
  }else if(operatorCount === 1){
    return true;
  }
}

/*分割并计算算式*/
function splitCalFormula(str){
  var arr = [];
  var result = 0;
  if(str.indexOf("+") > 0){
    arr = str.split("+");
    result = arr[0] + arr[1];
  }else if(str.indexOf("-") > 0){
    arr = str.split("-");
    result = arr[0] - arr[1];
  }else if(str.indexOf("×") > 0){
    arr = str.split("×");
    result = arr[0] * arr[1];
  }else if(str.indexOf("÷") > 0){
    arr = str.split("÷");
    result = arr[0] / arr[1];
  }
  return result;
}
