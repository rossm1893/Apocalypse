var timeout;
var sonic = document.getElementById("ninja");
var game_container = document.getElementById("game-container");
var game_container_box = getBoundingBox(game_container);
var pops = document.getElementsByClassName("apop");
var distance = 1;
var speed = 1;  // Higher = slower
var lastDirection;
var sec = 0;
var min = 0;
var count = 0;

function moveX(x){
  var sonic_box = getBoundingBox(sonic);
  if(atTheEdge(game_container_box, sonic_box)){
	stop();
	var currentX = parseInt(sonic.style.left);
	sonic.style.left = currentX + x;
  } else {
    var currentX = parseInt(sonic.style.left);
  	sonic.style.left = currentX + x;
  	sonic.onchange();
  }
}
function moveY(y){
  var sonic_box = getBoundingBox(sonic);
  if(atTheEdge(game_container_box, sonic_box)){
    stop();
    var currentY = parseInt(sonic.style.top);
    sonic.style.top = currentY + (y * -1);
  } else {
    var currentY = parseInt(sonic.style.top);
  	sonic.style.top = currentY + y;
	sonic.onchange();
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
	

function collided(boxA, boxB) {
  var p1_within_X = false;
  var p1_within_Y = false;
  var p2_within_X = false;
  var p2_within_Y = false;

  if(boxB.left > boxA.left && boxB.left < boxA.right) {
    p1_within_X = true;
  }

  if(boxB.top > boxA.top && boxB.top < boxA.bottom) {
    p1_within_Y = true;
  }

  if(boxB.right > boxA.left && boxB.right < boxA.right) {
    p2_within_X = true;
  }

  if(boxB.bottom > boxA.top && boxB.bottom < boxA.bottom) {
    p2_within_Y = true;
  }

  if(p1_within_X && p1_within_Y || p2_within_X && p2_within_Y || p1_within_Y && p2_within_X || p1_within_X && p2_within_Y) {
    return true;
  }
}
  
function atTheEdge(boxA, boxB) {
  var x = false;
  var y = false;

  if(boxB.left == boxA.left || boxB.right == boxA.right ) {
    x = true;
  }

  if(boxB.top == boxA.top || boxB.bottom == boxA.bottom) {
    y = true;
  } 

  if(x || y) {
    return true;
  }
}

function atTheEdgeOfWater(boxA, boxB) {
  var x = false;
  var y = false;

  if(boxB.left == boxA.right || boxB.right == boxA.left ) {
    x = true;
  }

  if(boxB.top == boxA.bottom || boxB.bottom == boxA.top) {
    y = true;
  } 

  if(x || y) {
    return true;
  }
}



function moveWater() {
	var waters = waterBoxes();
	var sonic_box = getBoundingBox(sonic);
	for(var i = 0; i<waters.length; i++) {
		var wat = waters[i][0];
		var wat_box = waters[i][1];
		if(collided(wat_box, sonic_box)) {
			stop();
		}
	}
}

function waterBoxes() {
	var waterBox = document.getElementsByClassName("water");
	waters = [];

	for(var i = 0; i<waterBox.length; i++) {
		waters.push([waterBox[i], getBoundingBox(waterBox[i])]);
	}
	return waters;
}

sonic.onchange = moved;
var boxes = popsicleBoxes();

function moved() {
	moveWater();
	var sonic_box = getBoundingBox(sonic);
	for(var i = 0; i<boxes.length; i++) {
		var pop = boxes[i][0];
		var pop_box = boxes[i][1];
		if(collided(pop_box, sonic_box)){
			pop.style.display = 'none';
		}
	}
}

function popsicleBoxes(){
  var popsicles = document.getElementsByClassName('apop');
  boxes = [];

  for (var i=0; i < popsicles.length; i++) {
	boxes.push([popsicles[i], getBoundingBox(popsicles[i])]);
  }
  return boxes;
}

function getBoundingBox(element) {
  if(element.offsetParent) {
    x1 = element.offsetLeft;
    y1 = element.offsetTop;
    x2 = (element.offsetLeft + element.offsetWidth);
    y2 = (element.offsetTop + element.offsetHeight);
    return {left: x1, top: y1, right: x2, bottom: y2};
  }
}

 	var time = 0;
	var ran;
	var ploders = explodeBoxes();
	
function movePlode() {
	var sonic_box = getBoundingBox(sonic);
	for(var i = 0; i<ploders.length; i++) {
		var ex = ploders[i][0];
		var ex_box = ploders[i][1];
		if(collided(ex_box, sonic_box)) {
			//stop();
			alert("You were killed by an explosion!!!");
			window.location.reload();
		}
	}
}
function explodeBoxes() { 
	var tiles = document.getElementsByClassName("tile");
	ran = Math.floor(Math.random()*48+1);

	var	explode = tiles[ran].innerHTML = "<div class=\"explosion\"></div>";
	var exBox = document.getElementsByClassName("explosion");
	ploders = [];
	
	for(var i = 0; i<exBox.length; i++) {
		ploders.push([exBox[i], getBoundingBox(exBox[i])]);
	}
	var t = setTimeout("meteorAfter()", 3000);

	return ploders;
}
function meteorAfter() {
	var tiles = document.getElementsByClassName("tile");
	if(tiles[ran]){
		tiles[ran].className += " lava";
		if(tiles[ran].childNodes[0]){
			tiles[ran].childNodes[0].style.display = 'none';
		}
	}
}
setInterval("explodeBoxes()", 5000);
	
function timer() {
	sec++;
	if(sec == 60){
		min++;
		sec = 0;
	}
	document.getElementById("time").innerHTML = "<p id=\"timer\">Timer: " + min + " minute(s) "+ sec + " Second(s)</p>";
}
setInterval("timer()", 1000);

function win() {
	var apopWin = document.getElementsByClassName("apop");
	if(apopWin.length < 1){
		alert("You win the game with " + count + " popsicles in " + time + "seconds");
	}
}


function counter() {
	var pop_count_one = 0;
	var pop_count_two = 0;
	var f = 0;
	var get = document.getElementsByClassName("apop");
	
/* 	for(var i = 0; i<pops.length; i++) {
		pop_count_one++;
	}
	 */
	for(var k = 0; k<get.length; k++) {
		pop_count_two++;
	}
	console.log(pop_count_two);
	/* f = pop_count_one - pop_count_two; */
	document.getElementById("count").innerHTML = "<p id=\"count\">Popsicle Count: " + pop_count_two + "</p>";
}