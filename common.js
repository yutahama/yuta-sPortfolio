// JavaScript Document
//線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime(){
  $('.timeline li').each(function(){// それぞれのli要素の
    var elemPos = $(this).offset().top;// 上からの高さ取得
    var scroll = $(window).scrollTop();// スクロール値取得
    var windowHeight = $(window).height();// windowの高さ取得
    var startPoint = 100; //線をスタートさせる位置を指定※レイアウトによって調整してください
    if (scroll >= elemPos - windowHeight-startPoint){       
      var H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
      //スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
      var percent = (scroll+startPoint - elemPos) / (H/2) *100;//liの余白と高さの半分で線を100％に伸ばす

      // 100% を超えたらずっと100%を入れ続ける
      if(percent  > 100){
        percent  = 100;
      }
      // ボーダーの長さをセット
      $(this).children('.border-line').css({
        height: percent + "%", //CSSでパーセント指定
      });
    } 
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function(){
  ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});

$(window).on('load scroll', function() {
  fix_element();
});
 
function fix_element() {
  // 固定配置に使用する要素
  var $fixWrapper = $('.js-fix-wrapper');
  var $fix = $('.js-fix');
  var $fixArea = $('.js-fix-area');
 
  // 要素がある場合のみ処理
  if($fixWrapper.length && $fix.length && $fixArea.length) {
    var fixTop = $fixWrapper.offset().top;
    var fixEnd = $fixArea.offset().top + $fixArea.height();
    var fixHeight = $fix.height();
    var winScroll = $(window).scrollTop();
    var winheight = $(window).height();
    // 開始位置を通過する前
    if(winScroll < fixTop) {
      $fix.removeClass('is-fixed');
    // 終了位置を通過した後
    } else if(winScroll > fixEnd - fixHeight) {
      $fix.removeClass('is-fixed');
    // 対象範囲内の場合
    } else {
      $fix.addClass('is-fixed');
    }
  }
}

jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});