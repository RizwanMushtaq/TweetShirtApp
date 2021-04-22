//This funcation update the selection of landscape or potrait icon, as user select any icon in new file dialog
function updatedialogIcon(e) {
    let target = e.target;

    let shirtSize = document.querySelector("#shirtSize").options[document.querySelector("#shirtSize").selectedIndex].value;
    let landscapeIcon = document.getElementById("landscapeIcon");
    let potraitIcon = document.getElementById("potraitIcon");
    let landscapeIconStyle = getComputedStyle(document.getElementById("landscapeIcon"));
    let potraitIconStyle = getComputedStyle(document.getElementById("potraitIcon"));
    let widthLabel = document.querySelector("#widthLabel");
    let heightLabel = document.querySelector("#heightLabel");

    console.log(target.id);
    if(target.id === "landscapeIcon" || target.id === "landscapeIconImage"){
        if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
            //Do nothing
        } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
            landscapeIcon.style.border = "2px solid black";
            potraitIcon.style.border = "0px none rgb(0, 0, 0)";
            //Update width and height values
            let temp = widthLabel.value;
            widthLabel.value = heightLabel.value;
            heightLabel.value = temp;
        }
    } else if(target.id === "potraitIcon" || target.id === "potraitIconImage"){
        if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
            landscapeIcon.style.border = "0px none rgb(0, 0, 0)";
            potraitIcon.style.border = "2px solid rgb(0, 0, 0)";
            //Update width and height values
            let temp = widthLabel.value;
            widthLabel.value = heightLabel.value;
            heightLabel.value = temp;
        } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
            //Do nothing
        }
    }
}
//This function is triggered when user changes the selection in dropdown list the size of print i.e either A1 or A2 or Custom
function updateSize(e) {
    console.log("In Update Size Function");
    let shirtSize = document.querySelector("#shirtSize").options[document.querySelector("#shirtSize").selectedIndex].value;
    let landscapeIconStyle = getComputedStyle(document.getElementById("landscapeIcon"));
    let potraitIconStyle = getComputedStyle(document.getElementById("potraitIcon"));
    let widthLabel = document.querySelector("#widthLabel");
    let heightLabel = document.querySelector("#heightLabel");
    //Check if User does not select Custom in Drop down list
    if(shirtSize !== "Custom") {
        widthLabel.style.backgroundColor = '#d3d3d3';
        widthLabel.style.border = 'none';
        widthLabel.style.pointerEvents = 'none';
        
        heightLabel.style.backgroundColor = '#d3d3d3';
        heightLabel.style.border = 'none';
        heightLabel.style.pointerEvents = 'none';

        //Check if No Border is assigned to Icons, when user is manipulating custom options and user selected same width and height for print
        if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)"){
            landscapeIcon.style.border = "2px solid black";
            potraitIcon.style.border = "0px none rgb(0, 0, 0)";
        }
        //If user changes to 
        if(shirtSize === "A1") {
            if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A1.height.cm;
                heightLabel.value = fileSize.A1.width.cm;
            } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A1.width.cm;
                heightLabel.value = fileSize.A1.height.cm;
            }
        } else if(shirtSize === "A2") {
            if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A2.height.cm;
                heightLabel.value = fileSize.A2.width.cm;
            } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A2.width.cm;
                heightLabel.value = fileSize.A2.height.cm;
            }
        } else if(shirtSize === "A3") {
            if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A3.height.cm;
                heightLabel.value = fileSize.A3.width.cm;
            } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A3.width.cm;
                heightLabel.value = fileSize.A3.height.cm;
            }
        } else if(shirtSize === "A4") {
            if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A4.height.cm;
                heightLabel.value = fileSize.A4.width.cm;
            } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A4.width.cm;
                heightLabel.value = fileSize.A4.height.cm;
            } 
        } else if(shirtSize === "A5") {
            if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A5.height.cm;
                heightLabel.value = fileSize.A5.width.cm;
            } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A5.width.cm;
                heightLabel.value = fileSize.A5.height.cm;
            }
        } else if(shirtSize === "A6") {
            if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A6.height.cm;
                heightLabel.value = fileSize.A6.width.cm;
            } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A6.width.cm;
                heightLabel.value = fileSize.A6.height.cm;
            }
        } else if(shirtSize === "A7") {
            if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A7.height.cm;
                heightLabel.value = fileSize.A7.width.cm;
            } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
                widthLabel.value = fileSize.A7.width.cm;
                heightLabel.value = fileSize.A7.height.cm;
            }
        }
    } else if(shirtSize === "Custom") {
            widthLabel.style.backgroundColor = '#ffffff';
            widthLabel.style.border = 'solid #00ff00';
            widthLabel.style.pointerEvents = 'auto';
            widthLabel.focus();
            heightLabel.style.backgroundColor = '#ffffff';
            heightLabel.style.border = 'solid #00ff00';
            heightLabel.style.pointerEvents = 'auto';

            widthLabel.value = 10;
            heightLabel.value = 8;
    }
}

//This function is triggered from DOM, when user enter a value of width or height in New File Dialog,
//and after it click some where else, mean user is done with input field
function updateInputOnBlur() {
    console.log("In updateInputOnBlur Function");
    let widthLabel = document.querySelector("#widthLabel");
    let heightLabel = document.querySelector("#heightLabel");

    let landscapeIcon = document.getElementById("landscapeIcon");
    let potraitIcon = document.getElementById("potraitIcon");

    if(widthLabel.value === ""){
        widthLabel.value = 10;
    } else if(heightLabel.value === ""){
        heightLabel.value = 8;
    }

    if(parseInt(widthLabel.value) > parseInt(heightLabel.value)){
        landscapeIcon.style.border = "2px solid black";
        potraitIcon.style.border = "0px none rgb(0, 0, 0)";
    } else if(parseInt(widthLabel.value) < parseInt(heightLabel.value)){
        landscapeIcon.style.border = "0px none rgb(0, 0, 0)";
        potraitIcon.style.border = "2px solid rgb(0, 0, 0)";
    } else {
        landscapeIcon.style.border = "0px none rgb(0, 0, 0)";
        potraitIcon.style.border = "0px none rgb(0, 0, 0)";
    } 
}