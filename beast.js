console.log("MR BEAST");
console.log("To whoever sees this, this webpage is a joke. Made by AJTalksAboutStuff")

function beast(){
var beast = document.createElement("video");  
beast.setAttribute("src", "https://cdn.glitch.me/788ed3c5-1869-42bb-9e05-11c8fba0acdf/MR_BEAST.mp4?v=1673926556697");  
beast.setAttribute("id", "beast"); 
beast.setAttribute("controls", "autoplay"); 
beast.setAttribute("width", "650"); 
beast.setAttribute("autoplay", "muted");
beast.setAttribute("autostart", "true"); 
document.body.appendChild(beast);
  
};

beast();