noseX=0
noseY=0

function preload()
{
  clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup()
{
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300)
  video.hide();
  poseNet=ml5.poseNet(video,modleloaded);
  poseNet.on('pose',gotPoses);
}
function modleloaded()
{
  console.log('poseNet is Initialized');
}
function draw()
{
  image(video,0,0,300,300);
  fill(255,0,0);
  stroke(255,0,0)
  image(clown_nose,noseX -20,noseY +5,40,40)
}
function gotPoses(results)
{
  if(results.length>0)
  {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX"+results[0].pose.nose.x);
    console.log("noseY"+results[0].pose.nose.y);
  }
}
function take_snapshot()
{
  save("Dulmitha.png")
}