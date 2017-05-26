$(document).ready(function(){

	//	аккордеон в team начало
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
	})();	
	//	аккордеон в team окончание

	
	//	аккордеон в menu начало	
	(function(){
			var activeItem = $('.ourmenu__item.active');;

			var noActiveWidth0 = function(obj){
				console.log('tuta');
				obj.stop(true).animate(
	  			{
	   				width: '80px'
	  			}, 	800,
	  			function(){
	  				obj.removeClass('active')
	  			});				
			};

			$('.ourmenu__item').on('click', function(e){
			var $this = $(this);
			
			e.preventDefault();

			if ($this.hasClass('active'))
				{
					noActiveWidth0($this);
				}
			else
				{
					activeItem.length && noActiveWidth0(activeItem);
					$this.addClass('active').stop(true).animate({
						width: '620px'
					})
				}

			activeItem = $('.ourmenu__item.active');
		})

			//прячем открытое меню по клику не на него начало
		$('.wrapper').on('click', function(e){
			activeItem.length && !($(e.target).closest('.ourmenu__list').length) && noActiveWidth0(activeItem);
		})	//прячем открытое меню по клику не на него окончание

	})();	
	//	аккордеон в menu окончание
	

	//	карусель jcarousel начало
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
	//	карусель jcarousel окончание


	//	скрываем видео по завершению начало
	(function(){
		$('.is_overlay video').attr("autoplay", "autoplay").delay(22000).animate(
  			{
   				opacity: "0"
  			}, 2500);
	})();
	//	скрываем видео по завершению  окончание


	//	OPS начало
	(function(){

		var secContainer = $('.allcontent');
	  	var allSections = $('.section');
	  	var allRoundNavLinks = $('.navigation__item .navigation__button');
	  	var touchMultiScroll = false;
	  	//тут присвоить href
 
		$('.mainmenu__link, .navigation__button, .button-notform .button__link, .arrow-gonextsection, .arrow-totop').on("click", function(e){	//
		    e.preventDefault();

		    var $this = $(this);
		    var href = $this.attr('href');
		    var SectionNum = allSections.filter(href).index();

		    scrolligPage(SectionNum);
		    
		 //    var SectionTop = allSections.filter(href).offset().top;
			// //var SectionTop = AllSections.filter(href).offset().top;

		 //    $("html, body").animate(
		 //      {
		 //        scrollTop: SectionTop
		 //      },
		 //      1200
		 //    );

		});

	  	// $(window).scroll(function(){
		  //   var wScrollTop = $(window).scrollTop();//прокручено от верхней границы

		    // $(".section").each(function(){
		    //   var $this = $(this);
		    //   var windowMargin = 00; 
		    //   var sectionPos = $this.offset().top - windowMargin; //расстояние от верхней границы окна до секции - 100px
		    //   var sectionBottom = sectionPos + $this.height();

			      // if (wScrollTop > sectionPos && wScrollTop < sectionBottom) {

			      //   var id = '#' + $this.attr('id');
			      //   var AllSecLinks = $('.mainmenu__link');

			      //   var ActiveLink = AllSecLinks.filter(function(){
			      //     return $(this).attr('href') == id;
			      //   });

			      //   AllSecLinks.removeClass('active');
			      //   ActiveLink.addClass('active');
			      // }

		    //});		//each окончание

	  	//});			//scroll окончание

	  	var toggleActiveClass = function(elems, number){
	  		elems.removeClass('active').eq(number).addClass('active');
	  	}

	  	var scrolligPage = function (sectionNumber){
	  		var pos = (-100 * sectionNumber) + '%';

	  		if (!touchMultiScroll) {

	  			touchMultiScroll = true;

		  		secContainer.css({
		  			'transform': 'translateY('+ pos + ')'
		  			});

		  		toggleActiveClass(allSections, sectionNumber);
		  		toggleActiveClass(allRoundNavLinks, sectionNumber);

		  		// allSections.eq(sectionNumber).addClass('active').siblings().removeClass('active');
		  		// allRoundNavLinks.eq(sectionNumber).addClass('active').siblings().removeClass('active');

		  		if (allSections.eq(sectionNumber + 1).length > 0){//если секция не последняя
		  			var nextSectionName = '#'+ allSections.eq(sectionNumber + 1).attr('id');
					$('.arrow-gonextsection').attr('href', nextSectionName).show(1500).removeClass('nohover'); 	
					$('.arrow-totop').hide(300);
		  		}
		  		else{											//если секция последняя
					$('.arrow-gonextsection').addClass('nohover').hide(1500);
					$('.arrow-totop').delay(500).show(500);
		  		}

		  		setTimeout(function(){
		  			touchMultiScroll = false;
		  		},
		  			1400
		  		)
		  	}
	  	};
				//wheel начало
		$('.wrapper').on('wheel', function(e){	
			var scrollY = e.originalEvent.deltaY;
			var nowSection = allSections.filter('.active');				//0
			var nextSection = nowSection.next().index();				//1
			var prevSection = nowSection.prev().index();				//-1

			if (scrollY > 0 && nextSection > 0){
				scrolligPage(nextSection);
			}
			if (scrollY < 0 && prevSection >= 0){				
				scrolligPage(prevSection);
			}

		});		//wheel окончание

				//key начало
		$(document).on('keydown',function(e){ 
			var nowKey = +e.keyCode; 
			var nowSection = allSections.filter('.active');				//0
			var nextSection = nowSection.next().index();				//1
			var prevSection = nowSection.prev().index();				//-1

			if (nowKey == 38 && prevSection >= 0) {
				scrolligPage(prevSection);
			}
			else if (nowKey == 40 && nextSection > 0){
				scrolligPage(nextSection);
			}
		})		//key окончание

	})();
	//	OPS окончание	

	//	popup начало
	$(function(){

		$('.button__link-showreview').fancybox({
				type: 'inline',
				maxWidth: 460,
				fitToView: false,
				padding: 0
			});	

		$('.review__closefull').on('click', function(){
			$.fancybox.close(  );//all
		});

	})
	//	popup окончание

	//	mask начало
	$(function(){

		$('.formorder__input-phone').inputmask('+7(999)9999999'); 

	})
	//	mask окончание

})//ready end





