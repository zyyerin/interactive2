var bgimg;

// bgimg = Math.floor(Math.random() * 2);
bgimg = 0;

$(document).ready(function() {

	switch (bgimg) {
		case 0:
		$('body').css("background-image", "url(img/bg1.png");  
		break;

		case 1:
		$('body').css("background-image", "url(img/bg2.jpg");  
		break;

		case 2:
		$('body').css("background-image", "url(img/bg3.jpg");  
		break;

		case 3:
		$('body').css("background-image", "url(img/bg4.jpg");  
		break;
	}

	$('.text').hide();


	$(document).on('mousedown', function(e){
		$('.text').show()

	}).on('mouseup', function() {
		$('.text').hide();
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