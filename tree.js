class TreeConstrain{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA=bodyA;
    }
    fly(){
        this.rope.bodyA=null;
    }
    display(){
        
        if(this.sling.bodyA){
            var pointA=this.rope.bodyA;
            var pointB=this.pointB;
        }
    }
}