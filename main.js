function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
Classifier = ml5.soundClassifier('' , modelReady);
}