//functions------------------------------------------------------------------------------

//This function will cancel new Canvas Sheet
function cancelNewCanvas(){
    console.log("In Cancel New Canvas Function");
    hideNewFileDialog();
}
//This function will create new Canvas Sheet
function createNewCanvas(){
    console.log("In Create New Canvas Function");
    hideNewFileDialog();
    resetInputProperties();
    let myFile = new File();
    myFile = prepareMyObject(myFile);
    saveMyObject(myFile);
    drawMyObject();
    enableActionBar();
}
//This function will draw Object after reading from Local Storage
function drawMyObject(){
    console.log("In drawMyObject function");
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
        SaveCirclesinLocalStorage(myFile.width, myFile.height);
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
        twitterIcon.src = 'images/twitterIcon64px.png';
        twitterIcon.onload = function(){
            context.drawImage(twitterIcon, 10,10);
        }
    }
    myCanvas.style.display = "block";


    //reading canvas data
    //var myImageData = context.createImageData(myCanvas.width,myCanvas.height);
    console.log("my Image width: " + myCanvas.width);
    console.log("my Image height: " + myCanvas.height);

}
//This function will save Object in Local Storage
function saveMyObject(myFile){
    localStorage.setItem("myFile", JSON.stringify(myFile));
}
//This function will save all properties into Object myFile
function prepareMyObject(myFile){
    //Reading all inputs from DOM
    let backgroundColor = document.querySelector("#backgroundColor");
    myFile.backgroundColor = backgroundColor.value;
    let backgroundShape = document.querySelector("#backgroundShape");
    myFile.backgroundShape =backgroundShape.options[backgroundShape.selectedIndex].value;
    let backgroundShapeColor = document.querySelector("#backgroundShapeColor");
    myFile.backgroundShapeColor = backgroundShapeColor.value;
    let textColor = document.querySelector("#textColor");
    myFile.textColor = textColor.value;
    let pickTweet = document.querySelector("#pickTweet");
    myFile.pickTweet = pickTweet.options[pickTweet.selectedIndex].innerText;
    let twitterIcon = document.querySelector("#twitterIcon");
    myFile.twitterIcon = twitterIcon.checked;

    setupCanvas(myFile);
    /*
    //Reading File size
    let shirtSize = document.querySelector("#shirtSize");
    let shirtSizeValue = shirtSize.options[shirtSize.selectedIndex].value;
    if(shirtSizeValue === "A1"){
        myFile.width = fileSize.a1.width.mm;
        myFile.height = fileSize.a1.height.mm;
        
    } 
    else if(shirtSizeValue === "small"){
        myFile.width = 600;
        myFile.height = 200;
    } else if(shirtSizeValue === "large"){
        myFile.width = 700;
        myFile.height = 250;
    } else if(shirtSizeValue === "xtra-large"){
        myFile.width = 800;
        myFile.height = 300;
    }
    */
    return myFile;
}
//This function will setup values of canvas width and height
function setupCanvas(myFile){
    console.log("In setupCanvas function");
    let shirtSize = document.querySelector("#shirtSize");
    let shirtSizeValue = shirtSize.options[shirtSize.selectedIndex].value;
    
    let myCanvas = document.querySelector("#myCanvas");
    var dpr = window.devicePixelRatio;
    console.log(dpr);
    //Formula to convert mm to pixels:  (pixels = dpi * mm / 25.4 mm) (pixels = dpi * cm / 2.54 cm)
    let dpi = 96;
    var rect = myCanvas.getBoundingClientRect();
    console.log(rect);
    
    if(shirtSizeValue === "A5"){
        myFile.width = Math.round((dpi * fileSize.a5.width.cm)/2.54);
        myFile.height = Math.round((dpi * fileSize.a5.height.cm)/2.54);        
    } 

}
//This function will reset all properties
function resetInputProperties(){
    let backgroundColor = document.querySelector("#backgroundColor");
    backgroundColor.value = backgroundColor.defaultValue;
    let backgroundShape = document.querySelector("#backgroundShape");
    backgroundShape.selectedIndex = 0;
    let backgroundShapeColor = document.querySelector("#backgroundShapeColor");
    backgroundShapeColor.value = backgroundShapeColor.defaultValue;
    let textColor = document.querySelector("#textColor");
    textColor.value = textColor.defaultValue;
    let pickTweet = document.querySelector("#pickTweet");
    pickTweet.selectedIndex = 0;
    let twitterIcon = document.querySelector("#twitterIcon");
    twitterIcon.checked = true;
}
//This function will hide newFileDialogBox
function hideNewFileDialog(){
    let whiteBackground = document.getElementById("whiteBackground");
    let newFileDialogBox = document.getElementById("newFileDialogBox");
    whiteBackground.style.display = "none";
    newFileDialogBox.style.display = "none";
}
//This function will show newFileDialogBox to user
function showNewFileDialog(){
    let whiteBackground = document.getElementById("whiteBackground");
    let newFileDialogBox = document.getElementById("newFileDialogBox");
    whiteBackground.style.display = "block";
    newFileDialogBox.style.display = "block";

    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    newFileDialogBox.style.left = (winWidth/2)- 480/2 + "px";
    newFileDialogBox.style.top = "150px";
}
//Disable Action Bar before creation any canvas
function diableActionBar() {
    //Reading all inputs from DOM
    let backgroundColor = document.querySelector("#backgroundColor");
    let backgroundShape = document.querySelector("#backgroundShape");
    let backgroundShapeColor = document.querySelector("#backgroundShapeColor");
    let textColor = document.querySelector("#textColor");
    let pickTweet = document.querySelector("#pickTweet");
    let twitterIcon = document.querySelector("#twitterIcon");
    let exportButton = document.querySelector("#exportButton");
    let exportLink = document.querySelector("#exportLink");

    backgroundColor.disabled = true;
    backgroundShape.disabled = true;
    backgroundShapeColor.disabled = true;
    textColor.disabled = true;
    pickTweet.disabled = true;
    twitterIcon.disabled = true;
    exportButton.disabled = true;
    exportLink.removeAttribute("href");
    exportLink.children[0].style.color = "#a7adba";
}
//Enable action bar fields after creating canvas
function enableActionBar() {
    //Reading all inputs from DOM
    let backgroundColor = document.querySelector("#backgroundColor");
    let backgroundShape = document.querySelector("#backgroundShape");
    let backgroundShapeColor = document.querySelector("#backgroundShapeColor");
    let textColor = document.querySelector("#textColor");
    let pickTweet = document.querySelector("#pickTweet");
    let twitterIcon = document.querySelector("#twitterIcon");
    let exportButton = document.querySelector("#exportButton");
    let exportLink = document.querySelector("#exportLink");

    backgroundColor.disabled = false;
    backgroundShape.disabled = false;
    backgroundShapeColor.disabled = false;
    textColor.disabled = false;
    pickTweet.disabled = false;
    twitterIcon.disabled = false;
    exportButton.disabled = false;
    exportLink.setAttribute("href", "");
    exportLink.children[0].style.color = "#198c19";
}
