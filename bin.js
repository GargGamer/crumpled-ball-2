class bin{
    constructor(x,y,width,height){
        var options = {
            istatic : true,
            'density' : 500
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image = loadImage("sprites/dustbingreen.png")
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}