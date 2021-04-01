class Stone{
    constructor(x,y){
        var options={
            isStatic : false,
            restituiton : 0,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world,this.body);
        this.image = loadImage("sprites/stone.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,20,20)
    }
}