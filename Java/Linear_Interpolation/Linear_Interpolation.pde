float x = 0;

void setup(){
  size(600,400);
}


void draw(){
  float target = mouseX + random(-100,100);
  x = lerp(x, target, 0.1);
  background(51);
  
  fill(255,0,100);
  ellipse(target, 200, 32,32);
  
  fill(200,0,200);
  ellipse(x, 200, 32,32);
}
