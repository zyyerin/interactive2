var caseA = 0, caseB = 0, caseC = 0, caseD = 0, caseE = 0, 
caseF = 0, caseG = 0, caseH = 0, caseI = 0, caseJ = 0, 
caseK = 0, caseL = 0, caseM = 0, caseN = 0, caseO = 0, 
caseP = 0, caseQ = 0, caseR = 0, caseS = 0, caseT = 0, 
caseU = 0, caseV = 0, caseW = 0, caseX = 0, caseY = 0, 
caseZ = 0;
var cases = [caseA, caseB, caseC, caseD, caseE, 
caseF, caseG, caseH, caseI, caseJ, caseK, 
caseL, caseM, caseN, caseO, caseP, caseQ, 
caseR, caseS, caseT, caseU, caseV, caseW, 
caseX, caseY, caseZ];

//console.log(cases.length);

$(document).ready(function(){

$( "p" ).click(function() {
	console.log("Feeling the click :-D");
 	$("p").fadeTo(0.5);

});


	$('body').keypress(function(e) {



		switch (e.which) {
			case 32:
			var $newdiv = $( "<div class='letter'><div class='box borderBlack none space'></div><div class='box borderBlack none space'></div></div>");
			break;//a

			case 97:
			document.getElementById('chime1').play();
			cases[0] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack'></div><div class='box borderBlack south_'></div></div>");
			break;//a

			case 98:
			document.getElementById('chime2').play();
			cases[1] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack'></div><div class='box borderBlack'></div></div>" );
			break;	//b	

			case 99:
			document.getElementById('chime3').play();
			cases[2] ++;
			var $newdiv = $( "<div class='letter c'><div class='box borderBlack blkborder northw'></div><div class='box borderBlack blkborder southw'></div></div>" );
			break;//c

			case 100:
			document.getElementById('chime4').play();
			cases[3] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack south_'></div><div class='box borderBlack north_'></div></div>" );
			break;//d

			case 101:
			document.getElementById('chime5').play();
			cases[4] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack east_'></div><div class='box borderBlack east_'></div></div>" );
			break;	//e		

			case 102:
			document.getElementById('chime6').play();
			cases[5] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack northw'></div><div class='box borderBlack northw'></div></div>" );
			break;//f	

			case 103:
			document.getElementById('chime7').play();
			cases[6] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack northw'></div><div class='box borderBlack north_'></div></div>" );
			break;//g

			case 104:
			document.getElementById('chime8').play();
			cases[7] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack north_'></div><div class='box borderBlack south_'></div></div>" );
			break;//h

			case 105:
			document.getElementById('chime9').play();
			cases[8] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack west'></div><div class='box borderBlack west'></div></div>" );
			break;//i

			case 106:

			cases[9] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack east'></div><div class='box borderBlack north_'></div></div>" );
			break;//j

			case 107:

			cases[10] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack north_'></div><div class='box borderBlack south_'></div></div>" );
			break;//k

			case 108:

			cases[11] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack west'></div><div class='box borderBlack southw'></div></div>" );
			break;//l

			case 109:

			cases[12] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack west_'></div><div class='box borderBlack west_'></div></div>" );
			break;//m

			case 110:

			cases[13] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack south_'></div><div class='box borderBlack eastwest'></div></div>" );
			break;//n

			case 111:

			cases[14] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack south_'></div><div class='box borderBlack north_'></div></div>" );
			break;//o

			case 112:

			cases[15] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack'></div><div class='box borderBlack northw'></div></div>" );
			break;//p

			case 113:

			cases[16] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack'></div><div class='box borderBlack east'></div></div>" );
			break;//q

			case 114:

			cases[17] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack'></div><div class='box borderBlack south_'></div></div>" );
			break;//r

			case 115:

			cases[18] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack east_'></div><div class='box borderBlack west_'></div></div>" );
			break;//s

			case 116:

			cases[19] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack southw'></div><div class='box borderBlack southw'></div></div>" );
			break;//t

			case 117:

			cases[20] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack eastwest'></div><div class='box borderBlack north_'></div></div>" );
			break;//u

			case 118:

			cases[21] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack eastwest'></div><div class='box borderBlack north_'></div></div>" );
			break;//v

			case 119:

			cases[22] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack east_'></div><div class='box borderBlack east_'></div></div>" );
			break;//w

			case 120:

			cases[23] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack north_'></div><div class='box borderBlack south_'></div></div>" );
			break;//x

			case 121:

			cases[24] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack north_'></div><div class='box borderBlack west_'></div></div>" );
			break;//y

			case 122:

			cases[25] ++;
			var $newdiv = $( "<div class='letter'><div class='box borderBlack west_'></div><div class='box borderBlack east_'></div></div>" );
			break;//z
			//case 106:

			// cases[9] ++;
			// var $newdiv = $( "<div class='letter'><div class='box borderBlack west'></div><div class='box borderBlack west'></div></div>" );
			// break;//


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
 	$('.box').removeClass("borderWhite");
 	$('.box').removeClass("borderBlack");
 	$('.box').addClass("borderRed", 1000, "easeInOutQuad");
 	$("p").text("so proud to be myself XD");
 	break;//a

 	case 1:
 	$('.box').removeClass("borderRed");
 	$('.box').removeClass("borderBlack");
 	$('.box').addClass("borderWhite", 1000, "easeInOutQuad");
 	$("p").text("shut up");
 	break;//b

 	// case 1:
 	// $('.box').addClass("diagright");
 	// break;//b

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
 	$('.box').addClass("diagleft", 1000, "easeInOutQuad");
 	break;//f

 	case 6:
 	$('.box').addClass("diagright");
 	break;//g

 	case 7:
 	$('.diagleft').removeClass("diagleft", 1000, "easeInOutQuad");
 	break;//h

 	case 8:
 	$('.diagright').toggleClass("diagright");
 	break;//i
 }


});

});


