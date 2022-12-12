<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <?php
      mb_language("Japanese");
      mb_internal_encoding("UTF-8");
	  $companyName = $_POST['companyName'];
	  $yourName = $_POST['yourName'];
	  
      $to = "bs120029@sun.ac.jp";
      $title = $_POST['title'];
      $content = $_POST['content'];
	  $contents=$companyName."の".$yourName."さんから".$content;
      $header = $_POST['from'];
	  //送信先のメールアドレス,メールのタイトル,メールの本文,メールの送り元
      if(mb_send_mail($to, $title,$contents,$header)){
        echo "メールを送信しました<br>";
      } else {
        echo "メールの送信に失敗しました<br>";
      };
      echo'<button type="button" onclick="history.back()">戻る</button>';
    ?>
  </body>
</html>