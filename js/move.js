	
	var timeout;
	var get = document.getElementById("ninja");
	var distance = 5;
	var speed = 40;  // Higher == slower
	var lastDirection;

	function moveX(x){
		var currentX = parseInt(get.style.left);
		var imageWidth = parseInt(get.style.width);
		get.style.left = currentX + x;
		if (currentX < 295){ 
			stop();
		} 
		else if (currentX > 1025){  
			stop();  
		}
		apopCount();
	}
	function moveY(y){
		var currentY = parseInt(get.style.top);
		var imageHeight = parseInt(get.style.height);
		get.style.top = currentY + y;
		if (currentY < 20){ 
			stop();  
		} 
		else if (currentY > 510){  
			stop();  
		}
	}
	function move(direction){
		switch(direction){
			case 'E': 
				func = moveE;
				break;
			case 'W': 
				func = moveW;
				break;
			case 'S': 
				func = moveS;
				break;
			case 'N': 
				func = moveN;
				break;
			case 'NE': 
				func = moveNE;
				break;
			case 'NW': 
				func = moveNW;
				break;
			case 'SE': 
				func = moveSE;
				break;
			case 'SW': 
				func = moveSW;
				break;
			default: 
				alert('Does not work');
				break;
		}
		stop();
		go(func);
	}
	function go(func){
		lastDirection = func;
		timeout = setInterval(func,speed); 		
	}
	function goLastDirection(){
		go(lastDirection);
	}
	function moveE(){
		moveX(distance);
	}
	function moveW(){
		moveX(-distance);
	}
	function moveS(){
		moveY(distance);
	}
	function moveN(){
		moveY(-distance);
	}
	function moveNE(){
		moveX(distance);
		moveY(-distance);
	}
	function moveNW(){
		moveX(-distance);
		moveY(-distance);		
	}
	function moveSW(){
		moveX(-distance);
		moveY(distance);
	}
	function moveSE(){
		moveX(distance);
		moveY(distance);
	}
	function stop(){
		clearTimeout(timeout);
	}