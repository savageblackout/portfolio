$(document).ready(function(){
 });

  $('#name').hover(function() {
    $main_text=$(this).text();
    $(this).text("CLAIRE SAVAGE").fadeIn();
  }, function() {
    $(this).text($main_text);

  });

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

  $('nav a').click(function () {
   var $href = $(this).attr('href');
   $('body').stop().animate({
     scrollTop: $($href).offset().top
   }, 1000);
   return false;
  });



