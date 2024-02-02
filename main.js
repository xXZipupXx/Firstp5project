function preload(){

}
function setup(){
Canvas = createCanvas(500,500);
Canvas.position(200,250);
video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,70,70,300,300);
fill(255,0,0);
circle(30,30,70);
circle(470,30,70);
circle(30,470,70);
circle(470,470,70);
fill(0,255,0);
rect(30,25,420,20);
rect(30,25,20,420);
rect(450,30,20,420);
rect(30,450,420,20)
}