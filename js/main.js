document.addEventListener('DOMContentLoaded', ready);

function ready(){
	var hello_page = document.querySelector('.wrapper_hello-page'), helloPageBgPosX = -100, helloPageBgPosY = -100,
	helloblock = document.querySelector('.helloblock'),
	helloblock__avatar = document.querySelector('.helloblock__avatar'),
	buttons_helloblock = document.querySelector('.buttons_helloblock'),
	helloblock__name = document.querySelector('.helloblock__name'); 
	hello_page.style.backgroundPosition = helloPageBgPosX + 'px ' + helloPageBgPosY + 'px';		


	helloblock__avatar.style.opacity = 0;	
	buttons_helloblock.style.opacity = 0;	
	helloblock__name.style.opacity = 0;



	window.onload = function(){   	
		hello_page.style.transition = 'background-position 0.2s linear';	
		helloblock.classList.add('animate-helloblock');
		helloblock__avatar.classList.add('animate-avatar');
		buttons_helloblock.classList.add('animate-button');	
		helloblock__name.classList.add('animate-name');
	}

$(window).on('mousemove', function(e){
 var w_screen = $('.wrapper').width(), 
 	 h_screen = $('.wrapper').height(), 
 	 new_y = e.pageY-h_screen/2, 
 	 new_x = e.pageX-w_screen/2, 
 	 speedX = 20, speedY = 20;
 	 

	// console.log(w_screen+' ', h_screen);	
	// console.log('x='+(new_x/20-100)+' y='+(new_y/20-100));

	// if (w_screen / Math.abs(new_x) >= 8) speedX = 5; 
	// 	else if (w_screen / Math.abs(new_x) >=4) speedX = 25;
	// 		else if (w_screen / Math.abs(new_x) >=2.6) speedX = 40;
	// 			else speedX = 60;
			
	// 	console.log('speedX = '+speedX);

	$('.wrapper_hello-page').css('backgroundPosition' , (new_x/speedX+helloPageBgPosX)+'px ' + (new_y/speedY+helloPageBgPosY)+'px');

})

}

