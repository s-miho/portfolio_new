$('.js-modal-open').on('click', function(){
  let target = $(this).data('target');
  let modal = document.getElementById(target);
  scrollPosition = $(window).scrollTop();

  $('body').addClass('fixed').css({'top': -scrollPosition});
  $(modal).fadeIn();
  return false;
});

$('.js-modal-close').on('click', function(){
  $('body').removeClass('fixed');
  window.scrollTo( 0 , scrollPosition );
  $('.js-modal').fadeOut();
  return false;
});