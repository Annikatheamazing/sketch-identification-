function setup(){
    canavs = createCanvas(280, 280);
    canavs.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;

}


function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function clearCanvas(){
    background("white");
  }

function draw(){
    //Set stroke weight to 10
    strokeWeight(10);
    //Set stroke color to black
    stroke(0);
    // If mouse is pressed , draw line between previous and current mouse positions
    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX , mouseY);
    
    }
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(results){

    console.log(results);
    document.getElementById('label').innerHTML = 'label:  ' + results[0].label;

    document.getElementById('confidence').innerHTML = 'Confidence:  ' + Math.round(results[0].confidence * 100) + '%';


    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}