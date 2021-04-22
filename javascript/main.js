//selectors-----------------------------------------------------------------------------
let newFileButton = document.getElementById("newFileButton");
let exportButton = document.getElementById("exportButton");

//NewFileDialog
let createNewFileButton = document.getElementById("createNewFileButton");
let cancelNewFileButton = document.getElementById("cancelNewFileButton");
let shirtSize = document.querySelector("#shirtSize");
let dialogIconContainer = document.getElementById("dialogIconContainer");

//ActionBar
let backgroundColor = document.getElementById("backgroundColor");
let backgroundShape = document.getElementById("backgroundShape");
let backgroundShapeColor = document.getElementById("backgroundShapeColor");
let textColor = document.getElementById("textColor");
let pickTweet = document.getElementById("pickTweet");
let twitterIcon = document.getElementById("twitterIcon");

//events------------------------------------------------------------------------------
//Window onload Event
window.onload = function() {
    //Disable all input fields in ActionBar except NewFile Input Field
    diableActionBar();
}
//This Event-Listner will show New File Dialog 
newFileButton.addEventListener("click", showNewFileDialog);
//This Event-Listner will export File
exportButton.addEventListener("click", exportMyImage); 

//NewFileDialog
//This Event-Listner will create new Canvas 
createNewFileButton.addEventListener("click", createNewCanvas);
//This Event-Listner will cancel new Canvas 
cancelNewFileButton.addEventListener("click", cancelNewCanvas);
//This Event-Listner will update focus on the landscape or potrait Icon
dialogIconContainer.addEventListener("click", updatedialogIcon);
//Updating Print Size in drop down list
shirtSize.addEventListener("change",updateSize);

//ActionBar
//This Event-Listner will update the background color of canvas
backgroundColor.addEventListener("input", updateBackgroundColor); 
//This Event-Listner will update the background shape of canvas
backgroundShape.addEventListener("change", updateBackgroundShape);
//This Event-Listner will update the background shape Color
backgroundShapeColor.addEventListener("input", updateBackgroundShapeColor);
//This Event-Listner will update Text Color
textColor.addEventListener("input", updateTextColor);
//This Event-Listner will update Tweet from list
pickTweet.addEventListener("change", updatePickTweet);
//This Event-Listner will update Tweeter Icon
twitterIcon.addEventListener("change", updatetwitterIcon);

