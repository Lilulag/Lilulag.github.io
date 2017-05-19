$(document).ready(function(){

	$('.ourteam__name').on('click', function(){

		if ($(this).hasClass('active'))
			{
				$(this).siblings('.ourteam__info').slideUp(300);
				$(this).removeClass('active');
			}
		else
			{
				var prevActive = $('.ourteam__name.active');
				prevActive.siblings('.ourteam__info').slideUp(300);
				prevActive.removeClass('active');

				$(this).siblings('.ourteam__info').slideDown(300); 
				$(this).addClass('active');
			}
	})

	$('.ourmenu__link').on('click', function(e){

		e.preventDefault();

		if ($(this).hasClass('active'))
			{
				$(this).siblings('.ourmenu__fulldesc').css('display','none');//slideDown(200);
				$(this).removeClass('active');
			}
		else
			{
				var prevActive = $('.ourmenu__link.active');
				prevActive.siblings('.ourmenu__fulldesc').slideUp(200);
				prevActive.removeClass('active');

				$(this).siblings('.ourmenu__fulldesc').slideDown(200).css('display','inline-block'); 
				$(this).addClass('active');
			}
	})


	// $('.formorder__itemtext-shift').on('click', function(e){

	// 	if ($(this).hasClass('active'))
	// 		{
	// 			#f9b43b
	// 			$(this:after).siblings('.ourmenu__fulldesc').css('display','none');//slideDown(200);
	// 			$(this).removeClass('active');
	// 		}
	// 	else
	// 		{
	// 			var prevActive = $('.ourmenu__link.active');
	// 			prevActive.siblings('.ourmenu__fulldesc').slideUp(200);
	// 			prevActive.removeClass('active');

	// 			$(this).siblings('.ourmenu__fulldesc').slideDown(200).css('display','inline-block'); 
	// 			$(this).addClass('active');
	// 		}
	// })

})


		// console.log('hello from ');