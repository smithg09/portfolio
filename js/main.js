<<<<<<< HEAD
AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  var goHere = function() {

		$('.mouse-icon').on('click', function(event){
			
			event.preventDefault();

			$('html,body').animate({
				scrollTop: $('.goto-here').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});
	};
	goHere();

	// $("#myScrollspy").scrollspy({ offset: -75 });



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.09em solid #999 }";
  document.body.appendChild(css);
};


})(jQuery);







// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function($){
  //variable that will hold the href attr of the links in the menu
  var sections = [];
  //variable that stores the id of the section
  var id = false;
  //variable for the selection of the anchors in the navbar
  var $navbara = $('#navi a');
  
  $navbara.click(function(e){
    //prevent the page from refreshing
    e.preventDefault();
    //set the top offset animation and speed
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 180
},500);
    hash($(this).attr('href'));
  });
  
  
  
  //select all the anchors in the navbar one after another
  $navbara.each(function(){
   // and adds them in the sections variable
    sections.push($($(this).attr('href')));
    
  })
	$(window).scroll(function (e) {
    // scrollTop retains the value of the scroll top with the reference at the middle of the page
    var scrollTop = $(this).scrollTop() + ($(window).height()/2);
	//cycle through the values in sections array
	  for (var i in sections) {
	  var section = sections[i];
	
     if (scrollTop > section.offset().top) {
       var scrolled_id = section.attr("id");
     }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $($navbara).removeClass('current');
      $('#navi a[href="#' + id + '"]').addClass('current'); 
    }
  })
})(jQuery);

hash = function(h){
  if (history.pushState){
    history.pushState(null, null, h);
  }else{
    location.hash = h;
  }
}


$(function() {

  $(".progress").each(function() {

    var value = $(this).attr('data-value');
    var left = $(this).find('.progress-left .progress-bar');
    var right = $(this).find('.progress-right .progress-bar');

    if (value > 0) {
      if (value <= 50) {
        right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
      } else {
        right.css('transform', 'rotate(180deg)')
        left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
      }
    }

  })

  function percentageToDegrees(percentage) {

    return percentage / 100 * 360

  }

});
=======
AOS.init({duration:800,easing:"slide"}),function(t){"use strict";t(window).stellar({responsive:!0,parallaxBackgrounds:!0,parallaxElements:!0,horizontalScrolling:!1,hideDistantElements:!1,scrollProperty:"scroll"});t(".js-fullheight").css("height",t(window).height()),t(window).resize(function(){t(".js-fullheight").css("height",t(window).height())});setTimeout(function(){t("#ftco-loader").length>0&&t("#ftco-loader").removeClass("show")},1),t.Scrollax();t("body").on("click",".js-fh5co-nav-toggle",function(e){e.preventDefault(),t("#ftco-nav").is(":visible")?t(this).removeClass("active"):t(this).addClass("active")});t(document).on("click",'#ftco-nav a[href^="#"]',function(e){e.preventDefault(),t.attr(this,"href"),t("html, body").animate({scrollTop:t(t.attr(this,"href")).offset().top-70},500,function(){})});t(".home-slider").owlCarousel({loop:!0,autoplay:!0,margin:0,animateOut:"fadeOut",animateIn:"fadeIn",nav:!1,autoplayHoverPause:!1,items:1,navText:["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1},600:{items:1},1000:{items:1}}}),t("nav .dropdown").hover(function(){var e=t(this);e.addClass("show"),e.find("> a").attr("aria-expanded",!0),e.find(".dropdown-menu").addClass("show")},function(){var e=t(this);e.removeClass("show"),e.find("> a").attr("aria-expanded",!1),e.find(".dropdown-menu").removeClass("show")}),t("#dropdown04").on("show.bs.dropdown",function(){console.log("show")});t(window).scroll(function(){var e=t(this).scrollTop(),a=t(".ftco_navbar"),s=t(".js-scroll-wrap");e>150&&(a.hasClass("scrolled")||a.addClass("scrolled")),e<150&&a.hasClass("scrolled")&&a.removeClass("scrolled sleep"),e>350&&(a.hasClass("awake")||a.addClass("awake"),s.length>0&&s.addClass("sleep")),e<350&&(a.hasClass("awake")&&(a.removeClass("awake"),a.addClass("sleep")),s.length>0&&s.removeClass("sleep"))});t("#section-counter, .hero-wrap, .ftco-counter, .ftco-about").waypoint(function(e){if("down"===e&&!t(this.element).hasClass("ftco-animated")){var a=t.animateNumber.numberStepFactories.separator(",");t(".number").each(function(){var e=t(this),s=e.data("number");console.log(s),e.animateNumber({number:s,numberStep:a},7e3)})}},{offset:"95%"});t(".ftco-animate").waypoint(function(e){"down"!==e||t(this.element).hasClass("ftco-animated")||(t(this.element).addClass("item-animate"),setTimeout(function(){t("body .ftco-animate.item-animate").each(function(e){var a=t(this);setTimeout(function(){var t=a.data("animate-effect");"fadeIn"===t?a.addClass("fadeIn ftco-animated"):"fadeInLeft"===t?a.addClass("fadeInLeft ftco-animated"):"fadeInRight"===t?a.addClass("fadeInRight ftco-animated"):a.addClass("fadeInUp ftco-animated"),a.removeClass("item-animate")},50*e,"easeInOutExpo")})},100))},{offset:"95%"}),t(".image-popup").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{verticalFit:!0},zoom:{enabled:!0,duration:300}}),t(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1});t(".mouse-icon").on("click",function(e){return e.preventDefault(),t("html,body").animate({scrollTop:t(".goto-here").offset().top},500,"easeInOutExpo"),!1});var e=function(t,e,a){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};e.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,s=300-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout(function(){a.tick()},s)},window.onload=function(){for(var t=document.getElementsByClassName("txt-rotate"),a=0;a<t.length;a++){var s=t[a].getAttribute("data-rotate"),o=t[a].getAttribute("data-period");s&&new e(t[a],JSON.parse(s),o)}var n=document.createElement("style");n.type="text/css",n.innerHTML=".txt-rotate > .wrap { border-right: 0.09em solid #999 }",document.body.appendChild(n)}}(jQuery),function(t){var e=[],a=!1,s=t("#navi a");s.click(function(e){e.preventDefault(),t("html, body").animate({scrollTop:t(t(this).attr("href")).offset().top-180},500),hash(t(this).attr("href"))}),s.each(function(){e.push(t(t(this).attr("href")))}),t(window).scroll(function(o){var n=t(this).scrollTop()+t(window).height()/2;for(var i in e){var r=e[i];if(n>r.offset().top)var l=r.attr("id")}l!==a&&(a=l,t(s).removeClass("current"),t('#navi a[href="#'+a+'"]').addClass("current"))})}(jQuery),hash=function(t){history.pushState?history.pushState(null,null,t):location.hash=t},$(function(){function t(t){return t/100*360}$(".progress").each(function(){var e=$(this).attr("data-value"),a=$(this).find(".progress-left .progress-bar"),s=$(this).find(".progress-right .progress-bar");e>0&&(e<=50?s.css("transform","rotate("+t(e)+"deg)"):(s.css("transform","rotate(180deg)"),a.css("transform","rotate("+t(e-50)+"deg)")))})});
>>>>>>> master
