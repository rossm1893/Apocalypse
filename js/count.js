	var count = 0;
	var sec = 0;
	var min = 0;

	function doit(_fa, _sa, _fb, _sb, _id, x, y){
		if((x > _fa && x < _sa) && (y < _fb && y >= _sb)){
			document.getElementById(_id).parentNode.removeChild(document.getElementById(_id));
			count++;
			counter(count);
		}	
	}
	function apopCount(){		
		var x = parseInt(get.style.left);
		var y = parseInt(get.style.top);
	
	//	doit(375, 475, 120, 15, "second", x, y);
	//	doit(475, 575, 120, 15, "third", x, y);
	//	doit(575, 675, 120, 15, "forth", x, y);
	//	doit(675, 775, 120, 15, "first1", x, y);
	//	doit(775, 875, 120, 15, "second1", x, y);
	//	doit(875, 975, 120, 15, "third1", x, y);
	//	doit(975, 1075, 120, 15, "forth1", x, y);
		
	//	doit(375, 475, 120, 15, "first2", x, y);
	//	doit(375, 475, 120, 115, "second2", x, y);
	//	doit(375, 475, 120, 115, "third2", x, y);
	//	doit(375, 475, 120, 115, x, y);
	//	doit(375, 475, 120, 115, x, y);
	//	doit(375, 475, 120, 115, x, y);
	//	doit(375, 475, 120, 115, x, y);
	//	doit(375, 475, 120, 115, x, y);
		if((x > 375 && x < 475) && (y < 120 && y >= 15)){
			document.getElementById("second").parentNode.removeChild(document.getElementById("second"));
			count++;
			counter(count);
		}		
		if((x > 475 && x < 575) && (y < 120 && y >= 15)){
			document.getElementById("third").parentNode.removeChild(document.getElementById("third"));	
			count++;
			counter(count);			
		}
		if((x > 575 && x < 675) && (y < 120 && y >= 15)){
			document.getElementById("forth").parentNode.removeChild(document.getElementById("forth"));
			count++;
			counter(count);			
		}
		if((x > 675 && x < 775) && (y < 120 && y >= 15)){
			document.getElementById("first1").parentNode.removeChild(document.getElementById("first1"));
			count++;
			counter(count);
		}
		if((x > 775 && x < 875) && (y < 120 && y >= 15)){
			document.getElementById("second1").parentNode.removeChild(document.getElementById("second1"));
			count++;
			counter(count);
		}
		if((x > 875 && x < 975) && (y < 120 && y >= 15)){
			document.getElementById("third1").parentNode.removeChild(document.getElementById("third1"));
			count++;
			counter(count);
		}
		if((x > 975 && x < 1075) && (y < 120 && y >= 15)){
			document.getElementById("forth1").parentNode.removeChild(document.getElementById("forth1"));
			count++;
			counter(count);
		}
		
		// ************************************ BREAK ***************************************************
		
		if(x == 325 && (y < 220 && y >= 120)){
			document.getElementById("first2").parentNode.removeChild(document.getElementById("first2"));
			count++;
			counter(count);
		}
		if(x == 425 && (y < 220 && y >= 120)){
			document.getElementById("second2").parentNode.removeChild(document.getElementById("second2"));
			count++;
			counter(count);
		}
		if(x == 525 && (y < 220 && y >= 120)){
			document.getElementById("third2").parentNode.removeChild(document.getElementById("third2"));
			count++;
			counter(count);
		}
		if(x == 625 && (y < 220 && y >= 120)){
			document.getElementById("forth2").parentNode.removeChild(document.getElementById("forth2"));
			count++;
			counter(count);
		}
		if(x == 725 && (y < 220 && y >= 120)){
			document.getElementById("first3").parentNode.removeChild(document.getElementById("first3"));
			count++;
			counter(count);
		}
		if(x == 825 && (y < 220 && y >= 120)){
			document.getElementById("second3").parentNode.removeChild(document.getElementById("second3"));			
			count++;
			counter(count);
		}
		if(x == 925 && (y < 220 && y >= 120)){
			document.getElementById("third3").parentNode.removeChild(document.getElementById("third3"));
			count++;
			counter(count);
		}
		if(x == 1025 && (y < 220 && y >= 120)){
			document.getElementById("forth3").parentNode.removeChild(document.getElementById("forth3"));
			count++;
			counter(count);
		}
	
		// ************************************ BREAK ***************************************************
	
		if(x == 325 && (y < 320 && y >= 220)){
			document.getElementById("first4").parentNode.removeChild(document.getElementById("first4"));
			count++;
			counter(count);
		}
		if(x == 425 && (y < 320 && y >= 220)){
			document.getElementById("second4").parentNode.removeChild(document.getElementById("second4"));
			count++;
			counter(count);
		}
		if(x == 525 && (y < 320 && y >= 220)){
			document.getElementById("third4").parentNode.removeChild(document.getElementById("third4"));
			count++;
			counter(count);
		}
		if(x == 625 && (y < 320 && y >= 220)){
			document.getElementById("forth4").parentNode.removeChild(document.getElementById("forth4"));
			count++;
			counter(count);
		}
		if(x == 725 && (y < 320 && y >= 220)){
			document.getElementById("first5").parentNode.removeChild(document.getElementById("first5"));
			count++;
			counter(count);
		}
		if(x == 825 && (y < 320 && y >= 220)){
			document.getElementById("second5").parentNode.removeChild(document.getElementById("second5"));		
			count++;
			counter(count);
		}
		if(x == 925 && (y < 320 && y >= 220)){
			document.getElementById("third5").parentNode.removeChild(document.getElementById("third5"));
			count++;
			counter(count);
		}
		if(x == 1025 && (y < 320 && y >= 220)){
			document.getElementById("forth5").parentNode.removeChild(document.getElementById("forth5"));
			count++;
			counter(count);
		}
		
		// ************************************ BREAK ***************************************************
		
		if(x == 325 && (y < 420 && y >= 320)){
			document.getElementById("first6").parentNode.removeChild(document.getElementById("first6"));
			count++;
			counter(count);
		}
		if(x == 425 && (y < 420 && y >= 320)){
			document.getElementById("second6").parentNode.removeChild(document.getElementById("second6"));
			count++;
			counter(count);
		}
		if(x == 525 && (y < 420 && y >= 320)){
			document.getElementById("third6").parentNode.removeChild(document.getElementById("third6"));
			count++;
			counter(count);
		}
		if(x == 625 && (y < 420 && y >= 320)){
			document.getElementById("forth6").parentNode.removeChild(document.getElementById("forth6"));
			count++;
			counter(count);
		}
		if(x == 725 && (y < 420 && y >= 320)){
			document.getElementById("first7").parentNode.removeChild(document.getElementById("first7"));
			count++;
			counter(count);
		}
		if(x == 825 && (y < 420 && y >= 320)){
			document.getElementById("second7").parentNode.removeChild(document.getElementById("second7"));		
			count++;
			counter(count);
		}
		if(x == 925 && (y < 420 && y >= 320)){
			document.getElementById("third7").parentNode.removeChild(document.getElementById("third7"));
			count++;
			counter(count);
		}
		if(x == 1025 && (y < 420 && y >= 320)){
			document.getElementById("forth7").parentNode.removeChild(document.getElementById("forth7"));
			count++;
			counter(count);
		}
		
		// ************************************ BREAK ***************************************************
		
		if(x == 325 && (y < 520 && y >= 420)){
			document.getElementById("first8").parentNode.removeChild(document.getElementById("first8"));
			count++;
			counter(count);
		}
		if(x == 425 && (y < 520 && y >= 420)){
			document.getElementById("second8").parentNode.removeChild(document.getElementById("second8"));
			count++;
			counter(count);
		}
		if(x == 525 && (y < 520 && y >= 420)){
			document.getElementById("third8").parentNode.removeChild(document.getElementById("third8"));
			count++;
			counter(count);
		}
		if(x == 625 && (y < 520 && y >= 420)){
			document.getElementById("forth8").parentNode.removeChild(document.getElementById("forth8"));
			count++;
			counter(count);
		}
		if(x == 725 && (y < 520 && y >= 420)){
			document.getElementById("first9").parentNode.removeChild(document.getElementById("first9"));
			count++;
			counter(count);
		}
		if(x == 825 && (y < 520 && y >= 420)){
			document.getElementById("second9").parentNode.removeChild(document.getElementById("second9"));			
			count++;
			counter(count);
		}
		if(x == 925 && (y < 520 && y >= 420)){
			document.getElementById("third9").parentNode.removeChild(document.getElementById("third9"));
			count++;
			counter(count);
		}
		if(x == 1025 && (y < 520 && y >= 420)){
			document.getElementById("forth9").parentNode.removeChild(document.getElementById("forth9"));
			count++;
			counter(count);
		}
		
		// ************************************ BREAK ***************************************************
		
		if(x == 325 && (y < 620 && y >= 520)){
			document.getElementById("first10").parentNode.removeChild(document.getElementById("first10"));
			count++;
			counter(count);
		}
		if(x == 425 && (y < 620 && y >= 520)){
			document.getElementById("second10").parentNode.removeChild(document.getElementById("second10"));
			count++;
			counter(count);
		}
		if(x == 525 && (y < 620 && y >= 520)){
			document.getElementById("third10").parentNode.removeChild(document.getElementById("third10"));
			count++;
			counter(count);
		}
		if(x == 625 && (y < 620 && y >= 520)){
			document.getElementById("forth10").parentNode.removeChild(document.getElementById("forth10"));
			count++;
			counter(count);
		}
		if(x == 725 && (y < 620 && y >= 520)){
			document.getElementById("first11").parentNode.removeChild(document.getElementById("first11"));
			count++;
			counter(count);
		}
		if(x == 825 && (y < 620 && y >= 520)){
			document.getElementById("second11").parentNode.removeChild(document.getElementById("second11"));			
			count++;
			counter(count);
		}
		if(x == 925 && (y < 620 && y >= 520)){
			document.getElementById("third11").parentNode.removeChild(document.getElementById("third11"));
			count++;
			counter(count);
		}
		if(x == 1025 && (y < 620 && y >= 520)){
			document.getElementById("forth11").parentNode.removeChild(document.getElementById("forth11"));
			count++;
			counter(count);
		}
	}	
	function timer(){
		sec++;
		if(sec == 60){
			min++;
			sec = 0;
		}
		document.getElementById("time").innerHTML = "<p id=\"timer\">Timer: " + min + " minute(s) "+ sec + " Second(s)</p>";
	}
	setInterval("timer()", 1000);

	function win(){
		var apopWin = document.getElementsByClassName("apop");
		if(apopWin.length < 1){
			alert("You win the game with " + count + " popsicles in " + time + "seconds");
		}
	}
	function counter(f){
		document.getElementById("count").innerHTML = "<p id=\"count\">Popsicle Count: " + f + "</p>";
	}