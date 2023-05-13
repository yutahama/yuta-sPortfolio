<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <?php
      require '/path/to/vendor/autoload.php';

      // 送信元メールアドレス
      $from_mail = 'no-reply@test.com'; // SESで設定したメールアドレス

      // 送信先メールアドレス
      $to_mail = 'bs120029@sun.ac.jp';

      //送信者名
      $from_name = mb_encode_mimeheader("テスト送信者",'utf-8');

      // 文字コード
      $char_set = 'UTF-8';

      // 件名
      $subject = '件名でーす';

      // 本文
      $body = '本文でーす';

      try {
          // メール送信
          $result = $client->sendEmail([
              'Destination' => [
                  'ToAddresses' => [$to_mail],
              ],
              'ReplyToAddresses' => [$from_mail],
              'Source' => $from_name,
              'Message' => [
                  'Body' => [
                      'Text' => [
                          'Charset' => $char_set,
                          'Data' => $body,
                      ],
                  ],
                  'Subject' => [
                      'Charset' => $char_set,
                      'Data' => $subject,
                  ],
              ],
          ]);

          // 送信ID
          $messageId = $result['MessageId'];
      } catch (AwsException $e) {
          $this->log("SES送信失敗。" . $e->getAwsErrorMessage());
      }
    ?>
  </body>
</html>