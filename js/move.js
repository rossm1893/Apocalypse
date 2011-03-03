var timeout;
var sonic = document.getElementById("ninja");
var game_container = document.getElementById("game-container");
var game_container_box = getBoundingBox(game_container);
var distance = 2;
var speed = 5;  // Higher == slower
var lastDirection;

function moveX(x){
  var sonic_box = getBoundingBox(sonic);
  if(atTheEdge(game_container_box, sonic_box)){
	  stop();
	  var currentX = parseInt(sonic.style.left);
	  console.log(currentX + (x * -1));
	  sonic.style.left = currentX + (x * -1);
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

  if(boxB.left == boxA.left || boxB.right == boxA.right) {
    x = true;
  }

  if(boxB.top == boxA.top || boxB.bottom == boxA.bottom) {
    y = true;
  }
  
  if(x || y) {
    return true;
  }
}

sonic.onchange = moved;

var boxes = popsicleBoxes();

function moved() {
  var sonic_box = getBoundingBox(sonic);

  for (var i=0; i < boxes.length; i++) {
    var pop = boxes[i][0];
    var pop_box = boxes[i][1];
    if(collided(pop_box, sonic_box)){
      pop.style.display = 'none';
    }
  }
}

function popsicleBoxes(){
  var popsicles = document.getElementsByClassName('apop');
  var boxes = [];

  for (var i=0; i < popsicles.length; i++) {
    boxes.push([popsicles[i], getBoundingBox(popsicles[i])]);
  }
  return boxes;
}

function getBoundingBox(element) {
  if(element.offsetParent) {
    x1 = element.offsetLeft;
    y1 = element.offsetTop;
    x2 = element.offsetLeft + element.offsetWidth;
    y2 = element.offsetTop + element.offsetHeight;
    return {left: x1, top: y1, right: x2, bottom: y2};
  }
}