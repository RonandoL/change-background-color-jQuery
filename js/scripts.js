$(function() {
  $('#green').click(function() {
    $('body').removeClass().addClass('green-background');
    // $('body').addClass('green-background');
  });

  $('#yellow').click(function() {
    $('body').removeClass().addClass('yellow-background');
    // $('body').addClass('yellow-background');
  });

  $('#red').click(function() {
    $('body').removeClass().addClass('red-background');
    // $('body').addClass('red-background');
  });

  $('#text').click(function() {
    $('.text1').toggleClass('change');
  });
});


//
