const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var maxDrops=100;
var drops=[];
var man,manAni;
var thunder,thunder1,thunder2,thunder3,thunder4;                                                              
var umbrella;
var thunderFrame;

function preload(){
    manAni=loadAnimation("images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png");
    thunder1=loadImage("images/t1.png");
    thunder2=loadImage("images/t2.png");
    thunder3=loadImage("images/t3.png");
    thunder4=loadImage("images/t4.png");
}

function setup(){
   var canvas=createCanvas(300,windowHeight);
    engine=Engine.create();
    world=engine.world;
   
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400),random(0,400)));
        }

        var man=createSprite(150,windowHeight-60,20,200);
        man.addAnimation("man",manAni);
        man.scale=0.2;

        umbrella=new Umbrella();
}

function draw(){
    background(0);
    Engine.update(engine);
    // fill(Infinity);
    // text(mouseX+" , "+mouseY,mouseX,mouseY-30);
   
    spawnThunder();
    
    for(var s=0; s<drops.length; s++){drops[s].display();drops[s].update();}
    //umbrella.display();
    drawSprites();
}   

function spawnThunder(){
    var rand=Math.round(random(1,4));
   
if(frameCount%80==0){
    thunderFrame=frameCount;
thunder=createSprite(random(10,370),random(10,30),10,10);
switch(rand){
case 1:thunder.addImage(thunder1);
break;
case 2:thunder.addImage(thunder2);
break;
case 3:thunder.addImage(thunder3);
break;
case 4:thunder.addImage(thunder4);
break;
default:break;
}
thunder.scale=random(0.3,0.6);
}
if(thunderFrame+10===frameCount){
thunder.destroy();
}
}