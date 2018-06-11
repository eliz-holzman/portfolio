$(document).foundation();

$('.r1').hide().fadeIn(1500);
$('.r2').hide().fadeIn(3000);
$('.r3').hide().fadeIn(4500);
$('.role').hide().fadeIn(7000);

jQuery(function($) {
  var $nav = $('.scrollhide-nav');
  var $body = $(document.body);
  var bodyHeight = $body.height();
  var prev = 0;

// hide top bar on scroll down
  $body.on("scroll", function () {
      if ($(this).scrollTop() > bodyHeight ) {
          var scrollTop = $body.scrollTop();
          $nav.toggleClass("hidden", scrollTop > prev );
          prev = scrollTop;
      } else {
          $nav.removeClass("hidden");
      }
  });
});

// Open Card Reveal Click
$('.open-button').click(function(){
  $(this).siblings('.card-reveal').toggleClass('open');
});

// Close Card Reveal Click
$('.close-button').click(function(){
  $(this).parent().parent('.card-reveal').toggleClass('open');
});
