function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

//level 1
  box1 = new Box(120,275,30,40);
  box2 = new Box(150,275,30,40);
  box3 = new Box(180,275,30,40);
  box4 = new Box(210,275,30,40);
  box5 = new Box(240,275,30,40);
  box6 = new Box(270,275,30,40);
  box7 = new Box(300,275,30,40);

  //level 2
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  
  //level 3
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);

  //Top
  box16 = new Box(390,155,30,40);

}

function draw() {
  background(255,255,255);  
  drawSprites();

  box1.display();
  box2.display();
  box3.display();
  box4.diplay();
  box5.display();
  box6.diaplay();
  box7.diaplay();
  box8.display();
  box9.diaplay();
  box10.diplay();
  box11,display();
  box12.diaplay();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
}