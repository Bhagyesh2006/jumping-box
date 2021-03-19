var canvas;
var music;
var block1,block2,block3,block4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 ball=createSprite(random(20,750),100,50,60);
 ball.shapeColor=rgb(255,255,255);
ball.velocityX=4;
ball.velocityY=9;
block1=createSprite(30,580,300,30);
block1.shapeColor=rgb(255,69,0);
block2=createSprite(290,580,200,30);
block2.shapeColor=rgb(255,255,0);
block3=createSprite(500,580,210,30);
block3.shapeColor=rgb(0,128,0);
block4=createSprite(720,580,200,30);
block4.shapeColor=rgb(255,192,203);
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if (block1.isTouching(ball)&&ball.bounceOff(block1)){
   ball.shapeColor=rgb(255,69,0);
   music.play();
    }
    if (block2.isTouching(ball)){
        ball.shapeColor=rgb(255,255,0);
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
         }
         if (block3.isTouching(ball)&&ball.bounceOff(block3)){
            ball.shapeColor=rgb(0,128,0);
           // music.play();
             }
             if (block4.isTouching(ball)&&ball.bounceOff(block4)){
                ball.shapeColor=rgb(255,192,203);
               // music.play();
                 }
    //create edgeSprite
drawSprites();


    //add condition to check if box touching surface and make it box
}
