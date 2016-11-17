var caseA = 0, caseB = 0, caseC = 0, caseD = 0, caseE = 0, 
caseF = 0, caseG = 0, caseH = 0, caseI = 0, caseJ = 0, 
caseK = 0, caseL = 0, caseM = 0, caseN = 0, caseO = 0, 
caseP = 0, caseQ = 0, caseR = 0, caseS = 0, caseT = 0, 
caseU = 0, caseV = 0, caseW = 0, caseX = 0, caseY = 0, 
caseZ = 0, th = 2;
var cases = [caseA, caseB, caseC, caseD, caseE, 
caseF, caseG, caseH, caseI, caseJ, caseK, 
caseL, caseM, caseN, caseO, caseP, caseQ, 
caseR, caseS, caseT, caseU, caseV, caseW, 
caseX, caseY, caseZ, th];


$(document).ready(function(){

	//delete
	$('html').keyup(function(e){
		if(e.keyCode == 8){
			$('div.letter').last().remove();
		}
	}) 	

	$('html').keyup(function(e){
		if(e.keyCode == 13){
			var $newdiv = $("<div class='letter return'></div>");
			$('body').append($newdiv);
		}
	}) 

 	//typing
 	$('html').keypress(function(e) {
 		var chime = 1 + Math.floor(Math.random() * 9);
 		var sound =	document.getElementById("chime"+chime);
 		var bgm =	document.getElementById("bgm");

 		switch (e.keyCode) {
 			case 32:
 			var $newdiv = $("<div class='letter space'><div class='box2 none'></div><div class='box2 none'></div></div>");
 			$('.space').css('background-color',"none");
			break;//spacebar

//a-g
case 97:
sound.play();
cases[0] ++;
var $newdiv = $("<div class='letter'><div class='box upper '></div><div class='box lower south_'></div></div>");
			break;//a

			case 98:
			sound.play();
			cases[1] ++;
			var $newdiv = $("<div class='letter'><div class='box upper northw diagright'></div><div class='box lower '></div></div>" );
			break;//b	

			case 99:
			sound.play();
			cases[2] ++;
			var $newdiv = $("<div class='letter c'><div class='box upper blkborder northw'></div><div class='box lower blkborder southw'></div></div>" );
			break;//c

			case 100:
			sound.play();
			cases[3] ++;
			var $newdiv = $("<div class='letter'><div class='box upper west diagleft'></div><div class='box lower west diagright'></div></div>" );
			break;//d

			case 101:
			sound.play();
			cases[4] ++;
			var $newdiv = $("<div class='letter'><div class='box e upper east_'></div><div class='box e lower east_'></div></div>" );
			break;//e		

			case 102:
			sound.play();
			cases[5] ++;
			var $newdiv = $("<div class='letter'><div class='box f upper east_'></div><div class='box f lower west'></div></div>" );
			break;//f	

			case 103:
			sound.play();
			cases[6] ++;
			var $newdiv = $("<div class='letter'><div class='box upper northw'></div><div class='box lower north_'></div></div>" );
			break;//g
//h-n
case 104:
sound.play();			
cases[7] ++;
var $newdiv = $("<div class='letter'><div class='box upper north_'></div><div class='box lower south_'></div></div>" );
			break;//h

			case 105:
			sound.play();
			cases[8] ++;
			var $newdiv = $("<div class='letter'><div class='box i upper west'></div><div class='box i lower west'></div></div>" );
			break;//i

			case 106:
			sound.play();
			cases[9] ++;
			var $newdiv = $("<div class='letter'><div class='box upper east'></div><div class='box lower north_'></div></div>" );
			break;//j

			case 107:
			sound.play();
			cases[10] ++;
			var $newdiv = $("<div class='letter'><div class='box upper west diagright'></div><div class='box lower west diagleft'></div></div>" );
			break;//k

			case 108:
			sound.play();
			cases[11] ++;
			var $newdiv = $("<div class='letter'><div class='box upper west'></div><div class='box lower southw'></div></div>" );
			break;//l

			case 109:
			bgm.play();
			bgm.loop = true;
			bgm.volume = .3;
			cases[12] ++;
			var $newdiv = $("<div class='letter'><div class='box m upper south diagleft'></div><div class='box m lower south diagleft'></div></div>" );
			break;//m

			case 110:
			sound.play();
			cases[13] ++;
			var $newdiv = $("<div class='letter'><div class='box upper east diagleft'></div><div class='box lower west diagleft'></div></div>" );
			break;//n
//o-t
case 111:
sound.play();
cases[14] ++;
var $newdiv = $("<div class='letter'><div class='box upper none bgRed'></div><div class='box lower none bgRed'></div></div>" );
			break;//o

			case 112:
			sound.play();
			cases[15] ++;
			var $newdiv = $("<div class='letter'><div class='box upper '></div><div class='box lower northw'></div></div>" );
			break;//p

			case 113:
			cases[16] ++;
			var $newdiv = $("<div class='letter'><div class='box upper south_'></div><div class='box lower southe'></div></div>" );
			break;//q

			case 114:
			sound.play();
			cases[17] ++;
			var $newdiv = $("<div class='letter'><div class='box upper '></div><div class='box lower west diagleft'></div></div>" );
			break;//r

			case 115:
			sound.play();
			cases[18] ++;
			var $newdiv = $("<div class='letter'><div class='box upper east_'></div><div class='box lower west_'></div></div>" );
			break;//s

			case 116:
			sound.play();
			cases[19] ++;
			var $newdiv = $("<div class='letter'><div class='box upper northw'></div><div class='box lower west'></div></div>" );
			break;//t
//u-z
case 117:
sound.play();
cases[20] ++;
var $newdiv = $("<div class='letter'><div class='box upper eastwest'></div><div class='box lower north_'></div></div>" );
			break;//u

			case 118:
			sound.play();
			cases[21] ++;
			var $newdiv = $("<div class='letter'><div class='box upper eastwest'></div><div class='box lower none diagboth'></div></div>" );
			break;//v

			case 119:
			sound.play();
			cases[22] ++;
			var $newdiv = $("<div class='letter'><div class='box upper south diagright'></div><div class='box lower south diagright'></div></div>" );
			break;//w

			case 120:
			sound.play();
			cases[23] ++;
			var $newdiv = $("<div class='letter'><div class='box upper diagboth none'></div><div class='box lower south'></div></div>" );
			break;//x

			case 121:
			sound.play();
			cases[24] ++;
			var $newdiv = $("<div class='letter'><div class='box upper north_'></div><div class='box lower west_'></div></div>" );
			break;//y

			case 122:
			sound.play();
			cases[25] ++;
			var $newdiv = $("<div class='letter'><div class='box upper north diagright'></div><div class='box lower south diagright'></div></div>" );
			break;//z

//letters
case 48:
sound.play();
var $newdiv = $("<div class='letter'><div class='box2 south_'></div><div class='box2 north_'></div></div>" );
			break;//0

			case 49:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 east'></div><div class='box2 east'></div></div>" );
			break;//1

			case 50:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 west_'></div><div class='box2 east_'></div></div>" );
			break;//2

			case 51:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 west_'></div><div class='box2 west_'></div></div>" );
			break;//3

			case 52:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 north_'></div><div class='box2 east'></div></div>" );
			break;//4

			case 53:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 east_'></div><div class='box2 west_'></div></div>" );
			break;//5

			case 54:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 east_'></div><div class='box2 '></div></div>" );
			break;//6

			case 55:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 northe'></div><div class='box2 east'></div></div>" );
			break;//7

			case 56:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2'></div><div class='box2'></div></div>" );
			break;//8

			case 57:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2'></div><div class='box2 west_'></div></div>" );
			break;//9

//puctuation
case 33:
sound.play();
cases[36] ++;
var $newdiv = $("<div class='letter'><div class='box2 west'></div><div class='box2 west diagboth'></div></div>" );
			break;//!

			case 63:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 west_'></div><div class='box2 west diagboth'></div></div>" );
			break;//?			

			case 34:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 eastwest'></div><div class='box2 none'></div></div>" );
			break;//"			

			case 39:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 west'></div><div class='box2 none'></div></div>" );
			break;//'

			case 44:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 none'></div><div class='box2 none diagright'></div></div>" );
			break;//,

			case 46:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 none'></div><div class='box2 none diagboth'></div></div>" );
			break;//.

			case 45:
			sound.play();
			var $newdiv = $("<div class='letter'><div class='box2 none'></div><div class='box2 north'></div></div>" );
			break;//.
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
 // console.log('mostIndex: ' + mostIndex);



 switch (mostIndex){
	//a-g
	case 0:
	$('.box').css({
		borderColor : 'red',
		transition : '1s ease-in-out'
	});
	$("p").text("so proud to be myself XD");
 	break;//a

 	case 1:
 	$('.upper').removeClass("diagboth diagleft").addClass("diagright");
 	$("p").text("this awkward feeling :-<");
 	break;//b

 	case 2:
 	$('.box').removeClass("diagboth diagright diagleft");
 	$("p").text("keep everything clean, okay? :-0");
 	break;//c

 	case 3:
 	$('.upper').removeClass("diagboth diagright").addClass("diagleft");
 	$('.lower').removeClass("diagboth diagleft").addClass("diagright");
 	$("p").text("go this way >>");
 	break;//d

 	case 4:
 	$('.box').css({
 		opacity : '.3',
 		transition : '1s ease-in-out'
 	});
 	$('.e').css({
 		opacity : '1',
 		transition : '1s ease-in-out'
 	});
 	$("p").text("Why am I so prefect ?_?");
 	break;//e

 	case 5:
 	$('.box').css({
 		opacity : '1',
 		transition : '1s ease-in-out'
 	});
 	$('.e').css({
 		opacity : '0',
 		transition : '1s ease-in-out'
 	});
 	$("p").text("E is just stupid -.-");
 	break;//f

 	case 6:
 	$('.e.lower').removeClass("east_").addClass("west");
 	$('.f.lower').removeClass("west").addClass("east_");
 	$("p").text("E & F look the same to me");
 	break;//g

//h-n
case 7:
$('.box').css({
	borderColor : 'gray',
	transition : '1s ease-in-out'
});;
$("p").text("want to lie down :-{");
	break;//h

	case 8:
	$('.east').toggleClass("west east",500);
	$('.west').toggleClass("east west",500);
	$("p").text("I like moving around :-p");
 	break;//i

 	case 9:
 	$('.box').css({
 		borderColor : 'lightgray',
 		transition : '1s ease-in-out'
 	});
 	$("p").text("where is my hat :`<");
 	break;//j

 	case 10:
 	$('.upper').removeClass("diagboth diagleft").addClass("diagright");
 	$('.lower').removeClass("diagboth diagright").addClass("diagleft");
 	$("p").text("<< go this way");
 	break;//k

 	case 11:
 	$('.box').removeClass("diagboth diagleft diagright borderRed");
 	$("p").text("relax =l=");
 	break;//l

 	case 12:
 	$("audio").prop('muted', false);
 	bgm.volume = 1;
 	sound.volume = 0;
 	$("p").text("I like music and sound <3");
 	break;//m

 	case 13:
 	$('.box').removeClass("diagboth diagright").toggleClass("diagleft").css({
 		borderColor : 'ghostwhite',
 		transition : '1s ease-in-out'
 	});;
 	$("p").text("headache Q-Q");
 	break;//n

//o-t
case 14:
$("body").css({
	backgroundColor : 'red',
	transition : '1s ease-in-out'
});
$("p").text("my favorite color is");
 	break;//o

 	case 15:
 	$(".upper").css({
 		backgroundColor : 'ghostwhite',
 		transition : '1s ease-in-out'
 	});
 	$("p").text("Can you see...(((=O=;)))");
 	break;//p

 	case 16:
 	$('.m').removeClass('diagleft');
 	$("audio").prop('muted', true);
 	$("p").text("shut up");
 	break;//q

 	case 17:
 	$('body').removeClass();
 	$('.box').removeClass();
 	$("p").text("start fresh (*`-`*)");
 	break;//r

 	case 18:
 	$("body").css({
 		backgroundColor : 'black',
 		transition : '1s ease-in-out'
 	});
 	$("p").text("feeling sleepy zzzzZZZZ").css("color", "white");
 	break;//s

 	case 19:
 	$(".box").css({
 		opacity : '.1',
 		transition : '1s ease-in-out'
 	});
 	$("p").text("...").css( "opacity", ".5" );
	break;//t

	case 20:
	$('body').css("background-color","gray");
	$('.box').css("border-color","silver");
	$("p").text("what's going on 0-0").css("color","silver");
	break;//u

	case 21:
	$('.lower').addClass('diagboth');
	$("p").text("feeling unstable :-/"); 	
 	break;//v

 	case 22:
 	$("body").css("background-color", "white");
 	$("p").text("time to wake :-D").css( "color", "black" );
 	break;//w

 	case 23:
 	$('.lower').css({
 		borderColor : 'red',
 		transition : '1s ease-in-out'
 	});
 	$('.upper').addClass("diagboth");
 	$('.lower').removeClass().addClass('south box');
 	$("p").text("got food poisoning... otz");
 	break;//x

 	case 24:
 	$("p").text("too tired to do anything =3=");
 	break;//y

 	case 25:
 	$(".box").css({
 		borderColor : 'blue',
 		transition : '1s ease-in-out'
 	});
 	$("p").text("once in a blue moon").css("color", "blue");
 	break;//z

 	case 26:
 	break;//threshold
 }
});
});


