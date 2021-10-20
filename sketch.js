var bath,bath1Image,bath2,bath2Image;
var bg,bgImage;
var buush,brushImage;
var drink,drinkImage,drink2,drink2Image;
var eat1,eat1Image,eat2,eat2Image;
var gym1,gym1Image,gym11,gym11Image,gym12,gym12Image,gym2,gym2Image;
var move,moveImage,move1Image;
var sleep,sleepImage;


function preloadImage(){
 bg=loadImage("iss.png");
sleep=loadImage('sleep.png');
 brush=loadImage('brush.png');
  bath=loadAnimation('bath1.png","bath2.png'); 
  gym=loadAnimation('bath1.png","bath11.png","bath12.png","bath2.png');
 eat=loadAnimation('eat1.png","eat2.png');
  drink=loadAnimation('drink1.png","drink2.png');
  move=loadAnimation('move.png","move1.png');
  
  
  
}

function setup() {
createCanvas(400,400);

  astronut=createSprite(200,30,10,10)
astronut.addImage(sleep);










}

function draw() {
  
  background('black');
  drawSprites();
}