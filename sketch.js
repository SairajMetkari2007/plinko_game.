var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle ;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var gameState="end";

var count=0;
function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 // ground = new Ground (200,330,150,5);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   
    for (var j = -10; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 20; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = -10; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  textSize(20);
  text("500",20,450);
  text(" 500 ", 95, 450);
  text(" 500 ", 175, 450);
  text(" 500 ", 255, 450);
  text(" 100 ", 335, 450);
  text(" 100 ", 415, 450);
  text(" 100 ", 495, 450);
  text(" 200 ", 575, 450);
  text(" 200 ", 655, 450);
  text(" 200 ", 720, 550);

  Engine.update(engine);
 
  if ( gameState =="end") {
    
    //textSize(90);
   // text("GameOver", 150, 300);
    
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
   for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }

   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>660)
       {
             if (particle.body.position.x < 300 && particle.body.position.x>0) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 700 && particle.body.position.x > 601)
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     ground.display();
   }
}

function mousePressed()
{
  //if(gameState!=="end")
 //{
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
 //}   
}