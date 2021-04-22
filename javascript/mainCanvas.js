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

/*    
dpi is the pixel density or dots per inch.
96 dpi means there are 96 pixels per inch.
1 inch is equal to 2.54 centimeters.

1 inch = 2.54 cm
dpi = 96 px / in
96 px / 2.54 cm

Therefore one centimeter is equal to
1 cm = 96 px / 2.54
1 cm = 37.79527559055118 px

If we round the pixel value, we get
1 cm = 38 px for 96 dpi.
*/
    let widthLabel = document.querySelector("#widthLabel");
    let heightLabel = document.querySelector("#heightLabel");
    console.log(widthLabel.value + "and " + heightLabel.value);
    let dpi = 96;
    let widthPixal = Math.round((96/2.54) * parseInt(widthLabel.value)); 
    let heightPixal = Math.round((96/2.54) * parseInt(heightLabel.value));
    myFile.width = widthPixal;
    myFile.height = heightPixal;
    console.log(widthPixal + "and " + heightPixal);
    
    return myFile;
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

    let shirtSize = document.querySelector("#shirtSize").options[document.querySelector("#shirtSize").selectedIndex].value;
    let landscapeIconStyle = getComputedStyle(document.getElementById("landscapeIcon"));
    let potraitIconStyle = getComputedStyle(document.getElementById("potraitIcon"));
    let widthLabel = document.querySelector("#widthLabel");
    let heightLabel = document.querySelector("#heightLabel");
    //Setting default values of Dialog Box
    if(shirtSize === "A5" && landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)"){
        widthLabel.value = fileSize.A5.height.cm;
        heightLabel.value = fileSize.A5.width.cm;
    }
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
