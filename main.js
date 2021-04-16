img = "";
status = "";
objects = [];
display_object = [];

function preload(){
    video = createCapture(VIDEO);
    video.hide();
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' ,modelLoaded);

}

function draw(){
    image(video, 0, 0, 640, 420);
    

    if(status != "")
    {
        for(i = 0; i < objects.length; i++)
        {
      
        document.getElementById("status").innerHTML = status;

        fill('#FF0000');
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%" , objects[i].x , objects[i].y);
        noFill();
        stroke('#FF0000');
        rect(objects[i].x , objects[i].y , objects[i].width, objects[i].height);
        display_object.push(objects[i].label);
        }
        document.getElementById("number_of_objects").innerHTML = display_object;
    }
}

function modelLoaded(){
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results){
if (error){
console.log(error);
}
console.log(results);
objects = results;
document.getElementById("Status").innerHTML = objects ;
}

