var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bckground, backgroundImg;
var  bird, bird2, birdImg, bird2Img
var plane, planeImg;

var restart, restartImg;
var gameOver, gameOverImg;

var score

function preload(){
   
    backgroundImg = loadImage("background.png");
    birdImg = loadImage("bird.png");
    bird2Img = loadImage("bird2.png")
    planeImg = loadImage("plane.png");
    gameOverImg = loadImage("gameover.png");
  restartImg =  loadImage("restart.PNG")
}

function setup() {
   
  createCanvas(windowWidth,windowHeight);

  bckground = createSprite(0,0,900,900)
  bckground.addImage(backgroundImg);

    plane = createSprite(100,100,30,30);
    plane.addImage(planeImg);
    plane.scale = 0.07

    gameOver = createSprite(300,100);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.07

    restart = createSprite(300,140);
    restart.addImage(restartImg);
    restart.scale = 0.5

    birdsGroup = new Group();
 
   score = 0;

}

function draw() {

  console.log("1")
  background(0)
  text("Score : "+ score, 500,50);

  console.log("2")
    if(gameState === PLAY){
      gameOver.visible = false;
      restart.visible = false;

      score = score + Math.round(getFrameRate()/60);

      console.log("3")
    if(bckground.x>0){
       bckground.x = bckground.width/2;
    }
    console.log("4")
    spawnBirds();
    plane.y = World.mouseY
    console.log("5")
    if(plane.isTouching(birdsGroup)){
        gameState = END;
      
    }
  }
  

 else if(gameState === END){
  console.log("6")
    gameOver.visible = true;
    restart.visible = true;

    bckground.velocityX = 0;
    plane.velocityY = 0;
 }

 drawSprites();
}

function spawnBirds () {
var select_sprites = Math.round(random(1,2));

if(frameCount % 80){
  if (select_sprites == 1){
   bird = createSprite(40,Math.round(random(50,150)),15,15);
   bird.addImage(birdImg);
   bird.scale = 0.5
   bird.velocityX = -3;
   
  } else if(select_sprites == 2){
    bird2 = createSprite(40,Math.round(random(50,150)),15,15);
    bird2.addImage(bird2Img);
    bird2.velocityX = -3;
    bird2.scale = 0.5
  }

} 
  

}