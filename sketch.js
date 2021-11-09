
var torsoX = 84;
var torsoY = 100;
var torsoDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 52;
var count = 3;
var sizeDirection = 2;

var x = 100;
var y = 200;
var diameter = 50;

function setup() {
createCanvas(500,500);
}

 function draw() {

background(220);
circle(22,100,48);

//head/;
fill(22,44,66,88,4);
circle(22,66,98);
{
fill(2,44,7);
circle(x,y,diameter);
x++;
}
fill(33,55,77,8);
rect(122,200,218,199);

fill(2,4,6,8,55,4);
circle(torsoX,torsoY,100);

 fill(66,40,22);
 triangle(30, 75, 58, 20, 86, 75);

 fill(66,40,22,8);
 point(50, 75);

  line(320, 220, 185, 275);

  fill(22);
  circle(55,300);

  fill(44,3,4,7,2);
  circle(88,360,250);

//name and title/;
  textSize(22)
    fill(2,5,33);
    text("SELF PORTRAT BY PEARL MONROE", 15,64);



    // head
    fill(25, 55, 6);
    circle(bodyX,bodyY,175);
    bodyX+=bodyDirection;
    if(bodyX >= 608 || bodyX <= 182)
    {
        bodyDirection *= 1;
    }
    //abstractions/;

  // body
   fill(30, 64, 150);
   rect(200,torsoY,100,150);
   torsoY += torsoDirection;
   if(torsoY <= 0 || torsoY >= 450 )
   {
       torsoDirection *= -1;
   }
}
