var caseA = 0, caseB = 0, caseC = 0, caseD = 0, caseE = 0;
var cases = [caseA, caseB, caseC, caseD, caseE];

//console.log(cases.length);

$(document).ready(function(){
	$('body').keypress(function(e) {



		switch (e.which) {
			case 97:
			document.getElementById('chime1').play();
			cases[0] ++;
			var $newdiv = $( "<div class='letter'><div class='box'></div><div class='box south_'></div></div>");
			break;

			case 98:
			document.getElementById('chime2').play();
			cases[1] ++;
			var $newdiv = $( "<div class='letter'><div class='box'></div><div class='box'></div></div>" );
			break;		

			case 99:
			document.getElementById('chime3').play();
			cases[2] ++;
			var $newdiv = $( "<div class='letter c'><div class='box blkborder northw'></div><div class='box blkborder southw'></div></div>" );
			break;

			case 100:
			document.getElementById('chime4').play();
			cases[3] ++;
			var $newdiv = $( "<div class='letter'><div class='box south_'></div><div class='box north_'></div></div>" );
			break;

			case 101:
			document.getElementById('chime5').play();
			cases[4] ++;
			var $newdiv = $( "<div class='letter'><div class='box east_'></div><div class='box east_'></div></div>" );
			break;
		}
//create a new character
$('body').append($newdiv);


//find the dominant case
var mostCase = Math.max.apply(Math, cases);
console.log(mostCase);



//locate the dominant case
function returnIndex(){
	for (var i = 0; i < cases.length ; i++){
	   		//console.log(cases[i]);
	   		if (cases[i] === mostCase) {
	   			console.log('Index of the dominant case: ' + i);
	   			return i;
	   			break;
	   		}
	   	}
	   }
	   var mostIndex = returnIndex();
 //  console.log('mostIndex: ' + mostIndex);



 switch (mostIndex){
 	case 0:
 	$('div').toggleClass("testingbox", 1000, "easeInOutQuad");
 	break;

 	case 1:
 	$('div').switchClass("blkborder","pnkborder", 1000, "easeInOutQuad");
 	break;

 	case 2:
 	$('.box').addClass("diagboth");
 	$("p").text("type D to clear the bars");
 	break;

 	case 3:
 	$('.box').removeClass("diagboth");
 	break;

 	case 4:
 	$('body').addClass("night", 1000, "easeInOutQuad");
 	$('p').addClass("nightintro", 1000, "easeInOutQuad");
	$("p").text("Feeling sleepy zzzzzZZZZ",  1000, "easeInOutQuad");
 	break;
 }


});

});


