$(document).ready(function(){

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

	$('.ourmenu__item').on('click', function(e){

		e.preventDefault();

		//$('.ourmenu__fulldesc').css('display','none');

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


})


		// console.log('hello from ');