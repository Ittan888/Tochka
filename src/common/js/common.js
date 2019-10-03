
$(function () {


/* menu
------------------------------------------------------------------- */
	var $body = $('body');
		$('#js__sideMenuBtn').on('click', function () {
        $body.toggleClass('side-open');
        $('.menu-trigger').toggleClass('active');
        $('html').toggleClass('scroll-prevent') ;// 追記
			$('#js__overlay').on('click', function () {
        $body.removeClass('side-open');
        $('.menu-trigger').removeClass('active');
        $('html').removeClass('scroll-prevent'); // 追記
		});
	});





/* dropdown
------------------------------------------------------------------- */ 
    if ($(window).width() > 1024) {
      $(".gNav > ul > li").hover(
        function (e) {
            if ($(window).width() > 1024) {
                $(this).children(".subNav").slideToggle(150);
                e.preventDefault();
            }
        }, function (e) {
            if ($(window).width() > 1024) {
                $(this).children(".subNav").slideToggle(150);
                e.preventDefault();
            }
        }
    );
    }
    


/* Smoothscroll
------------------------------------------------------------------- */
	$('a[href^="#"]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed);
		return false;
	});



/* scroll effect
---------------------------------------------------------------- */
  $('.header,.animX,.animY').addClass('active');
  
  $(window).scroll(function(){
    $('.header,.anim,.animX,.animY,.pickup,.interview,.business').each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass('active');
      }
    }); 
  });
  
  


/* carousel slider
---------------------------------------------------------------- */
  // top slider
  $('.wSlider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
         breakpoint: 1024,
              settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
         }
    },{
         breakpoint: 767,
              settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1,
              }
         }
    ]
  });
  
  // staff slider
  $('.mSlider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
         breakpoint: 1024,
              settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
         }
    },{
         breakpoint: 767,
              settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1,
              }
         }
    ]
  });


/* 
---------------------------------------------------------------- */

  

  
 
 
 
 
  
  
});
