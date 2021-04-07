//selectors-----------------------------------------------------------------------------
let newFileButton = document.getElementById("newFileButton");
let createNewFileButton = document.getElementById("createNewFileButton");
let exportButton = document.getElementById("exportButton");

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
//This Event-Listner will create new Canvas 
createNewFileButton.addEventListener("click", createNewCanvas);
//This Event-Listner will export File
exportButton.addEventListener("click", exportMyImage); 
//User Updating Actionbar Values
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

