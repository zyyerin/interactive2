$(document).ready(function() {
	var currentPage = Math.floor(Math.random() * 5);
	switch (currentPage) {

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