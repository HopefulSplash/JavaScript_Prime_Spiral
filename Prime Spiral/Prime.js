let x,y
let step = 1;
let stepSize= 5;
let state = 0;
let stepNum = 1;
let turnCounter = 1;
let totalSteps;

function setup() {
  createCanvas(500, 500);
  
  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  
  
  x = width /2;
  y = height /2;
  px = x;
  py = y; 
    background(0);

}

function isPrime(value){
  let prime = true;
  if (value == 1){
    return false;
  }
  for (let i = 2; i <= sqrt(value); i++){
    if (value % i == 0){
      prime = false;
      break;
    }
  }
  return prime;
}

function draw() {
  
  if (step <= totalSteps){
    //textSize(10);
    //textAlign(CENTER, CENTER);
    //fill(255);
    //text(step, x,y);
    
    //fill(45)
    //stroke(255);
    //rectMode(CENTER);
    //rect(x,y,stepSize);
    
    if (isPrime(step)){
      stroke(255,122,122);
      fill(255);
      circle(x,y,stepSize*0.25);

    }
    else{
      fill(55); 
      stroke(0); 
      circle(x,y,stepSize*0.25);

    }
    
    
    px = x;
    py = y;

    
    switch (state){
      case 0:
        x += stepSize;
        break;
      case 1:
        y -= stepSize;
        break;
      case 2:
        x -= stepSize;
        break;
      case 3:
        y += stepSize;
        break;
      
  }

  
  if (step % stepNum == 0){
    state = (state +1) % 4;
    turnCounter ++;
    if (turnCounter % 2 == 0){
      stepNum++;
    }
  }
    step ++;
  
  }
  else{
    noLoop();
  }
}