class paper{
    constructor(x,y,r){
        var options = {
            istatic : false,
            'restitution':0.8,
            'friction' : 0.5,
            'density' : 1.2
        }
        
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x, this.y, this.r/2, options)
        this.image = loadImage("sprites/paper.png");
        World.add(world, this.body)
    }
    display(){
        var paperpos = this.body.position
        push()
        translate(paperpos.x, paperpos.y)
        imageMode(CENTER)
        image(this.image, paperpos.x, paperpos.y, 100, 630);
        strokeWeight(3)
        fill("white")
        ellipse(0, 0, this.r, this.r)
        pop()
    }
}