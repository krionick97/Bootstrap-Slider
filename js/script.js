$(document).ready(function () {
  $('#start-button').click(function() {
    $('.start-screen').css({'opacity' : '0', 'visibility' : 'hidden'});
    $('#preloader').addClass('preloader__visible');
    setTimeout(function() {
      $('#preloader').addClass('preloader__done');
    }, 3000);
  });
});