leftWristx=0;
rightWristx=0;
difference = 0;

function setup(){
    canvas = createCanvas(400,400);
    Video = createCapture(VIDEO);
    Video.size(400,400);
    canvas.position(600,90);
poseNet = ml5.poseNet(Video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("modelLoaded");
}
function draw(){
    background("coral");
    fill("Black");
    textSize(difference);
    text("ANKUR",50,150);
    document.getElementById("square_side").innerHTML="size of the letter is "+difference+"px";
}
function gotPoses(results){
if (results.length>0) {
    console.log(results);
    rightWristx = results[0].pose.rightWrist.x;
    leftWristx = results[0].pose.leftWrist.x;
    difference = floor(leftWristx - rightWristx);
}
}

