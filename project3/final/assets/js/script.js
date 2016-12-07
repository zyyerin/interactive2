var bgimg;

bgimg = Math.floor(Math.random() * 30);
$(document).ready(function() {

	switch (bgimg) {
		case 1:
		$('body').css("background-image", "url(img/bg2.jpg");  
		break;

		case 2:
		$('body').css("background-image", "url(img/bg3.jpg");  
		break;

		case 3:
		$('body').css("background-image", "none");  
		break;

		case 4:
		$('body').css({"background-image": "none", "background-color":"ghostwhite"});  
		break;

		case 5:
		$('body').css({"background-image": "none", "background-color":"black"});  
		break;

		case 6:
		$('body').css("background-image", "url(img/bg4.jpg");  
		break;		

		case 7:
		$('body').css("background-image", "url(img/bg5.jpg");  
		break;		

		case 8:
		$('body').css("background-image", "url(img/bg6.png");  
		break;

		case 9:
		$('body').css("background-image", "url(img/bg7.png");  
		break;

		default:
		$('body').css("background-image", "url(img/bg1.png");  
		break;
	}

	$('.text').hide();


	$(document).on('mousedown', function(e){
		$('.text').show();
		$('.panel').css("opacity","0.7");

	}).on('mouseup', function() {
		$('.text').hide();
		$('.panel').css("opacity","1");

	});

	$(".panel").draggable().dblclick(function() {
		var nextPage = Math.floor(Math.random() * 5);
		switch (nextPage) {

			case 0:
			window.location.replace("1.html");
			break;

			case 1:
			window.location.replace("2.html");
			break;

			case 2:
			window.location.replace("3.html");
			break;
			
			case 3:
			window.location.replace("4.html");
			break;
			
			case 4:
			window.location.replace("7.html");
			break;
		}
	});

});