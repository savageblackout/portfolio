$(document).ready(function(){
 });

  $('#name').hover(function() {
    $main_text=$(this).text();
    $(this).text("CLAIRE SAVAGE");
  }, function() {
    $(this).text($main_text);

  });

  // $('#name').mouseover(function() {
  //   $('#name').addClass('hidden');
  //   $('#real').removeClass('hidden');
  // });

  $('nav a').click(function () {
   var $href = $(this).attr('href');
   $('body').stop().animate({
     scrollTop: $($href).offset().top
   }, 1000);
   return false;
  });



