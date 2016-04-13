$(function(){
  var center = function () {
    var wh = $(window).height();
    ww = $(window).width();
    ch = $('.logo').height();
    cw = $('.logo').width();
    t = wh / 2 - ch / 2;
    l = ww / 2 - cw / 2;
    $('.logo').offset({
        top: '100px',
        left: l
    });
    $('.main_container').offset({
        top: '150px',
        left: l
    });
    $('.main, .contact-form').offset({
      left: l / 4
    });
  };
  $(document).ready(center);
  $(window).resize(center);

	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});