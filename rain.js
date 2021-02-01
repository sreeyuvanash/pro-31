class Rain {

    constructor(x,y,radius){

        var opi={       
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.circle(x,y,radius,opi);
        //this.radius=5;

        World.add(world , this.body);
    }

    rain1(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();
      }

}