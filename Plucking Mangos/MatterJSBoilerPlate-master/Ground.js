class Ground{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,1300,20,{
            isStatic:true
        });
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,1300,40);
        pop();
    }
}