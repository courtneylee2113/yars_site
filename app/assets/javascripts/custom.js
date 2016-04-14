// ------- PRELOADER -------//
$(window).load(function(){
    $('.preloader').fadeOut("slow"); // set duration in brackets    
});
// ----- GOOGLE MAP ----- //
var map = '';
var center;

function initialize() {
    var toronto = new google.maps.LatLng(43.6532, -79.3832)
    var mapOptions = {
      zoom: 14,
      center: toronto,
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
        addMarker(toronto, map);
    });
}

function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });
}
function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

$(function(){
  // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // --------- PORTFOLIO IMAGE ----- //
  $('#portfolio a').nivoLightbox({
        effect: 'fadeScale',
    });

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- GOOGLE MAP ----- //
  loadGoogleMap();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

  var center = function () {
    var wh = $(window).height();
    ww = $(window).width();
    ch = $('.logo').height();
    cw = $('.logo').width();
    t = wh / 2 - ch / 2;
    l = ww / 2 - cw / 2;
    $('.logo').offset({
        top: '100px',
        left: l - 10
    });
    $('.main_container').offset({
        top: '150px',
        left: l
    });
    $('.main, .contact-form').offset({
      left: l / 4
    });
  };
  // $(document).ready(center);
  // $(window).resize(center);

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