<!DOCTYPE html>
<html lang="en">

<head>
<link rel="stylesheet" type="text/css" href="/calculateCss.css" /> 
<link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/5.0.0/normalize.css" /> 
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
<div id="calculator-box">
  <!--显示部分 -->
  <form action="calculatePost.php" method="post">
    <input id="formula" class="input-display" type="text" name="formula" value="<?php echo file_get_contents('formula.txt') ?>"/>
    <input id="result" class="input-display" type="text" name="result" value="<?php echo file_get_contents('result.txt') ?>"/>
    <input id="save-btn" type="submit" value="保存"/>
  </form>
  <!--按钮部分 -->
    <div class="number-box">
    <button class="btn -left operand">7</button><button class="btn -left operand">8</button><button class="btn -left operand">9</button></div>
  <button id="clear-btn" class="btn -right">DEL</button>
    
    <div class="number-box">
    <button class="btn -left operand">4</button><button class="btn -left operand">5</button><button class="btn -left operand">6</button></div>
  <button id="divide" class="btn -right operand">÷</button>
    
    <div class="number-box">
    <button class="btn -left operand">1</button><button class="btn -left operand">2</button><button class="btn -left operand">3</button></div>
  <button class="btn -right operand">×</button>
    
    <div class="number-box">
    <button class="btn -left operand">.</button><button class="btn -left operand">0</button><button id="equal" class="btn -left">=</button></div>
  <button class="btn -right operand">-</button>
  
      <button class="btn -right operand">+</button>

</div>
<script src="myScript.js"></script>
</body>

</html>
