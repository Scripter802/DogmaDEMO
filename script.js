

//INPUT MANAGER
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    if(goingRight)
    	GoLeft();
    else
    	GoRight();
  }
})


//MOVEMENT VALUES
var bucket = document.getElementById("bucket");
var leftValue = 0;
var bottleDropSpeed = 1;
var increaseValue = 1.5;
var goingRight = true;
var frameRepeat = 10;

//Moving Functions -------------------------------------
function Move(){
    if(leftValue <= 360 && goingRight)
       GoRight();
    else
       GoLeft();
    
    if(leftValue <= 1 && goingRight == false)
       GoRight();    
}
function GoRight(){
    goingRight=true;
    leftValue = leftValue + increaseValue;
    bucket.style.marginLeft = leftValue + "px";
}
function GoLeft(){
	goingRight=false;
    leftValue = leftValue - increaseValue;
    bucket.style.marginLeft = leftValue + "px";
}


StartSpawning();
var intervalId = window.setInterval(function(){Move();}, frameRepeat);
//Moving Functions -------------------------------------


function StartSpawning() {
randomInterval(RandomBottleSpawning,1000,5000);
}


function RandomBottleSpawning(){
   var randPosition = Math.floor(Math.random() * 7) + 1;
   var randSpeed = (Math.random() * 1.1) + 0;
   SpawnBottle(randPosition, randSpeed);
}

function randomInterval(callback, min, max) {
    let timeout;

    const randomNum = (max, min = 0) => Math.random() * (max - min) + min;

    const stop = () => clearTimeout(timeout)

    const tick = () => {
        let time = randomNum(min, max);
        stop();

        timeout = setTimeout(() => {
            tick();
            callback && typeof callback === "function" && callback(stop);
        }, time)
    }

    tick();
}


function SpawnBottle(position, speedMultiplier){
   var bttl = document.createElement("div") ;
   bttl.classList.add('bottle');
   spawnPoints.appendChild(bttl);

   switch(position){
        case 1:
      bttl.style.marginLeft = 2.5 + "%";
            bttl.style.marginTop = .5 + "%";
    break;
        case 2:
      bttl.style.marginLeft = 12.5 + "%";
            bttl.style.marginTop = .5 + "%";
    break;
        case 3:
      bttl.style.marginLeft = 22.5 + "%";
            bttl.style.marginTop = .5 + "%";
    break;
        case 4:
      bttl.style.marginLeft = 32.5 + "%";
            bttl.style.marginTop = .5 + "%";
    break;
        case 5:
      bttl.style.marginLeft = 42.5 + "%";
            bttl.style.marginTop = .5 + "%";
    break;
        case 6:
      bttl.style.marginLeft = 52.5 + "%";
            bttl.style.marginTop = .5 + "%";
    break;
        case 7:
      bttl.style.marginLeft = 62.5 + "%";
            bttl.style.marginTop = .5 + "%";
    break;
   }

    var intervalBottleMove = window.setInterval(function(){MoveBottlesDown(bttl, speedMultiplier)}, frameRepeat);
}


function MoveBottlesDown(bottleToTrack, speed){
  var topValue = parseInt(bottleToTrack.style.marginTop);
  bottleToTrack.style.marginTop = (topValue + bottleDropSpeed + speed) +"px";
   if(isInViewport(bottleToTrack) == false)
       setTimeout(function(){ bottleToTrack.remove(); },1000);
}


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}










