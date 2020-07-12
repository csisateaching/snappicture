var video;
var button1;
var button2;
var wcanvas = 550;
var hcanvas = 600;
var w = 320;
var h = 240;
var c;
var img;
var counterp=0;

function preload() {
  //img = loadImage('assets/isalogo.png');
}

function setup() {
  c = createCanvas(wcanvas, hcanvas);
  background(255);
  rect(0,25,w,h);
  video = createCapture(VIDEO);
  video.size(w, h);
  button1 = createButton('Snap');
  button1.position(w + 50, 20);
  button1.mousePressed(takesnap);
  button2 = createButton('Save');
  button2.position(w + 50, 50);
  button2.mousePressed(savesnap);
  //image(img, w+30 , 550);
  textSize(14);
  textStyle(BOLD);
  textAlign(CENTER);
  text('Snap', w / 2, 20);
  textSize(14);
  textAlign(CENTER);
  text('LiveCam',w/2, 290+30);
  textSize(14);
  textAlign(LEFT);
  text('Instructions',w + 40, 350);
  video.position(0,310+30);
  textStyle(NORMAL);
  textSize(12);
  textAlign(LEFT);
  text('Click "Snap" button to take a snap \n of your picture, once the snap is\n taken press the "Save" button to \n save it to your computer.', w + 40, 370);

}



function takesnap(){
  image(video, 0, 25);

}

function savesnap() {
  //save(c.get(0, 25, w, h), 'StopMotion.png');
  save(c.get(0, 25, w, h), 'StopMotion'+counterp+'.png');
  counterp=counterp+1
}

function draw() {

}