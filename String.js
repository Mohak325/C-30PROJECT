class String{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.01,
            length:20
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        stroke(0);
        strokeWeight(2);
        if(this.sling.bodyA){
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
        }
    }
}