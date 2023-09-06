var status2="";
objects=[];

function preload() {

}

function setup() {
    canvas = createCanvas(500,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size();
    video.hide();
}

function draw() {
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects..";
    object_name = document.getElementById(object_name).value;
}

function modelLoaded() {
    console.log("E> Model is Loaded ^w^ <3");
    status2 = true;
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }

    console.log(results);
    objects = results;

}
