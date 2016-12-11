<html>
  <head>
    <title>PHP Page</title>
  </head>
  <body>
    <form action="post.php" method="post">
      <input type="text" name="value" value="<?php echo file_get_contents('value.txt') ?>" />
      <input type="submit" value="保存" />
    </form>
  </body>
</html>
