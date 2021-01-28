//Create variables here
var foodS
function preload()
{
  dogImg1= loadImage("images/dogImg.png")
  dogImg2= loadImage("images/dogImg1.png")
}

function setup() {
  database= firebase.database();
	createCanvas(800, 700);
dog = createSprite(250,300,150,150)
dog.addImage(dogImg1);
dog.scale= 0.15;


foodStock = database.ref("Food")
foodStock.on("value",readStock);
textSize(20);

}


function draw() {  
background("lightblue");
if (keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg2)
}
  drawSprites();
  fill("blue")
  text("food remaining " + foodS,300,290);
  text("press Up arrow key to feed the dog", 250,100);

}
function readStock(data){
foodS= data.val();
}
function writeStock(x){
if (x <= 0){
  x = 0 
}
else{
  x = x - 1;
}
database.ref("/").update({Food : x })
}



