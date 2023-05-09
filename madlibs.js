const generateButton = document.getElementById("generateButton");
const output = document.getElementById("MadLibsOutput");
let missingInput = true;

function printMadLib(properNoun, verbPastTense1, verbPastTense2, adjective, object){
    return(`What's up ${properNoun}? Did you get a chance to ${verbPastTense1} with the fish yet? 
    I think it ${verbPastTense2} all over the floor earlier? But it should be fine since I bought a
    ${object} to fix everything because it's soooo ${adjective}, it's crazy!`);
};

generateButton.addEventListener("click", () => {
    properNoun = document.getElementById("properNoun").value;
    verbPastTense1 = document.getElementById("verbPastTense1").value;
    verbPastTense2 = document.getElementById("verbPastTense2").value;
    adjective = document.getElementById("adjective").value;
    object = document.getElementById("object").value;

    if(!properNoun || !verbPastTense1 || !verbPastTense2 || !adjective || !object){
        missingInput = true;
    }else {
        missingInput = false;
    }

    if (missingInput) {
        output.innerHTML = "Please fill in the missing text box to continue";
    }else {
        let madlibStory = printMadLib(properNoun, verbPastTense1, verbPastTense2, adjective, object);
        output.innerHTML = madlibStory;
    }
});