var USA,buffalo,sanfrancisco, lasvegas, losangeles, italy,europe, bahama,prague,paris,miami,neworleans,boston;
var papaandme;
var dad1,dad2,dad3,dad4,dad5,dad6,dad7,dad8,dad9,dad10,dad11,dad12;
function preload(){
  map=loadImage("map.jpg")
  papaandme=loadImage("papa.jpg")
  dad1=loadImage("dad1.JPG")
  dad2=loadImage("dad2.JPG")
  dad3=loadImage("dad3.png")
  dad4=loadImage("dad4.png")
  dad5=loadImage("dad5.png")
  dad6=loadImage("dad6.png")
  dad7=loadImage("dad7.JPG")
  dad8=loadImage("dad8.JPG")
  dad9=loadImage("dad9.JPG")
  dad10=loadImage("dad10.JPG")
  dad11=loadImage("dad11.JPG")
  dad12=loadImage("dad12.png")


}
function setup() {
  createCanvas(displayWidth,displayHeight);
  
  sanfrancisco=createSprite(29,340,10,10);
  buffalo=createSprite(360,306,10,10);
  losangeles=createSprite(26,304,10,10);
  italy=createSprite(940,341,10,10);
  europe=createSprite(950,267,10,10);
  bahama=createSprite(394,516,10,10);
  prague=createSprite(833,362,10,10);
  paris=createSprite(882,327,10,10);
  lasvegas=createSprite(434,237,10,10);
  miami=createSprite(323,435,10,10);
  neworleans=createSprite(407,281,10,10);
  boston=createSprite(332,472,10,10);
}

function draw() {
  background(map);
  drawSprites();
  text(mouseX+" , "+mouseY,mouseX,mouseY);
  textSize (40)
  fill("yellow")
  text("PRESS ON THE RIGHT PLACES TO SEE THE IMAGE WITH MY DAD ",400,100)
  if(mousePressedOver(sanfrancisco)){
  sanfrancisco.addImage("dad6",dad6);
  sanfrancisco.scale=0.4
  }
  if(mousePressedOver(buffalo)){
    buffalo.addImage("dad5",dad5);
    buffalo.scale=0.05

  }
  if(mousePressedOver(losangeles)){
    losangeles.addImage("dad2,",dad2);
    losangeles.scale=0.04

  }
  if(mousePressedOver(italy)){
    
    

  }
  if(mousePressedOver(europe)){
    

  }
  if(mousePressedOver(bahama)){
    bahama.addImage("dad10",dad10);
    bahama.scale=0.04

  }
  if(mousePressedOver(prague)){


  }
  if(mousePressedOver(paris)){
    paris.addImage("dad9",dad9);
    paris.scale=0.04
    
  }
  if(mousePressedOver(lasvegas)){

  }
  if(mousePressedOver(miami)){
    miami.addImage("dad11",dad11);
    miami.scale=0.04

  }
  if(mousePressedOver(neworleans)){
    neworleans.addImage("dad4",dad4);
    neworleans.scale=0.05

  }
  if(mousePressedOver(boston)){

  }
 
  

}
