$(function(){
	$('.secondary').hide();
	
	$('.static').hover(function() {
		$('#static').hide();
    $(this).toggleClass('animated', 'static');
	}, function(){
		$('#static').show();
		$(this).toggleClass('animated', 'static');
	});
	// $('.primary').on({
 //    mouseenter: function() {
 //      $('.primary').hide();
	// 		$(".secondary").show();  
 //    },
 //    mouseleave: function() {
 //    	$('.primary').show();
	// 	$(".secondary").hide();
 //    }
	// });
	
	(function(d) {
    var config = {
      kitId: 'jmh6yjc',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
	
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