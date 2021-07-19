var ship, ship1
var sea ,sea1 
function preload(){
     ship1 =loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png") 
     sea1 = loadAnimation(sea.png)
}

function setup(){
    createCanvas(600,500);
} 
    //creating the sea 
    sea = createSprite(600,300,20,20);
    sea.addAnimation("running",sea1)
    sea.scale=0.5;
    sea.velocityX = -1;
    
//creating the ship 
    ship = createSprite(50,200,20,50);
    ship.addImage("running",ship1);
    edges = createEdgeSprites();

//adding scale and position to the ship 
    ship.scale = 0.25;
    ship.x = 90;
    ship.y = 300;

     //creating invisible ground
     invisibleSea = createSprite(200,190,400,10);
     invisibleSea.visible = false;


function draw(){
    background("blue");
    spriteName.addimage(seaImg);
    if(keyDown("space")){
        ship.velocityY = -10;
    }

    ship.velocityY = ship.velocityY + 0.8
  
  if (sea.x < 0){
  sea.x = sea.width/2;
  }
    //stop Ship from falling down 
  ship.collide(invisibleSea)
  drawSprites();  
}


