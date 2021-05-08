
var database
var a,b,c
function preload(){

a=loadImage("jungle.jpg")
b=loadImage("bc.jpg")
c=loadImage("image.jpg")

}
function setup(){
    createCanvas(displayWidth,displayHeight);
    
    database=firebase.database()
  form=new Form()
  form.Display()

}

function draw(){
    background(b);
 
    drawSprites();
}


