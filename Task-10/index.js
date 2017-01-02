var formula = document.getElementById("formula");
var result = document.getElementById("result");
var calculatorBox = document.getElementById("calculator-box");
var formulaValue;

calculatorBox.addEventListener('click', function(event){
  var target = event.target;
  while (target.tagName !== 'BUTTON') {
    target = target.parentNode;
    if (target === button) return;
  }
  /*数字按钮和操作按钮*/
  if(target.className === "btn -left operand" || target.className === "btn -right operand"){
    onclicknum(target.innerHTML);
  }
   /*特殊的清除按钮和等号按钮*/
  if(target.id === "clear-btn"){
    onclickclear();
  }else if(target.id === "equal"){
    onclickresult();
  }
  
});


function onclicknum(operand) {
  formula.value = formula.value + operand;
  var formulaValue = formula.value;
  var isformula = isFormula(formulaValue);
  var formulaResult = 0;
  if (isformula) {
    formulaResult = CalFormula(formulaValue);
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
  formula.style.fontSize = "80px";
  formula.value = "";
  result.value = "";
}
function onclickresult() { 
  formula.style.fontSize = "80px";
  if(result.value === "ERROR"){
    //...
  }else if(result.value === ""){
    //...
  }
  else{
    if(result.value.length > 8){
      formula.style.fontSize = "40px";
      formula.value = result.value;
      result.value = "";
    }
    else{
      formula.value = result.value;
      console.log(formula.length);
      result.value = "";
    }
    
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
  return operatorCount === 1;
}

/*计算算式*/
function CalFormula(str){
  var arr = [];
  var result = 0;
  if(str.indexOf("+") > 0){
    arr = str.split("+");
    result = parseFloat(arr[0]) + parseFloat(arr[1]);
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
