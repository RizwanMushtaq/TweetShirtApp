//Update Background Color
function updateBackgroundColor(e){
    updateLocalStorage(e);
    drawMyObjectWithUpdates();
}
//Update Background Shape
function updateBackgroundShape(e){
    updateLocalStorage(e);
    drawMyObject();
}
//Update Background Shape Color
function updateBackgroundShapeColor(e){
    updateLocalStorage(e);
    drawMyObjectWithUpdates();
}
//Update Text Color
function updateTextColor(e){
    updateLocalStorage(e);
    drawMyObjectWithUpdates();
}
//Update Tweet
function updatePickTweet(e){
    updateLocalStorage(e);
    drawMyObjectWithUpdates();
}
//Update Tweet
function updatetwitterIcon(e){
    updateLocalStorage(e);
    drawMyObjectWithUpdates();
}
//This function will export File
function exportMyImage(){
    console.log("In Export File Function");
    let myCanvas = document.getElementById("myCanvas");
    let image = new Image();
    //By Default It will save png image
    image.src = myCanvas.toDataURL();

    let exportLink = document.getElementById("exportLink");
    exportLink.href = image.src;
}
//Update Local Storage myFile
function updateLocalStorage(e){
    let target = e.target;
    let myFile = JSON.parse(localStorage.getItem("myFile"));
    if(target.id === "backgroundColor"){
        myFile.backgroundColor = target.value;
    } else if(target.id === "backgroundShape"){
        myFile.backgroundShape = target.value;
    } else if(target.id === "backgroundShapeColor"){
        myFile.backgroundShapeColor = target.value; 
    } else if(target.id === "textColor"){
        myFile.textColor = target.value; 
    } else if(target.id === "pickTweet"){
        myFile.pickTweet = target.value; 
    }else if(target.id === "twitterIcon"){
        if(myFile.twitterIcon === true){
            myFile.twitterIcon = target.checked; 
        }else {
            myFile.twitterIcon = target.checked;
        }
    }
    localStorage.setItem("myFile", JSON.stringify(myFile));
}
//Update Only background Color and draw my Object
function drawMyObjectWithUpdates(){
    console.log("In drawMyObjectWithUpdates function");
    let myFile = JSON.parse(localStorage.getItem("myFile"));

    let myCanvas = document.querySelector("#myCanvas");
    let context = myCanvas.getContext("2d");
    myCanvas.width = myFile.width;
    myCanvas.height = myFile.height;
    //set background color
    context.fillStyle = myFile.backgroundColor;
    context.fillRect(0,0,myFile.width,myFile.height);
    //set background shape
    if(myFile.backgroundShape === "none"){
        console.log("background shpae is " + myFile.backgroundShape);
    } else if(myFile.backgroundShape === "circle"){
        console.log("background shpae is " + myFile.backgroundShape);
        drawCircles(myFile.backgroundShapeColor);
    } else if(myFile.backgroundShape === "square"){
        console.log("background shpae is " + myFile.backgroundShape);
    } else if(myFile.backgroundShape === "triangle"){
        console.log("background shpae is " + myFile.backgroundShape);
    }
    //set Text
    context.lineWidth = 2.0;
    context.font = '24px Arial';
    context.strokeStyle = myFile.textColor;
    context.strokeText(myFile.pickTweet, 10, myFile.height/2);

    if(myFile.twitterIcon === true){
        let twitterIcon = new Image();
        twitterIcon.src = 'twitterIcon64px.png';
        twitterIcon.onload = function(){
            context.drawImage(twitterIcon, 10,10);
        }
    }
    myCanvas.style.display = "block";
}
