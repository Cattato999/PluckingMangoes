class Tree{
    constructor(x,y){
        this.image = loadImage("tree.png");
        this.body=Bodies.rectangle(x,y,50,250,{
            isStatic:true
        });
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,-300,450,600);
        pop();
    }
}