class Mango{
    constructor(x,y,r){
       var options={
            isstatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        this.image=loadImage("mango.png");
       
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,200,200,this.r);
        pop();
    }
}