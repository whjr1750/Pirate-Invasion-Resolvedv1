class Boat {

  constructor(x, y, width, height,boatPos) {
    var options = {
      isStatic: false
    };
    this.image=loadImage("assets/boat.png")
    this.width = width;
    this.height = height;
    this.boatPosition= boatPos;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var angle=this.body.angle
    var pos = this.body.position;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("brown");
    imageMode(CENTER);
   // rect(0, 0, this.width, this.height);
   image(this.image,0,0,this.width,this.height)
   noTint ()
    pop();
  }
}
