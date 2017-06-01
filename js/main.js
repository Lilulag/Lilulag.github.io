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
			var activeItem = $('.ourmenu__item.active');

			var noActiveWidth0 = function(obj){
				obj.stop(true).animate(
	  			{
	   				width: '80px'
	  			}, 	800,
	  			function(){
	  				obj.removeClass('active');
	  				activeItem = $('.ourmenu__item.active');
	  			});				
			};

			$('.ourmenu__item').on('click', function(e){
			var $this = $(this);
			
			e.preventDefault();

			if ($this.hasClass('active'))
				{
					noActiveWidth0($this)
				}
			else
				{
					activeItem.length && noActiveWidth0(activeItem);
					$this.addClass('active').stop(true).animate({
						width: '620px'
					})
				}

			activeItem = $('.ourmenu__item.active');
		});
			//прячем открытое меню по клику не на него начало
		$('.wrapper').on('click', function(e){
			activeItem.length && !($(e.target).closest('.ourmenu__list').length) && noActiveWidth0(activeItem);
			activeItem = $('.ourmenu__item.active');
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

		});//карусель jcarousel окончание
	
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

		$('.mainmenu__link, .navigation__button, .button-notform .button__link, .arrow-gonextsection').on("click", function(e){	//, .arrow-totop
		    e.preventDefault();

		    var $this = $(this);
		    var href = $this.attr('href');
		    var SectionNum = allSections.filter(href).index();

		    scrolligPage(SectionNum);
		});

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


		  	if (sectionNumber == 0){//если секция первая					
		  			var nextSectionName = '#'+ allSections.eq(sectionNumber + 1).attr('id');
					$('.arrow-gonextsection').attr('href', nextSectionName).show(1500).removeClass('nohover'); 	
		  		}
		  		else{											//если секция не первая
					$('.arrow-gonextsection').addClass('nohover').hide(1500);
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
	(function () {

		$('.button__link-showreview').fancybox({
				type: 'inline',
				maxWidth: 460,
				fitToView: false,
				padding: 0
			});	

		$('.review__closefull').on('click', function(){
			$.fancybox.close();
		});

	})();
	//	popup окончание


	//	mask начало
	(function(){

		$('.formorder__input-phone').inputmask('+7(999)9999999'); 

	})();
	//	mask окончание

	//  maps начало
	(function(){

		ymaps.ready(init);
	    var myMap,
	    	myCollection;

	    function init(){ 
			myMap = new ymaps.Map('yamap', {
		            center: [59.90753684, 30.36965782], 
		            zoom: 12,
		            controls: ['zoomControl']
		        });

			myMap.behaviors.disable('scrollZoom');
            
			var coords = [
				[59.89616196, 30.42555547],[59.93609989, 30.33353766],[59.90467678, 30.32989844]
			]

			 myCollection = new ymaps.GeoObjectCollection({
                 hintContent: 'Burgers',
                 balloonContent: 'Лучшие бургеры' 			 	
			 }, {
			 	iconLayout: 'default#image',
        		iconImageHref: 'img/icons/map-marker.svg',
        		iconImageSize: [46, 58],
        		iconImageOffset: [-20, -50]
		    });

			for (var i = 0; i < coords.length; i++) {
			    myCollection.add(new ymaps.Placemark(coords[i]));
			};

            myMap.geoObjects.add(myCollection);
        }

	})();	
	//  maps окончание

	//form order
	(function(){
		$(".formorder__input-digit").keydown(function (e) {        
        	if  (($.inArray(e.keyCode, [46, 8, 9, 27, 37, 39, 13, 110]) !== -1) ||
        		(e.keyCode >= 48 && e.keyCode <= 57)) {
                 return;
            	}
            else e.preventDefault();
        });
        
		$('#orderform').parsley().on('form:error', function() {
		    $.each(this.fields, function(key, field) {
		      if (field.validationResult !== true) {
		        field.$element.closest('.formorder__item').addClass('bt-flabels__error');
		      }
		    });
		});
		  
		$('#orderform').parsley().on('field:validated', function() {
		    if (this.validationResult === true) {
		      this.$element.closest('.formorder__item').removeClass('bt-flabels__error');
		    } else {
		      this.$element.closest('.formorder__item').addClass('bt-flabels__error');
		    }
		});

		$('#orderform').on('submit', function(e){
			e.preventDefault();
			 //console.log('form!!!');
// console.log( $(this).serialize() );
			var thisForm = $(this);
			var formData = thisForm.serialize();		


			$.ajax({
				url: 'mail.php',
				type: 'POST',
				data: formData,
				success: function(fromrequest){
					var jsonData = JSON.parse(fromrequest);
					// console.dir(jsonData)
					if (jsonData.requestStatus){//запрос отправлен
						//console.log('success request'),

						$.fancybox.open([
							{href : '#formsuccess'}
							],{
							type: 'inline',
							width: 260,
							fitToView: false,
							padding: 0,
							afterClose: function(){
								thisForm.trigger('reset');	
							}
						})

						$('.formpopup__close').on('click', function(){
							$.fancybox.close();
							thisForm.parsley().on('form:submit', function() {
    							return true; 
  							});
						});

					}
					else{//запрос не отправлен
						$.fancybox.open([
							{href : '#formerror'}
							],{
							type: 'inline',
							width: 260,
							fitToView: false,
							padding: 0
						})

						$('.formpopup__close').on('click', function(){
							$.fancybox.close();
							// thisForm.parsley().on('form:submit', function() {
    			// 				return false; 
  					// 		});
						});
					}
				}

			});
		
		});        


	})();


});//ready end





