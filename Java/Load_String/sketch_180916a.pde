String[] words;
int index = 0;
void setup(){
  size(600,400);
  background(0);
  String[]lines = loadStrings("text.txt");
  String entireplay = join(lines, " ");
  println(entireplay);
  words = splitTokens(entireplay, ",.?!: ");
  printArray(words);
  frameRate(10);
}

void draw(){
  background(0);
  fill(255);
  textSize(64);
  textSize(48);
  textAlign(CENTER);
  text(words[index].toLowerCase(), width/2, height/2);
  index++;
}
