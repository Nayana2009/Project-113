function preload(){
img=loadImage("https://i.postimg.cc/sDz6v7vq/m.png");
}
function setup(){
    canvas= createCanvas(350,330);
    canvas.position(470, 200);
    video= createCapture(VIDEO);
    video.size(350,300);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("The Posenet is initialized");
}

function draw(){
image(video,0,0,350,300);
image(img, nosex, nosey, 80, 35); 
}
function take_snapshot(){
save("MustacheFilterImage.png");

}
nosex=0;
nosey=0;
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-35;
        nosey=results[0].pose.nose.y;
        console.log("nose X = "+nosex);
        console.log("nose Y= "+nosey);
    }
}