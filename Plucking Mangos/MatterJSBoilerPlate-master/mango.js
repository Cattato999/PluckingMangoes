class Mango{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution:0,
            friction: 1,
            density: 1.2
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r/2,options);
        this.image = loadImage("mango.png");
        
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image,0,0,90,90);
        pop();
    }
}