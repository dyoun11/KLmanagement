$(function(){
  var $slider = $('.mainViews'),
      $firstSlide = $slider.find('.mainView').first() // 첫번째 슬라이드
  .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기

  function PrevSlide(){ // 이전버튼 함수
    var $lastSlide = $slider.find('.mainView').last() //마지막 슬라이드
    .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기  
    $secondSlide = $slider.find('.mainView').eq(1)
   //두 번째 슬라이드 구하기
   .stop(true).animate({'opacity':0},700); //밀려난 두 번째 슬라이드는 fadeOut 시키고
    $firstSlide = $slider.find('.mainView').first() //맨 처음 슬라이드 다시 구하기
    .stop(true).animate({'opacity':1},700);
    //새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
  }
  function NextSlide(){ // 다음 버튼 함수
    $firstSlide = $slider.find('.mainView').first() // 첫 번째 슬라이드
    .appendTo($slider); // 맨 마지막으로 보내기
    var $lastSlide = $slider.find('.mainView').last() // 맨 마지막으로 보낸 슬라이드
    .stop(true).animate({'opacity':0},700); // fadeOut시키기
    $firstSlide = $slider.find('.mainView').first()
    // 맨 처음 슬라이드
    .stop(true).animate({'opacity':1},700);
    // fadeIn 시키기
  }
  
  // $('#next').on('click', function(){ //다음버튼 클릭
  //   NextSlide();
  // });
  //   $('#prev').on('click', function(){ //이전 버튼 클릭하면
  //   PrevSlide();
  // });
  
  setInterval(NextSlide, 7000); //자동 슬라이드 설정

});

$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll touchmove mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
});// 스크롤 제한