class Box {
  
    constructor(x , y , width , height) {
    this.x = x;
    this.y = y;
    this.w= width;
    this.h = height;
  }

    //make the color boxes appear on canvas
    appear()
    {
      stroke(0);
      strokeWeight(10);
      noFill();
      rect(this.x , this.y , this.w , this.h);
    }
}

