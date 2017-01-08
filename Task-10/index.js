var formula = document.getElementById("formula");
var result = document.getElementById("result");
var calculatorBox = document.getElementById("calculator-box");
var formulaValue;

calculatorBox.addEventListener('click', function(event){
  var target = event.target;
    /*数字按钮和操作按钮*/
    if(target.classList.contains('operand')){
      handleClickNum(target.innerHTML);
    }
   /*特殊的清除按钮和等号按钮*/
    else if(target.id === "clear-btn"){
      handleClickDelete();
    }else if(target.id === "equal"){
      handleShowResult();
    }
});


function handleClickNum(operand) {
  formula.value = formula.value + operand;
  displayResult();
}

function handleClickDelete() {
  var beDeletedStr = formula.value;
  formula.value = beDeletedStr.substr(0, beDeletedStr.length-1);
  displayResult();
}

function handleShowResult() {
  
  if(result.value === "ERROR"){
    //...
  }else if(result.value === ""){
    //...
  }
  else{
    if(result.value.indexOf('.') !== -1){
      var index = result.value.indexOf('.');
      result.value = result.value.substr(0, index + 6);
      formula.value = result.value;
      result.value = "";
    }
    else{
      formula.value = result.value;
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
function calculateFormula(str){
  var arr = [];
  var result = 0;
  if(str.indexOf("+") > 0){
    arr = str.split("+");
    result = parseFloat(arr[0]) + parseFloat(arr[1]);
  }else if(str.indexOf("-") > 0){
    arr = str.split("-");
    result = parseFloat(arr[0]) - parseFloat(arr[1]);
  }else if(str.indexOf("×") > 0){
    arr = str.split("×");
    result = parseFloat(arr[0]) * parseFloat(arr[1]);
  }else if(str.indexOf("÷") > 0){
    arr = str.split("÷");
    result = parseFloat(arr[0]) / parseFloat(arr[1]);
  }
  return result;
}

/*返回计算结果*/
function displayResult(){
  var formulaValue = formula.value;
  var isformula = isFormula(formulaValue);
  var formulaResult = 0;
  if (isformula) {
    formulaResult = calculateFormula(formulaValue);
     if(formulaResult === Infinity  || isNaN(formulaResult)){
      result.value = "ERROR";
    }
    else{
      result.value = formulaResult;
    }
  }else{
    result.value = "";
  }
}
