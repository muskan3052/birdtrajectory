class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectoryArray=[];
  }

  display() {
    super.display();
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];
    this.trajectoryArray.push(position);
    }
    for (var i=0;i<this.trajectoryArray.length;i++){
    image(this.smoke, this.trajectoryArray[i][0], this.trajectoryArray[i][1])
    }
  }
}
