class bin{
    constructor(x,y){
        var options = {
            istatic : true,
            'density' : 500
        }
        this.width = 150;
        this.height = 130;
        this.x = x
        this.y = y
        this.thickness = 20
        this.body = Bodies.rectangle(x,y,150,130,options);
        this.image = loadImage("sprites/dustbingreen.png")
    
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}