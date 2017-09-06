
$('.skill-text').each(function () {
  $('.skill-text').addClass('viz');
  $(this).prop('Counter',0).animate({
    Counter:$(this).text()
  },{
    duration: 4000,
    easing: 'swing',
    step:function(now){
      $(this).text(Math.ceil(now));
    }
  })
});
