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



})


		// console.log('hello from ');