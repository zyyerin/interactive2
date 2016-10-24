var caseA = 0, caseB = 0, caseC = 0, caseD = 0, caseE = 0, caseF = 0, caseG = 0, caseH = 0, caseI = 0;
var cases = [caseA, caseB, caseC, caseD, caseE, caseF, caseG, caseH, caseI];

//console.log(cases.length);

$(document).ready(function(){
	$('body').keypress(function(e) {



		switch (e.which) {
			case 97:
			document.getElementById('chime1').play();
			cases[0] ++;
			var $newdiv = $( "<div class='letter'><div class='box'></div><div class='box south_'></div></div>");
			break;//a

			case 98:
			document.getElementById('chime2').play();
			cases[1] ++;
			var $newdiv = $( "<div class='letter'><div class='box'></div><div class='box'></div></div>" );
			break;	//b	

			case 99:
			document.getElementById('chime3').play();
			cases[2] ++;
			var $newdiv = $( "<div class='letter c'><div class='box blkborder northw'></div><div class='box blkborder southw'></div></div>" );
			break;//c

			case 100:
			document.getElementById('chime4').play();
			cases[3] ++;
			var $newdiv = $( "<div class='letter'><div class='box south_'></div><div class='box north_'></div></div>" );
			break;//d

			case 101:
			document.getElementById('chime5').play();
			cases[4] ++;
			var $newdiv = $( "<div class='letter'><div class='box east_'></div><div class='box east_'></div></div>" );
			break;	//e		

			case 102:
			document.getElementById('chime6').play();
			cases[5] ++;
			var $newdiv = $( "<div class='letter'><div class='box northw'></div><div class='box northw'></div></div>" );
			break;//f	

			case 103:
			document.getElementById('chime7').play();
			cases[6] ++;
			var $newdiv = $( "<div class='letter'><div class='box northw'></div><div class='box north_'></div></div>" );
			break;//g

			case 104:
			document.getElementById('chime8').play();
			cases[7] ++;
			var $newdiv = $( "<div class='letter'><div class='box north_'></div><div class='box south_'></div></div>" );
			break;//h

			case 105:
			document.getElementById('chime9').play();
			cases[8] ++;
			var $newdiv = $( "<div class='letter'><div class='box west'></div><div class='box west'></div></div>" );
			break;//i

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
 	$('div').toggleClass("testingbox", 500, "easeInOutQuad");
 	break;//a

 	case 1:
 	$('div').switchClass("blkborder","pnkborder", 1000, "easeInOutQuad");
 	break;//b

 	case 2:
 	$('.box').addClass("diagboth");
 	$("p").text("type D to clear the bars");
 	break;//c

 	case 3:
 	$('.box').removeClass("diagboth");
 	break;//d

 	case 4:
 	$('body').addClass("night", 1000, "easeInOutQuad");
 	$('p').addClass("nightintro", 1000, "easeInOutQuad");
	$("p").text("Feeling sleepy zzzzzZZZZ",  1000, "easeInOutQuad");
 	break;//e

 	case 5:
 	$('.box').addClass("diagleft",  1000, "easeInOutQuad");
 	break;//f

 	case 6:
 	$('.box').addClass("diagright");
 	break;//g

 	case 7:
 	$('.diagleft').removeClass("diagleft",  1000, "easeInOutQuad");
 	break;//h

 	case 8:
 	$('.diagright').toggleClass("diagright");
 	break;//i
 }


});

});


