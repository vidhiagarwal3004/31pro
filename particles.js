class Particles{
    constructor(x,y,radius)
    {
        var options = {
            restitution:0.4
        }
        this.r = radius;
        this.body = Bodies.cirlce(x,y,this.r,options);
        this.colour = colour(random(0,255),random(0,255),random(0,255));
        world.add(world,this.body);
    
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
         fill(this.colour);
         ecllipseMode(CENTER);
         ecllipse(0,0,this.r,this.r);
         pop();
    }
}