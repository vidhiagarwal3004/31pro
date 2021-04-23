 
 const World=  Matter.World;
 const Bodies = Matter.Bodies;
 const Events = Matter.Events;
 const  Engine =  Matter.Engine;

  var ground;
  var  engine,world;
  var particles = [];
  var divisions = [];
  var plinkos = [];
  var divisionHeight = 200;
  var score = 0;


  function setup() {
  createCanvas(700,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for(var k=0; k<=width/2; k=k+80)
  {
    divisions.push(new Divisions(k, divisionHeight/2 , 10, ))
  }

  for(var  j = 75; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75))
  }

  for( var j = 50; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175))
  }

  for( var j = 75; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275))
  }

  for( var j = 50; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,375))
  }
}

function draw() {
  background("black"); 
  textSize(20);
  text("score:"+score,20,30);
  Engine.update(engine);
  ground.display();

  for(var i=0;i<plinko.length ; i++)
{
  plinko[i].display();
}

if(frameCount%60==0)
{
  particles.push(new Particles(random(100,700),10,10))
  score++;
}
for(var j=0 ; j<particles.length ; j++)
{
 particles[j].display();
}
for(var k=0 ; k<divisions.length ; k++)
{
 divisions[k].display();
}

  drawSprites();
}