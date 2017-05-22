$(document).ready(function(){

			// аккордеон в team начало
	(function(){
		$('.ourteam__item').on('click', function(){

			if ($(this).hasClass('active'))
				{
					$(this).children('.ourteam__info').slideUp(300);
					$(this).removeClass('active');
				}
			else
				{
					var prevActive = $('.ourteam__item.active');
					prevActive.children('.ourteam__info').slideUp(300);
					prevActive.removeClass('active');

					$(this).children('.ourteam__info').slideDown(300); 
					$(this).addClass('active');
				}
		})
	})();	// аккордеон в team окончание

	
			// аккордеон в meni начало	
	(function(){
		$('.ourmenu__item').on('click', function(e){

			e.preventDefault();

			if ($(this).hasClass('active'))
				{
					$(this).removeClass('active');
				}
			else
				{
					var prevActive = $('.ourmenu__item.active');
					prevActive.removeClass('active');

					$(this).addClass('active');
				}
		})
	})();	// аккордеон в menu окончание
	

			// слайдер burger начало	
	// $('.arrow').on('click', function(e){

	// 	e.preventDefault();
	// 	console.log('prevent');

		
	// });	// слайдер burger окончание


	//временно карусель сторонним плагином
	(function(){
		$(function() {
			var carousel = $('.jcarousel').jcarousel({
	    		list: '.burgers_slider',
	        	items: '.burgers_slider__item', 
	        	animation: 'slow',
	        	transitions: true,
	        	wrap: 'circular' 
			});

			
	    	$('.jcarousel-prev').jcarouselControl({
	        	target: '-=1',
	        	carousel: carousel
	    	});

	    	$('.jcarousel-next').jcarouselControl({
	        	target: '+=1',
	        	carousel: carousel
	    	});

		});//временно карусель сторонним плагином окончание
	})();	

			//	скрываем видео по завершению начало
	(function(){
		$('.is_overlay video').attr("autoplay", "autoplay").delay(22000).animate(
  			{
   				opacity: "0"
  			}, 2500);
	})();	//  скрываем видео по завершению  окончание


	(function(){
	  	$(window).scroll(function() {
		    var wScrollTop = $(window).scrollTop();//прокручено от верхней границы

		    $(".section").each(function() {
		      var $this = $(this);
		      var windowMargin = 200; 
		      var sectionPos = $this.offset().top - windowMargin; //расстояние от верхней границы окна до секции - 100px
		      var sectionBottom = sectionPos + $this.height();

		      //console.log('wScrollTop ' + wScrollTop + ' offset().top ' + $this.offset().top);

		      if (wScrollTop > sectionPos && wScrollTop < sectionBottom) {

		        var id = '#' + $this.attr('id');
		        var AllSecLinks = $('.mainmenu__link');

		        var ActiveLink = AllSecLinks.filter(function() {
		        	//console.log( typeof $(this).attr('href') + typeof id);
		          return $(this).attr('href') == id;
		        });

//console.log(ActiveLink.attr('href'));

		        AllSecLinks.removeClass('active');
		        ActiveLink.addClass('active');
		      }

		    });		//each окончание
	  	});			//scroll окончание

	})();

})


		// console.log('hello from ');