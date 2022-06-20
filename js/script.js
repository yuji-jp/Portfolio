$(function(){
  //スライダー//
  var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //スクロールに応じてヘッダーの背景色が変化//
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").addClass("is-active");
    } else {
      $(".header").removeClass("is-active");
    }
  });

  
  //ページトップリンク//
  var pagetop = $('.page-top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });

  //ハンバーガー//
  $('.humburger').on('click', function () {
    $('.navi-list , .humburger, .humburger-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })

});