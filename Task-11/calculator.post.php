<?php file_put_contents('result.txt', $_POST["result"]) ?>
<?php file_put_contents('formula.txt', $_POST["formula"]) ?>

已保存算式：<?php echo $_POST["formula"] ?>
已保存运算结果：<?php echo $_POST["result"] ?>
