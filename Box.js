class Box { 
    constructor(){
   var options = {
        restitution:2
    }
        this.body=Bodies.rectangle(200,100,10,10,options)
        this.width=width;
        this.height=height
        World.add(world,this.body)
}
    display(){
        var pos=this.body.position
        rect(pos.x,pos.y,this.width,this.height)
    }
};