$(document).ready(function(){
 });

  $('.parallax-window').parallax({imageSrc: 'assets/image.jpg'});

  $('nav a').click(function () {
   var $href = $(this).attr('href');
   $('body').stop().animate({
     scrollTop: $($href).offset().top
   }, 500);
   return false;
  });

