//This funcation update the selection of landscape or potrait icon, as user select any icon in new file dialog
function updatedialogIcon(e) {
    let target = e.target;
    console.log(target.id);
    if(target.id === "landscapeIcon" || target.id === "landscapeIconImage"){
        let landscapeIconStyle = getComputedStyle(document.getElementById("landscapeIcon"));
        let potraitIconStyle = getComputedStyle(document.getElementById("potraitIcon"));
        if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
            //Do nothing
        } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
            landscapeIcon.style.border = "2px solid black";
            potraitIcon.style.border = "0px none rgb(0, 0, 0)";
        }
    } else if(target.id === "potraitIcon" || target.id === "potraitIconImage"){
        let landscapeIconStyle = getComputedStyle(document.getElementById("landscapeIcon"));
        let potraitIconStyle = getComputedStyle(document.getElementById("potraitIcon"));
        if(landscapeIconStyle.border === "2px solid rgb(0, 0, 0)" && potraitIconStyle.border === "0px none rgb(0, 0, 0)") {
            landscapeIcon.style.border = "0px none rgb(0, 0, 0)";
            potraitIcon.style.border = "2px solid rgb(0, 0, 0)";
        } else if(landscapeIconStyle.border === "0px none rgb(0, 0, 0)" && potraitIconStyle.border === "2px solid rgb(0, 0, 0)") {
            //Do nothing
        }
    }
}
