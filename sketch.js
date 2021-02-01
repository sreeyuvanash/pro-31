const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bacimg,man,manImg,thunImg,rain1,drop;

function preload(){
    bacimg=loadImage("NIght.jpg")
    manImg= loadAnimation("walking_1.png","walking_2.png",
    "walking_3.png","walking_4.png",
    "walking_6.png","walking_7.png");

    thunImg = loadAnimation("1.png","2.png",
                            "3.png","4.png");

    drop = loadImage("drop0.png")
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    rain1 = new Rain (200,200,5)


    man = createSprite(-100,400,20,20)
    man.scale=0.3
    man.addAnimation("manImg",manImg)
    man.velocityX=2

}

function draw(){
    background(bacimg);
    Engine.update(engine);

  //  rain1.display();

    if(man.x>1200){

        man.x=-10

    }

    drawSprites();
    thunder()
    rain()

}   
function thunder(){

    if (frameCount % 100 === 0){

        var thun = createSprite(100,100,40,40)
        thun.x = Math.round(random(80,1000));
        thun.scale=random(0.4,0.6)
        thun.lifetime = 30;
        thun.addAnimation("thunimg",thunImg)
        console.log(thun.x)

    }


}
function rain (){

    
    if (frameCount % 1 === 0){

        var RAIN = createSprite(100,0,10,10)
        RAIN.velocityY = random(5,6);
        RAIN.addImage("drop",drop)
        RAIN.x = Math.round(random(0,1200));
        RAIN.scale=random(0.2,0.4)
        RAIN.lifetime = 200;

    }

    RAIN.bounceOff(man)

}

