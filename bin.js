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
        bin1 = Bodies.rectangle(760,630,30,130,options);
        bin2 = Bodies.rectangle(800,660,120,30,options);
        bin3 = Bodies.rectangle(830,630,30,130,options);
    
    World.add(world, bin1);
    World.add(world, bin2);
    World.add(world, bin3);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
    }
}