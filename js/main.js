$(document).ready(function(){

	$('.ourteam__name').on('click', function(){
		$('.ourteam__info').css('display','none');
		if ($(this).hasClass('active'))
			{
				//$(this).siblings('.ourteam__info').css('display','none');
			}
		else
			{
				$(this).siblings('.ourteam__info').css('display','inline-block');
			}
		$('.ourteam__name').removeClass('active');
		$(this).toggleClass('active');
	})



})


		// console.log('hello from ');